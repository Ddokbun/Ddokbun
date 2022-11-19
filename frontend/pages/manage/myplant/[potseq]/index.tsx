import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { watering } from "../../../../apis/manage";
import DigitalTwin from "../../../../components/manage/DigitalTwin";
import {
  LeftSection,
  RightSection,
  Wrapper,
} from "../../../../styles/manage/[posteq]/styles";
import Image from "next/image";
import { checkMyPot } from "../../../../utils/protectedRouter";
import TabContents from "../../../../components/manage/TabContents";
import TabHeader from "../../../../components/manage/TabHeader";

export interface LogsType {
  [name: string]: string;
}

export interface PlantStatusType {
  plantNickname: string;
  plantEnName: string;
  plantName: string;
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
  plantSeq: number;
}

interface Props {
  data: PlantStatusType;
}

const PlantCare: NextPage<Props> = ({ data }) => {
  const { potseq } = useRouter().query;

  const [plantStatus, setPlantStatus] = useState(data);
  const onWateringHandler = async () => {
    const res = await watering(potseq!);

    if (res?.status === 200) {
      setTimeout(() => {
        alert("물 주기가 완료되었어요");
      }, 7000);
    }
  };


  useEffect(() => {
    const getInitialData = async () => {
      const request = await Notification.requestPermission();
      if (!request) {
        alert("물 주기 알림을 받으시려면 알림 설정을 허용해주세요");
      }
    };
    getInitialData();
  }, [potseq]);

  return (
    <Wrapper>
      <LeftSection>
        <h2>{plantStatus.plantNickname}</h2>
        <DigitalTwin
          light={plantStatus?.light}
          onWateringHandler={onWateringHandler}
        />
      </LeftSection>
      <RightSection>
        <TabHeader plantStatus={plantStatus} />
      </RightSection>
    </Wrapper>
  );
};

export default PlantCare;

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  const plantStatusOrNotMyPot = await checkMyPot(query, req, res);

  if (plantStatusOrNotMyPot) {
    return {
      props: { data: plantStatusOrNotMyPot },
    };
  } else {
    return {
      redirect: "/commerce",
      props: {},
    };
  }
};
