import { FC, useEffect, useState } from "react";
import { Wrapper } from "./styles";
import Temper from "../../../../assets/icon/thermometer.png";
import Water from "../../../../assets/icon/water.png";
import WaterBottle from "../../../../assets/icon/soilhumidity.png";
import Sun from "../../../../assets/icon/sun.png";
import Image, { StaticImageData } from "next/image";
import { PlantDataType } from "../AddForm";

interface Props {
  data: PlantDataType;
}

interface ImageDataType {
  src: StaticImageData;
  alt: string;
  contents: string;
}

const imageDatas: { [key: string]: ImageDataType } = {
  waterCycle: {
    src: WaterBottle,
    alt: "물주기 이미지입니다.",
    contents: "물 주기 : ",
  },
  temperatureRange: {
    src: Temper,
    alt: "온도계 이미지입니다.",
    contents: "생육 온도 : ",
  },
  lightType: {
    src: Sun,
    alt: "태양 이미지입니다.",
    contents: " ",
  },
  growthHumid: {
    src: Water,
    alt: "습도 이미지입니다.",
    contents: "생육습도 : ",
  },
};
export const lightTypes = [null, "음지", "반음지", "반그늘", "반양지", "양지"];

const PlantData: FC<Props> = ({ data }) => {
  const [plantInfos, setPlantInfos] = useState(data);
  const infos = Object.entries(plantInfos).map(entry => {
    return (
      <div key={entry[0]} className="info-container">
        <div className="image-container">
          <Image
            src={imageDatas[entry[0]].src}
            alt={imageDatas[entry[0]].alt}
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="text-info">
          <p>{imageDatas[entry[0]].contents + " "}</p>
          {entry[0] === "lightType" ? (
            <p>{lightTypes[Number(entry[1])]}</p>
          ) : (
            <p>{entry[1]}</p>
          )}
        </div>
      </div>
    );
  });
  useEffect(() => {
    setPlantInfos(data);
  }, [data]);

  return <Wrapper>{infos}</Wrapper>;
};

export default PlantData;
