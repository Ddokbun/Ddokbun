import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchCurrentStatus, watering } from "../../../../apis/manage";
import SimpleGraph from "../../../../common/Graph/SimpleGraph";
import WeekPicker from "../../../../components/manage/add/WeekPicker";
import DigitalTwin from "../../../../components/manage/DigitalTwin";
import PlantStatus from "../../../../components/manage/PlantStatus";
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
import PlantInfo from "../../../../components/manage/PlantInfo";
import { getDateDiff } from "../../../../utils/getDateDiff";
import Image from "next/image";

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
  const showDetailHandler = () => {
    return;
  };

  const { potseq } = useRouter().query;
  const [wateringLogs, setWateringLogs] = useState("");

  const plantNickname = useSelector(
    (state: RootState) => state.manage.plantNickname,
  );

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
      setTimeout(() => {
        Swal.fire("물 주기가 완료되었어요");
      }, 7000);
    }
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
    };
    getInitialData();
  }, [potseq]);

  return (
    <Wrapper>
      <LeftSection>
        <DigitalTwin
          light={plantStatus.light}
          onWateringHandler={onWateringHandler}
        />
        <PlantStatus />
      </LeftSection>
      <RightSection>
        <div className="image-container">
          <Image
            src={`https://ddokbun.com/api/resources/s3?plantSeq=${1}`}
            alt="식물 이미지"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <h2>{plantNickname}</h2>
        <h3>스투키 - Sansevieria cylindrica</h3>
        <PlantInfo plantStatus={plantStatus} />
        <WeekPicker
          showDetailHandler={showDetailHandler}
          setWateringLogs={setWateringLogs}
        />
        <p className="logs">{wateringLogs !== "" && wateringLogs}</p>
      </RightSection>
    </Wrapper>
  );
};

export default PlantCare;
