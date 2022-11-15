import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import water from "../../../assets/icon/water.png";
import sun from "../../../assets/icon/sun.png";
import thermometer from "../../../assets/icon/thermometer.png";
import soilhumidity from "../../../assets/icon/soilhumidity.png";
import { currentStatus } from "../../../pages/manage/myplant/[potseq]";
import { lightTypes } from "../add/PlantData";
import { getDateDiff } from "../../../utils/getDateDiff";

interface Props {
  plantStatus: currentStatus;
}

const PlantInfo: FC<Props> = ({ plantStatus }) => {
  const [currentStatus, setCurrentStatus] = useState({
    temp: "",
    humid: "",
    soilhumid: "",
    light: "",
  });

  const plantInfos = [
    {
      src: sun,
      grow: `${lightTypes[plantStatus.lightType]}를 좋아해요`,
      current: `현재 빛 세기는 ${currentStatus.light}`,
    },
    {
      src: thermometer,
      grow: `적정 온도는 ${plantStatus.minTemperature} ~ ${plantStatus.maxTemperature}도 예요.`,
      current: `현재온도는 ${plantStatus.temperature}로 ${currentStatus.temp}`,
    },
    {
      src: water,
      grow: `적정 습도는 ${plantStatus.growHumid}예요.`,
      current: `현재 습도는 ${plantStatus.humidity}%로 ${currentStatus.humid}`,
    },
    {
      src: soilhumidity,
      grow: `적정 물주기는 ${plantStatus.waterCycle}일`,
      current: `${currentStatus.soilhumid}`,
    },
  ];

  useEffect(() => {
    let temp;
    let humid;
    let soilhumid;
    const light =
      plantStatus.lightType - plantStatus.light >= 0
        ? "좋아요.😊"
        : "약해요.😥 위치 조정이 필요해요.";
    if (plantStatus.temperature > plantStatus.maxTemperature) {
      temp = "높아요 😥";
    } else if (plantStatus.temperature < plantStatus.minTemperature) {
      temp = "추워요 😥";
    } else {
      temp = "좋아요😊";
    }

    if (plantStatus.humidity > Number(plantStatus.growHumid.slice(5, 7))) {
      humid = "습해요 😥";
    } else if (
      plantStatus.humidity < Number(plantStatus.growHumid.slice(0, 2))
    ) {
      humid = "건조해요 😥";
    } else {
      humid = "좋아요😊";
    }

    const waterSupply = plantStatus.waterSupply.join("-");
    const wateringDateDiff = getDateDiff(waterSupply) - plantStatus.waterCycle;

    if (wateringDateDiff > 0) {
      soilhumid = `물을 줄 시간이 ${wateringDateDiff}일 지났어요.  물을 줘야 할 것 같아요 😥`;
    } else {
      soilhumid = `${waterSupply}일에 물을 줬으니, ${
        Math.round(wateringDateDiff) * -1
      }일 후에 물을 주면 되요. 😊`;
    }

    setCurrentStatus({ light, humid, temp, soilhumid });
  }, [plantStatus]);

  const plantInfo = plantInfos.map(item => {
    return (
      <div className="line">
        <div className="status-image-container">
          <Image
            className="status-image"
            src={item.src}
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="info">
          <p>{item.grow}</p>
          <p>{item.current}</p>
        </div>
      </div>
    );
  });

  return <>{plantInfo}</>;
};

export default PlantInfo;
