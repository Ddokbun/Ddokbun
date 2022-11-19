import { FC, useEffect, useState } from "react";
import { Wrapper } from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { fetchCurrentStatus } from "../../../apis/manage";
import { PlantStatusType } from "../../../pages/manage/myplant/[potseq]";
import { getDateDiff } from "../../../utils/getDateDiff";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faSun,
  faTemperature0,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../common/Modal";
import { useStore } from "react-redux";
import SimilarItem from "../SimilarItem";

interface Props {
  potSerial?: string;
}

const CardItem: FC<Props> = ({ potSerial }) => {
  const router = useRouter();
  const [plantStatus, setPlantStatus] = useState<PlantStatusType>();
  const [waterToBeSupplied, setWaterToBeSupplied] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const openModal = () => {
    setModalOpen(true);
  };
  const store = useStore();
  const onShowDetailHandler = () => {
    router.push({
      pathname: `/manage/myplant/${potSerial}`,
    });
  };

  useEffect(() => {
    if (!potSerial) {
      return;
    }

    const getInitialData = async () => {
      const res = await fetchCurrentStatus(potSerial);
      setPlantStatus(res);
      setWaterToBeSupplied(
        Math.round(res.waterCycle - getDateDiff(res.waterSupply.join("-"))),
      );
    };
    getInitialData();
  }, [potSerial]);

  return (
    <Wrapper>
      {modalOpen && (
        <Modal
          onClose={closeModal}
          title={`${plantStatus?.plantNickname}랑 비슷한 환경에 적합한 식물이예요`}
        >
          <SimilarItem potSerial={potSerial!} />
        </Modal>
      )}
      <Image
        onClick={onShowDetailHandler}
        className="card-image"
        loading="lazy"
        width={"100%"}
        height={"100%"}
        src={`https://ddokbun.com/api/resources/s3?plantSeq=${plantStatus?.plantSeq}`}
        alt="식물이미지"
      />
      <div className="card-text">
        <h2>{plantStatus?.plantNickname}</h2>
        <p>{plantStatus?.plantName}</p>
        <p>{plantStatus?.plantEnName}</p>
        <p className="date">물 주는 날 : {waterToBeSupplied}일 후</p>
        <div className="button-container">
          <button onClick={onShowDetailHandler}>관리하기</button>
          <button onClick={openModal}>화분 기반 식물 추천</button>
        </div>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="value">
            <FontAwesomeIcon icon={faTemperature0} />
            <p>
              {plantStatus?.temperature}
              <sup>o</sup>C
            </p>
          </div>
        </div>
        <div className="stat middle">
          <div className="value">
            <FontAwesomeIcon icon={faDroplet} />
            <p>{plantStatus?.humidity}%</p>
          </div>
        </div>
        <div className="stat">
          <div className="value">
            <FontAwesomeIcon icon={faSun} />
            <p>{plantStatus?.light! >= 4 && "밝아요"}</p>
            <p>{plantStatus?.light! == 3 && "적당해요"}</p>
            <p>{plantStatus?.light! < 3 && "어두워요"}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CardItem;
