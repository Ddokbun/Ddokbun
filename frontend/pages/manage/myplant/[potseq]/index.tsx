import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchCurrentStatus, watering } from "../../../../apis/manage";
import SimpleGraph from "../../../../common/Graph/SimpleGraph";
import WeekPicker from "../../../../components/manage/add/WeekPicker";
import DigitalTwin from "../../../../components/manage/DigitalTwin";
import PlantStatus from "../../../../components/manage/PlantStatus";
import { Wrapper } from "../../../../styles/manage/[posteq]/styles";
import { useDispatch } from "react-redux";
import { manageActions } from "../../../../store/manage";

export interface LogsType {
  [name: string]: string;
}

export interface currentStatus {
  growHumid: string;
  humidity: number;
  isAuto: string;
  light: number;
  lightType: number;
  maxTemperature: number;
  minTemperature: number;
  soilHumidity: number;
  temperature: number;
  waterCycle: number;
  waterHeight: number;
  waterSupply: number[];
}

const PlantCare: NextPage = () => {
  const [statusContents, setStatusContents] = useState("");
  const showDetailHandler = () => {
    return;
  };

  const [graphStatus, setGraphStatus] = useState({
    temp: "",
    humid: "",
    soil: "",
  });

  const { potseq } = useRouter().query;
  const [wateringLogs, setWateringLogs] = useState("");

  const [plantStatus, setPlantStatus] = useState({
    growHumid: "",
    humidity: 0,
    isAuto: "",
    light: 0,
    lightType: 0,
    maxTemperature: 0,
    minTemperature: 0,
    soilHumidity: 0,
    temperature: 0,
    waterCycle: 0,
    waterHeight: 0,
    waterSupply: [],
  });
  const onWateringHandler = async () => {
    const res = await watering(potseq!);

    if (res?.status === 200) {
      alert("물 주기가 완료되었어요");
    }
  };

  const getDateDiff = (d1: string) => {
    const date1 = new Date(d1);
    const date2 = new Date();
    console.log(date2);

    const diffDate = date1.getTime() - date2.getTime();

    return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (!potseq) {
      return;
    }

    const getInitialData = async () => {
      const request = await Notification.requestPermission();
      if (!request) {
        alert("물 주기 알림을 받으시려면 알림 설정을 허용해주세요");
      }
      const res = await fetchCurrentStatus(potseq);
      console.log(res, "현재상태");
      setPlantStatus(res);
      dispatch(manageActions.setPlantInfo(res));
      console.log(getDateDiff(res.waterSupply.join("-")));

      const contents =
        getDateDiff(res.waterSupply.join("-")) > 1
          ? "물을 주셔야 할 것 같아요!"
          : "모든 환경이 최상이예요:)";
      setStatusContents(contents);

      // 온도
      let temp;
      let humid;
      let soil;
      if (res.temperature >= res.maxTemperature) {
        temp = String(100 - res.temperature - res.maxTemperature) + "%";
      } else if (res.temperature <= res.minTemperature) {
        temp = String(100 - res.minTemperature - res.temperature);
      } else {
        temp = "99%";
      }

      // humidity
      if (res.humidity < Number(res.growHumid?.slice(0, 2))) {
        humid = String(100 - Number(res.growHumid?.slice(0, 2))) + "%";
      } else if (res.humidity > Number(res.growHumid?.slice(5, 7))) {
        humid = String(100 - Number(res.growHumid?.slice(5, 7))) + "%";
      } else {
        humid = "99%";
      }

      // soil
      soil = String(100 - getDateDiff(res.waterSupply.join("-")) * 25) + "%";
      setGraphStatus({ temp, humid, soil });
    };
    getInitialData();
  }, [potseq, statusContents]);

  console.log(graphStatus);

  return (
    <Wrapper>
      <section className="left-section">
        <DigitalTwin
          light={plantStatus.light}
          onWateringHandler={onWateringHandler}
        />
        <span onClick={onWateringHandler} className="title">
          {statusContents}
        </span>
        <div className="simpleGraph-container">
          <SimpleGraph
            pages="manage"
            temper={graphStatus.temp}
            water={graphStatus.humid}
            humid={graphStatus.soil}
            waterBottle={`${120 - plantStatus.waterHeight * 20 - 1}%`}
          />
        </div>
      </section>
      <section>
        <WeekPicker
          showDetailHandler={showDetailHandler}
          setWateringLogs={setWateringLogs}
        />
        {wateringLogs !== "" && wateringLogs}
        <PlantStatus />
      </section>
    </Wrapper>
  );
};

export default PlantCare;
