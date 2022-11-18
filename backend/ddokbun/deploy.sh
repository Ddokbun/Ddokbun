#1
echo "#1 Check Current Container Port ----------------"

CURRENT_PORT=$(docker port backend)
echo "> 현재 구동중인 PORT : ${CURRENT_PORT:(-4)}"
echo ""


#2
echo "#2 Allocate Target Port -------------"

if [ "${CURRENT_PORT:(-4)}" == "8111" ];
then
	echo "> 기존 애플리케이션의 포트는 8111입니다."
        TARGET_PORT=8222

elif [ "${CURRENT_PORT:(-4)}" == "8222" ]
then
        echo "> 기존 애플리케이션의 포트는 8222입니다."
        TARGET_PORT=8111

else
        echo "> 현재 구동 중인 애플리케이션의 포트를 찾는데 실패하였습니다."
        echo "> 8111 포트를 할당합니다."
        TARGET_PORT=8111
fi
echo ""


#3
echo "#3 Docker Image Build & Test-Container Run  :: Spring Boot Server--------------"

docker build -t springboot:0.1 ./
docker run -d -p $TARGET_PORT:8080 --name backend_test springboot:0.1
echo ""

#4
echo "#4 Test-Container Connection Test --------------"

echo "> $TARGET_PORT 10초 후 Health check 시작"
echo "> curl -s http://172.20.0.1:$TARGET_PORT/api/infra/health "
sleep 5
for retry_count in {1..10}
do
  response=$(curl -s http://172.20.0.1:$TARGET_PORT/api/infra/health)
  sleep 1
  up_count=$(echo $response | grep 'UP' | wc -l)

  if [ $up_count -ge 1 ]
  then # $up_count >= 1 ("UP" 문자열이 있는지 검증)
      echo "> Health check 성공"
      break
  else
      echo "> Health check의 응답을 알 수 없거나 혹은 status가 UP이 아닙니다."
      echo "> Health check: ${response}"
  fi

  if [ $retry_count -eq 10 ]
  then
    echo "> Health check 실패. "
    echo "> Nginx에 연결하지 않고 배포를 종료합니다."
    exit 1
  fi

  echo "> Health check 연결 실패. 재시도..."
  sleep 10
done
echo ""


# 5
echo "#5 Change Nginx Setting : Current -> Test ------------------------------"
echo "> 전환할 Port: $TARGET_PORT"
echo "> Port 전환"
echo "set \$service_port http://172.20.0.1:${TARGET_PORT};" |tee ~/workspace/nginx/service-url.inc


# 6
echo "> Nginx Reload"
docker restart nginx

PROXY_PORT=$(docker port backend_test)
echo "> Nginx Current Proxy Port: ${PROXY_PORT:(-4)}"

# 7
echo "기존 구동 중인 container : backend_test"
docker stop backend && docker rm backend ||true
docker rename backend_test backend

PROXY_PORT=$(docker port backend)
echo "> Nginx Current Proxy Port: ${PROXY_PORT:(-4)}"
