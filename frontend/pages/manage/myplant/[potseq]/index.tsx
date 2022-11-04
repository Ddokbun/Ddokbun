import { getCookie } from "cookies-next";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { fetchCurrentStatus, fetchLogs } from "../../../../apis/manage";
import SimpleGraph from "../../../../common/Graph/SimpleGraph";
import WeekPicker from "../../../../components/manage/add/WeekPicker";
import DigitalTwin from "../../../../components/manage/DigitalTwin";
import LineGraph from "../../../../components/manage/LineGraph";
import PlantStatus from "../../../../components/manage/PlantStatus";

import { Wrapper } from "../../../../styles/manage/[posteq]/styles";
export interface LogsType {
  [name: string]: number | string;
}

export interface currentStatus {
  maxTemperature: number;
  minTemperature: number;
  growHumid: string;
  lightType: number;
  waterCycle: number;
  temperature: null;
  humidity: null;
  soilHumidity: null;
  light: null;
  waterHeight: null;
  isAuto: string;
  waterSupply: number[];
}
const tempToken =
  "eyJyZWdEYXRlIjoxNjY3MTkyODg3NTgwLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwidXNlck5pY2tuYW1lIjoi7J207JuD7KeRIOybkOyIreydtCIsInVzZXJFbWFpbCI6Imtjcjc4MTJAbmF2ZXIuY29tIiwiZXhwIjoxNjY3NTUyODg3LCJ1c2VyU2VxIjozMX0.JmxN7lp62Gysizq-5O_witMqSGrD6j17iG4y7LwC2Rc";
const PlantCare: NextPage<{
  initialLogs: LogsType[];
  currentStatus: currentStatus;
  label: string;
}> = ({ initialLogs, currentStatus, label }) => {
  console.log(initialLogs, currentStatus, "여기요");

  const showDetailHandler = () => {
    return;
  };

  return (
    <Wrapper>
      <section className="left-section">
        <DigitalTwin />
        <span className="title">모든 환경이 최상이예요!</span>
        <div className="simpleGraph-container">
          <SimpleGraph
            pages="manage"
            temper={"51%"}
            water={"50%"}
            humid={"50%"}
            waterBottle={"20%"}
          />
        </div>
      </section>
      <section>
        <WeekPicker showDetailHandler={showDetailHandler} />
        <PlantStatus />
        <LineGraph log={initialLogs} />
      </section>
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  res,
  req,
  query,
}) => {
  const token = getCookie("token", { res, req }) as string;
  const { potseq } = query;

  const [initialLogs, currentStatus]: [LogsType[], currentStatus] =
    await Promise.all([
      fetchLogs("temperature", "string11", tempToken),
      fetchCurrentStatus(potseq, token),
    ]);

  const tempLogs = initialLogs.map(log => {
    return log.temperature;
  });

  return {
    props: {
      initialLogs: tempLogs,
      currentStatus,
      logLabel: "temperature",
    },
  };
};

export default PlantCare;
