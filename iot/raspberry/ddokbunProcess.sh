pwd
whoami
sleep 5
VAR1=1
VAR2=1
while true
do
	echo "system start : $VAR1 count"
	python3 /home/ddokbun/iot/SerialToArduino.py
	VAR1=$(($VAR1 + $VAR2))
done
