#!/usr/bin/python3

import serial




def serial_process(ser):
    while True:
        # 들어온 메세지가 있다면
        if ser.readable():
            line = ser.readline().decode()
            print(line)










if __name__=='__main__':

    ser = None
    try:
        ser = serial.Serial('/dev/ttyACM0',9600)
    except serial.SerialException:
        print("Arduino Connection Fail")
        print("System Closed")
        exit()
    #아두이노 시리얼 통신 객체를 들고 온다.
    print("start Serial Process");
    serial_process(ser);
    #시리얼 통신 프로세스를 시작한다.
