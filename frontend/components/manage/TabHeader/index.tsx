import Image from "next/image";
import { FC, useState } from "react";
import { PlantStatusType } from "../../../pages/manage/myplant/[potseq]";
import TabContents from "../TabContents";

interface Props {
  plantStatus: PlantStatusType;
}

const TabHeader: FC<Props> = ({ plantStatus }) => {
  const onChangeTabHandler = (index: number) => {
    setTab(index);
  };
  const [tab, setTab] = useState<number>();

  return (
    <>
      <div className="image-container">
        <Image
          src={`https://ddokbun.com/api/resources/s3?plantSeq=${plantStatus.plantSeq}`}
          alt="식물 이미지"
          width={"100%"}
          height={"100%"}
        />
        <div className="text-container">
          <h3>{plantStatus.plantName}</h3>
          <p>{plantStatus.plantEnName}</p>
        </div>
        <div className="pointer-container">
          <p
            className={!tab ? "selected" : ""}
            onClick={() => onChangeTabHandler(0)}
          >
            정보 보기
          </p>
          <p
            className={tab ? "selected" : ""}
            onClick={() => onChangeTabHandler(1)}
          >
            기록 보기
          </p>
        </div>
      </div>
      <TabContents tab={tab!} plantStatus={plantStatus} />
    </>
  );
};

export default TabHeader;
