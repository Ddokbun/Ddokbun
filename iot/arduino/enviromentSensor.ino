// DHT11 센서를 쉽게 제어하기 위한 라이브러리를 추가해줍니다.
#include "DHT.h"

#define DHTPIN 4 
#define DHTTYPE DHT11
#define ERORR_VALUE -999
#define MOTOR_PIN 10

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  
  Serial.begin(9600);
  dht.begin();
  pinMode(MOTOR_PIN,OUTPUT);
  
}

void loop() {
  
  delay(2000);
  
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature(); //온도 범위는 0~50℃이며 습도 범위는 20~90$ RH
  
  if (isnan(humidity) || isnan(temperature) ) {
    Serial.println("Failed to read from DHT sensor!");
    humidity = ERORR_VALUE;
    temperature = ERORR_VALUE;
  }else{
    
  }


  Serial.print("조도 : "); // 0~1023
  Serial.println(analogRead(A0));  //조도센서의 감지되는 광량을 출력합니다.
  
  Serial.print("토양 습도 : ");
  Serial.println(analogRead(A1));

  Serial.print("물 수위: ");
  Serial.println(analogRead(A2));

  
  // 온도와 습도값을 시리얼 모니터에 출력해 줍니다.
  Serial.print((int)temperature); 
  Serial.print(" *C, ");
  Serial.print((int)humidity); 
  Serial.println(" %");

  digitalWrite(MOTOR_PIN,HIGH);

}
