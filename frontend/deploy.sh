#1
echo "#1 Check Current Container Port ----------------"

CURRENT_PORT=$(docker port frontend)
echo "> 현재 구동중인 PORT : ${CURRENT_PORT:(-4)}"
echo ""


#2
echo "#2 Allocate Target Port -------------"

if [ "${CURRENT_PORT:(-4)}" == "3001" ];
then
	echo "> 기존 애플리케이션의 포트는 3001입니다."
        TARGET_PORT=3002

elif [ "${CURRENT_PORT:(-4)}" == "3002" ]
then
        echo "> 기존 애플리케이션의 포트는 3002입니다."
        TARGET_PORT=3001

else
        echo "> 현재 구동 중인 애플리케이션의 포트를 찾는데 실패하였습니다."
        echo "> 3001 포트를 할당합니다."
        TARGET_PORT=3002
fi
echo ""


#3
echo "#3 Docker Image Build & Test-Container Run  :: React Server--------------"
docker build -t react:0.1 ./
docker run -d -p $TARGET_PORT:3000 --name frontend_test react:0.1
echo ""

#4
echo "#4 Test-Container Connection Test --------------"

# 5
echo "#5 Change Nginx Setting : Current -> Test ------------------------------"
echo "> 전환할 Port: $TARGET_PORT"
echo "> Port 전환"
echo "set \$service_port2 http://172.20.0.1:${TARGET_PORT};" |tee ~/workspace/nginx/service-url2.inc


# 6
echo "> Nginx Reload"
docker restart nginx

PROXY_PORT=$(docker port frontend_test)
echo "> Nginx Current Proxy Port: ${PROXY_PORT:(-4)}"

# 7
echo "기존 구동 중인 container : frontend_test"
docker stop frontend && docker rm frontend ||true
docker rename frontend_test frontend

PROXY_PORT=$(docker port frontend)
echo "> Nginx Current Proxy Port: ${PROXY_PORT:(-4)}"
