// DHT11 센서를 쉽게 제어하기 위한 라이브러리를 추가해줍니다.
#include "DHT.h"

#define DHTPIN 4 
#define DHTTYPE DHT11
#define ERORR_VALUE -999
#define MOTOR_PIN 10

DHT dht(DHTPIN, DHTTYPE);

int motor_state = 0;

unsigned long loopTime = 0;
unsigned long addTime = 0;


void setup() {
  
  Serial.begin(9600);
  dht.begin();
  pinMode(MOTOR_PIN,OUTPUT);
  
}

void loop() {
  
  addTime = millis();

  if (loopTime >= 1000) {
    loopTime = loopTime - 1000;
    float humidity = dht.readHumidity(); //습도를 읽어 온다.   20~70
    float temperature = dht.readTemperature(); //온도 범위는 0~50℃이며 습도 범위는 20~90$ RH
    int light = analogRead(A0); //광량을 읽어온다. 0 ~1023
    int soil_humid = analogRead(A1);//0 ~1023 토양 습도
    int water_level = analogRead(A2);  // 물 수위
  
    if (isnan(humidity) || isnan(temperature) ) {
    // Serial.println("# DHT11 sensor error exists");
      humidity = ERORR_VALUE;
      temperature = ERORR_VALUE;
    }

    serial_print(temperature,humidity,light,soil_humid,water_level,motor_state);//시리얼 통신 출력
  }
  loopTime = loopTime + millis() - addTime;


  
  serial_read();
  
  if(motor_state == 0){
    digitalWrite(MOTOR_PIN,LOW);
  }else if(motor_state ==1){
    digitalWrite(MOTOR_PIN,HIGH);
  }else{
    Serial.println("# motor state is unavailable Motor State : " + motor_state);
  }

}
void serial_read(){
    if (Serial.available() > 0) {
    String msg = Serial.readStringUntil('\n');
    Serial.println("# reciveMessage : " + msg);
    if(msg.charAt(0) == '0'){
      motor_state = 0; 
      Serial.println("# motor off");
    }else if(msg.charAt(0) == '1'){
      motor_state = 1;
      Serial.println("# motor active");
    }
    
    Serial.println("# be changed Motor State : " + motor_state);
  }
}
void serial_print(float temperature,float humidity,int light , int soil_humid,int water_level,int motor_state){

  Serial.println("{\"temperature\":"+String(temperature)+",\"humid\":"+String(humidity)+",\"light\":"+light+",\"soilHumid\":"+soil_humid+",\"waterLevel\":"+water_level+",\"motorState\":"+motor_state+"}");
  
}
