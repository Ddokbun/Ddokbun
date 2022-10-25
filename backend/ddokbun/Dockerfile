FROM azul/zulu-openjdk:11

WORKDIR /app

ARG JAR_FILE=build/libs/ddokbun-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} ./app.jar
ENV profile local
ENTRYPOINT ["java","-jar","-Dspring.profiles.active=$local","/app.jar"]