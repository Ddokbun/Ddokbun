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
import { useDispatch } from "react-redux";
import { manageActions } from "../../../../store/manage";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import Image from "next/image";
import { checkMyPot } from "../../../../utils/protectedRouter";
import TabContents from "../../../../components/manage/TabContents";

export interface LogsType {
  [name: string]: string;
}

export interface currentStatus {
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
}

interface Props {
  data: currentStatus;
}

const PlantCare: NextPage<Props> = ({ data }) => {
  const { potseq } = useRouter().query;
  const [tab, setTab] = useState(0);

  const plantNickname = useSelector(
    (state: RootState) => state.manage.plantNickname,
  );
  const dispatch = useDispatch();
  const [plantStatus, setPlantStatus] = useState(data);
  const onWateringHandler = async () => {
    const res = await watering(potseq!);

    if (res?.status === 200) {
      setTimeout(() => {
        Swal.fire("물 주기가 완료되었어요");
      }, 7000);
    }
  };

  const onChangeTabHandler = (index: number) => {
    setTab(index);
  };

  useEffect(() => {
    const getInitialData = async () => {
      const request = await Notification.requestPermission();
      if (!request) {
        alert("물 주기 알림을 받으시려면 알림 설정을 허용해주세요");
      }
      dispatch(manageActions.setPlantInfo(data));
    };
    getInitialData();
  }, [potseq]);

  return (
    <Wrapper>
      <LeftSection>
        <h2>{plantNickname}</h2>
        <DigitalTwin
          light={plantStatus?.light}
          onWateringHandler={onWateringHandler}
        />
      </LeftSection>
      <RightSection>
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
        <TabContents tab={tab} plantStatus={plantStatus} />
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
