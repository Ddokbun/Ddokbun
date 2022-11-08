FROM azul/zulu-openjdk:11
WORKDIR /app
ARG JAR_FILE=build/libs/*
COPY ${JAR_FILE} ./app.jar
ENTRYPOINT ["java","-jar","-Dspring.profiles.active=local","./app.jar"]