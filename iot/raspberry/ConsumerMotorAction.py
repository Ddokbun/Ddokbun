from kafka import KafkaConsumer
import time

bootStrapServers = ["k7d208.p.ssafy.io:8992","k7d208.p.ssafy.io:8993","k7d208.p.ssafy.io:8994"]


def consumeMotorAction(topic,action):
    print("consume recieve : ",topic,action)
    print(type(action))
   # while(True):
   #     action(1)
   #     time.sleep(10)
   #     action(0)
   #     time.sleep(10)
    consumer = KafkaConsumer(
        topic,
        bootstrap_servers=bootStrapServers,
        enable_auto_commit=True,   # 데이터읽으면 자동으로 오프셋 커밋
        auto_offset_reset='latest' # 다시 데이터 읽으면 가장 마지막 오프셋
        )
    for message in consumer:
        print("Topic: {}, Partition: {}, Offset: {}, Key: {}, Value: {}".format( message.topic, message.partition, message.offset, message.key, message.value.decode('utf-8')))
