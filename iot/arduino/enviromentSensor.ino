// DHT11 센서를 쉽게 제어하기 위한 라이브러리를 추가해줍니다.
#include "DHT.h"

#define DHTPIN 4 
#define DHTTYPE DHT11
#define ERORR_VALUE -999
#define MOTOR_PIN 10
#define MOTOR_TIME 1000
#define LOOP_TIME 3000

DHT dht(DHTPIN, DHTTYPE);

int motor_state = 0;
int motor_gauge= 0;
unsigned long loopTime = 0;
unsigned long addTime = 0;
unsigned long afterTime = 0;


unsigned long motorLoopTime = 0;
unsigned long motorAddTime = 0;
unsigned long diffTime = 0;
void setup() {
   
  Serial.begin(9600);
  dht.begin();
  pinMode(MOTOR_PIN,OUTPUT);
  
}

void loop() {
  
  addTime = millis();

  if (loopTime >= LOOP_TIME) {

    
  //Serial.println("# loop " + String(loopTime) + "LOOPTIME : " + String(LOOP_TIME) + "result : " + String(loopTime - LOOP_TIME));
    loopTime = loopTime - LOOP_TIME;
    
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
   
  
  
  serial_read();

  if(motor_state == 0){
    digitalWrite(MOTOR_PIN,LOW);
  }else if(motor_state ==1){
    if(motor_gauge <= 0){
      motor_state = 0;
    }
    digitalWrite(MOTOR_PIN,HIGH);
    
  }else{
    Serial.println("# motor state is unavailable Motor State : " + motor_state);
  }

  decreaseMotorgauge();

  
  delay(500);
  afterTime = millis();
  
  diffTime =afterTime - addTime; 
  //Serial.println("# af : " + String(afterTime) + "addt : " + String(addTime) );
  loopTime = loopTime + diffTime;
  motorLoopTime = motorLoopTime + diffTime; 

  
  
}

void decreaseMotorgauge(){
  if(motor_gauge <= 0){ //혹시 모르니깐
      motor_gauge =0;
  }
  
  if(motor_gauge > 0&& motorLoopTime > MOTOR_TIME){
    motorLoopTime =motorLoopTime- MOTOR_TIME;
    motor_gauge--;
  }
}

void serial_read(){
    if (Serial.available() > 0) {
    String msg = Serial.readStringUntil('\n');
    
    int spliterIndex = msg.indexOf(' ');
    
    String action = msg.substring(0,spliterIndex); 
    String gauge = msg.substring(spliterIndex+1);
    
    Serial.println("# reciveMessage : " + msg + ",action : " +action+ ",gauge : " + gauge);
    if(action.charAt(0) == '0'){
      motor_state = 0; 
      motor_gauge = 0;
      Serial.println("# motor off");
    }else if(action.charAt(0) == '1'){
      motor_state = 1;
      motor_gauge += gauge.toInt();
      Serial.println("# motor active");
    }
    
    Serial.println("# be changed Motor State : " + motor_state);
  }
}
void serial_print(float temperature,float humidity,int light , int soil_humid,int water_level,int motor_state){

  light = nomal_light(light);
  soil_humid = nomal_soild_humid(soil_humid);
  water_level = nomal_water_level(water_level);


  Serial.println("{\"temperature\":"+String(temperature)+",\"humid\":"+String(humidity)+",\"light\":"+light+",\"soilHumid\":"+soil_humid+",\"waterLevel\":"+water_level+",\"motorState\":"+motor_state+"}");
  
}

int nomal_light (int light){
  if(light <= 50){
    return 1;
  }else if(light <= 150){
    return 2;
  }else if(light <= 400){
    return 3;
  }else if(light <= 500){
    return 4;
  }else if(light <= 800){
    return 5;
  }else{
    return 5;
  }
}

int nomal_soild_humid(int humid){

   if(humid <= 350){
    //매우 축축
    return 1;
  }else if(humid <= 500){
    //축축
    return 2;
  }else if(humid <= 600){
    //촉촉
    return 3;
  }else if(humid <= 800){
    //건조
    return 4;
  }
  else{
    //매우 건조
    return 5;
  }
}


int nomal_water_level(int water_level){

//물 없음
  if(water_level < 100){
    return 1;
  }else if(water_level < 200){
    //물 없고, 습기만 남음
    return 2;
  }else{
    //물 차있음
    return 3;
  }

}
