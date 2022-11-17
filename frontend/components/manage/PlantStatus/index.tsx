import React, { Suspense, useEffect, useState } from "react";
import { StatusButton } from "../../../common/Button";
import { Wrapper } from "./styles";
import temperature from "../../../assets/icon/thermometer.png";
import illuminance from "../../../assets/icon/sun.png";
import humidity from "../../../assets/icon/water.png";
import soil from "../../../assets/icon/soilhumidity.png";
import { Theme } from "../../../styles/theme";
import LineGraph from "../LineGraph";
import { fetchLogs } from "../../../apis/manage";
import { useRouter } from "next/router";

export interface LogsType {
  [name: string]: string;
}
const plantStatus = [
  {
    statusCode: 0,
    src: temperature.src,
    title: "온도",
    logTitle: "temperature",
    params: "temperature",
  },
  {
    statusCode: 1,
    src: illuminance.src,
    title: "조도",
    logTitle: "light",
    params: "light",
  },
  {
    statusCode: 2,
    src: humidity.src,
    title: "습도",
    logTitle: "humid",
    params: "humidity",
  },
  {
    statusCode: 3,
    src: soil.src,
    title: "토양습도",
    logTitle: "soil-humid",
    params: "soilHumidity",
  },
];

const PlantStatus = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [logTitle, setLogTitle] = useState(plantStatus[activeIndex].logTitle);
  const [logs, setLogs] = useState<string[]>();
  const [createdTime, setCreatedTime] = useState<Date[]>();
  const router = useRouter();
  const { potseq } = router.query;

  const onClickHandler = (code: number) => {
    setActiveIndex(code);
    setLogTitle(plantStatus[code].logTitle);
  };
  useEffect(() => {
    if (!potseq) {
      return;
    }
    const getInitialData = async () => {
      const logDatas: LogsType[] = await fetchLogs(logTitle, potseq);

      const getLogDatas: string[] = logDatas?.map(logData => {
        return logData[plantStatus[activeIndex].params];
      });
      const getCreatedTime = logDatas?.map(logData => {
        return new Date(logData.createdTime);
      });
      setLogs(getLogDatas);
      setCreatedTime(getCreatedTime);
    };
    getInitialData();
  }, [potseq, activeIndex, logTitle]);

  const statusButtons = plantStatus.map(plant => {
    return (
      <StatusButton
        status={plant}
        activeIndex={activeIndex}
        key={plant.statusCode}
        onClick={onClickHandler}
        backgroundColor={Theme.color.ivory}
        backgroundHover={Theme.color.ivoryHover}
        textColor={"black"}
      />
    );
  });
  return (
    <Wrapper>
      <ul>{statusButtons}</ul>
      <Suspense>
        {createdTime && logs && (
          <LineGraph
            labels={createdTime}
            data={logs}
            label={plantStatus[activeIndex].title}
          />
        )}
      </Suspense>
    </Wrapper>
  );
};

export default PlantStatus;
