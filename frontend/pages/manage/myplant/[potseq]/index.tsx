import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  changeWateringStatus,
  fetchCurrentStatus,
  watering,
} from "../../../../apis/manage";
import SimpleGraph from "../../../../common/Graph/SimpleGraph";
import Modal from "../../../../common/Modal";
import WeekPicker from "../../../../components/manage/add/WeekPicker";
import DigitalTwin from "../../../../components/manage/DigitalTwin";
import PlantStatus from "../../../../components/manage/PlantStatus";
import { Wrapper } from "../../../../styles/manage/[posteq]/styles";

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
}

const PlantCare: NextPage = () => {
  const showDetailHandler = () => {
    return;
  };

  const { potseq } = useRouter().query;
  const [modalOpen, setModalOpen] = useState(false);
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
  });
  const onWateringHandler = async () => {
    const res = await watering(potseq!);

    if (res?.status === 200) {
      alert("물 주기가 완료되었어요");
    }
  };

  const changeWatering = async () => {
    if (typeof potseq === "string") {
      const res = await changeWateringStatus(potseq, plantStatus.waterCycle);
    }
  };

  const changeWaterCycle = event => {
    // setPlantStatus(prev => {
    //   ...prev,
    //   ...prev[event.target]
    // })
  };

  const modalContents = () => {
    return (
      <>
        <input
          type="number"
          value={plantStatus.waterCycle}
          onChange={changeWaterCycle}
        />
      </>
    );
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (!potseq) {
      return;
    }

    const getInitialData = async () => {
      const res = await fetchCurrentStatus(potseq);
      setPlantStatus(res);
    };
    getInitialData();
  }, [potseq]);
  const [showModal, setShowModal] = useState(true);
  return (
    <Wrapper>
      <button onClick={openModal}>Open Modal</button>
      {showModal && (
        <Modal
          onClose={closeModal}
          title="물주기 설정"
          onSubmitHandler={changeWatering}
        >
          {modalContents()}
        </Modal>
      )}
      <section className="left-section">
        <DigitalTwin light={plantStatus.light} />
        <span onClick={onWateringHandler} className="title">
          모든 환경이 최상이예요!
        </span>
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
