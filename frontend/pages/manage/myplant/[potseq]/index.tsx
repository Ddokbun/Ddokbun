import { NextPage } from "next";
import SimpleGraph from "../../../../common/Graph/SimpleGraph";
import WeekPicker from "../../../../components/manage/add/WeekPicker";
import DigitalTwin from "../../../../components/manage/DigitalTwin";
import PlantStatus from "../../../../components/manage/PlantStatus";
import { Wrapper } from "../../../../styles/manage/[posteq]/styles";

export interface LogsType {
  [name: string]: string;
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

const PlantCare: NextPage = () => {
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
      </section>
    </Wrapper>
  );
};

export default PlantCare;

export const temp = [
  { temperature: 36.2, createdTime: "2022-11-01 01:44:27" },
  { temperature: 36.2, createdTime: "2022-11-01 01:44:28" },
  { temperature: 36.2, createdTime: "2022-11-01 01:44:29" },
  { temperature: 36.2, createdTime: "2022-11-02 01:44:30" },
  { temperature: 36.2, createdTime: "2022-11-02 01:44:31" },
  { temperature: 36.2, createdTime: "2022-11-02 01:44:32" },
  { temperature: 36.2, createdTime: "2022-11-03 01:44:33" },
  { temperature: 36.2, createdTime: "2022-11-03 01:44:34" },
  { temperature: 36.2, createdTime: "2022-11-03 01:44:35" },
  { temperature: 36.2, createdTime: "2022-11-04 01:44:36" },
  { temperature: 36.2, createdTime: "2022-11-04 01:44:37" },
  { temperature: 36.2, createdTime: "2022-11-04 01:44:38" },
];
// //   { temperature: 35.1, createdTime: "2022-11-02 01:44:39" },
// //   { temperature: 35.2, createdTime: "2022-11-02 01:44:40" },
// //   { temperature: 35.3, createdTime: "2022-11-02 01:44:41" },
// //   { temperature: 35.4, createdTime: "2022-11-02 01:44:42" },
// //   { temperature: 35.5, createdTime: "2022-11-02 01:44:43" },
// //   { temperature: 35.0, createdTime: "2022-11-02 01:44:44" },
// //   { temperature: 34.6, createdTime: "2022-11-02 01:44:37" },
// //   { temperature: 36.0, createdTime: "2022-11-02 01:44:38" },
// //   { temperature: 35.1, createdTime: "2022-11-02 01:44:39" },
// //   { temperature: 35.2, createdTime: "2022-11-02 01:44:40" },
// //   { temperature: 35.3, createdTime: "2022-11-03 01:44:41" },
// //   { temperature: 35.4, createdTime: "2022-11-03 01:44:42" },
// //   { temperature: 35.5, createdTime: "2022-11-03 01:44:43" },
// //   { temperature: 35.0, createdTime: "2022-11-03 01:44:44" },
// //   { temperature: 34.6, createdTime: "2022-11-03 01:44:37" },
// //   { temperature: 36.0, createdTime: "2022-11-03 01:44:38" },
// //   { temperature: 35.1, createdTime: "2022-11-03 01:44:39" },
// //   { temperature: 35.2, createdTime: "2022-11-03 01:44:40" },
// //   { temperature: 35.3, createdTime: "2022-11-03 01:44:41" },
// //   { temperature: 35.4, createdTime: "2022-11-03 01:44:42" },
// //   { temperature: 35.5, createdTime: "2022-11-03 01:44:43" },
// //   { temperature: 35.0, createdTime: "2022-11-04 01:44:44" },
// //   { temperature: 34.6, createdTime: "2022-11-04 01:44:37" },
// //   { temperature: 36.0, createdTime: "2022-11-04 01:44:38" },
// //   { temperature: 35.1, createdTime: "2022-11-04 01:44:39" },
// //   { temperature: 35.2, createdTime: "2022-11-04 01:44:40" },
// //   { temperature: 35.3, createdTime: "2022-11-04 01:44:41" },
// //   { temperature: 35.4, createdTime: "2022-11-05 01:44:42" },
// //   { temperature: 35.5, createdTime: "2022-11-05 01:44:43" },
// //   { temperature: 35.0, createdTime: "2022-11-05 01:44:44" },
// //   { temperature: 34.6, createdTime: "2022-11-05 01:44:37" },
// //   { temperature: 36.0, createdTime: "2022-11-05 01:44:38" },
// //   { temperature: 35.1, createdTime: "2022-11-05 01:44:39" },
// //   { temperature: 35.2, createdTime: "2022-11-05 01:44:40" },
// //   { temperature: 35.3, createdTime: "2022-11-05 01:44:41" },
// //   { temperature: 35.4, createdTime: "2022-11-05 01:44:42" },
// //   { temperature: 35.5, createdTime: "2022-11-05 01:44:43" },
// //   { temperature: 35.0, createdTime: "2022-11-05 01:44:44" },
// //   { temperature: 34.6, createdTime: "2022-11-05 01:44:37" },
// //   { temperature: 36.0, createdTime: "2022-11-05 01:44:38" },
// //   { temperature: 35.1, createdTime: "2022-11-05 01:44:39" },
// //   { temperature: 35.2, createdTime: "2022-11-05 01:44:40" },
// //   { temperature: 35.3, createdTime: "2022-11-05 01:44:41" },
// //   { temperature: 35.4, createdTime: "2022-11-05 01:44:42" },
// //   { temperature: 35.5, createdTime: "2022-11-05 01:44:43" },
// //   { temperature: 35.0, createdTime: "2022-11-05 01:44:44" },
// //   { temperature: 34.6, createdTime: "2022-11-06 01:44:37" },
// //   { temperature: 36.0, createdTime: "2022-11-06 01:44:38" },
// //   { temperature: 35.1, createdTime: "2022-11-06 01:44:39" },
// //   { temperature: 35.2, createdTime: "2022-11-06 01:44:40" },
// //   { temperature: 35.3, createdTime: "2022-11-06 01:44:41" },
// //   { temperature: 35.4, createdTime: "2022-11-06 01:44:42" },
// //   { temperature: 35.5, createdTime: "2022-11-06 01:44:43" },
// //   { temperature: 35.0, createdTime: "2022-11-06 01:44:44" },
// //   { temperature: 34.6, createdTime: "2022-11-06 01:44:37" },
// //   { temperature: 36.0, createdTime: "2022-11-06 01:44:38" },
// //   { temperature: 35.1, createdTime: "2022-11-06 01:44:39" },
// //   { temperature: 35.2, createdTime: "2022-11-06 06:44:40" },
// //   { temperature: 35.3, createdTime: "2022-11-07 07:44:41" },
// //   { temperature: 35.4, createdTime: "2022-11-07 07:44:42" },
// //   { temperature: 35.5, createdTime: "2022-11-07 07:44:43" },
// //   { temperature: 35.0, createdTime: "2022-11-07 07:44:44" },
// //   { temperature: 34.6, createdTime: "2022-11-07 07:44:37" },
// //   { temperature: 36.0, createdTime: "2022-11-07 07:44:38" },
// //   { temperature: 35.1, createdTime: "2022-11-07 07:44:39" },
// //   { temperature: 35.2, createdTime: "2022-11-07 07:44:40" },
// //   { temperature: 35.3, createdTime: "2022-11-07 07:44:41" },
// //   { temperature: 35.4, createdTime: "2022-11-07 07:44:42" },
// //   { temperature: 35.5, createdTime: "2022-11-07 07:44:43" },
// //   { temperature: 35.0, createdTime: "2022-11-07 07:44:44" },
// // ];

export const tempLogs = temp.map(log => {
  return log.temperature;
});

export const tempLables = temp.map(log => {
  return new Date(log.createdTime);
});
