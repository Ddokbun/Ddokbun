#!/usr/bin/python3

import serial # communication with arduino
import json # validate, data transport arduino, process
from threading import Thread

from ConsumerMotorAction import * # consumer kafka
from ProducerData import sendData 
lever = 0;
ser= None
keyString = None

state_motor_state = None;

def validatearuinodata(data):
    global state_motor_state
    json_object = json.loads(data)
    temperature = json_object["temperature"]
    humid=json_object["humid"]
    light=json_object["light"]
    soilHumid=json_object["soilHumid"]
    waterLevel=json_object["waterLevel"]
    motorState=json_object["motorState"]
    json_object["potSid"] = keyString
    json_object["simple"] = 1;
    

    state_motor_state = motorState
    if temperature <= -274:
        return None

    stringJson = json.dumps(json_object)
    #if(state_motor_state == 1):
    sendData(stringJson)
    return stringJson

def serial_process(ser):
    while True:
        try:
            # 들어온 메세지가 있다면
            if ser.readable():
                lever = 1
                line = ser.readline().decode()
                print(line)
                if(line[0]=='#'):
                #단순 메세지라
                    print(line)
                else:
                    data = validatearuinodata(line)
                    if data is None:
                        continue
                    f = open('/home/ddokbun/iot/envDataShare.txt','w+')
                    f.write(data+"\n")
                    f.close()
        except KeyboardInterrupt:
            print("ctrl + c process exit")
            exit()
        except Exception as e:
            print("data process error occured, this sequence reject: \n",e)
                
def motorValueReciver(message):
    print("main proccess recive command value from consumer, value : ",message)

    global state_motor_state
    potSerial=message['potSerial']
    action=message['action']
    gauge=message['gauge'] 
   
    if ser is None:
        print("Serial Communication not ready ")
    elif(action == 1):
        if state_motor_state == 1:
            print("can't motor active command ,while motor active state")
            return
        state_motor_state = 1
        ser.write('{action} {gauge}\n'.format(action=action,gauge=gauge).encode())
        print("send to ardunino motor [active]")
    elif command == 0:
        ser.write('0\n'.encode())
        print("send to arduino motor [off]")
    else:
        print("consumer command error command : ",command)


if __name__=='__main__':

    state_motor_state = 0
    keyFile = open("/home/ddokbun/iot/pot_sid_file.txt")
    keyString = keyFile.readline().strip()

    if keyString is None:
        print("please set key in pot_sid_file")
        exit()
    if len(keyString) > 10:
        print("key have to less than or equal 10,",len(keyString))
        exit()
    try:
    #아두이노 시리얼 통신 객체를 들고 온다.
        ser = serial.Serial('/dev/ttyACM0',9600)
    except serial.SerialException as e:
        print("Arduino Connection Fail")
        print("System Closed",e)
        exit()

    th1 = Thread(target=consumeMotorAction,args=(keyString,motorValueReciver))    
    th1.start()
    # 첫번째 매개변수에 대한 토픽에 대해 구독한다.
    print("start Serial Process");
    serial_process(ser);

    th1.join()
    #시리얼 통신 프로세스를 시작한다.
