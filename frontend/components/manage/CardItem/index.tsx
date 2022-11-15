import { FC, useEffect, useState } from "react";
import { Wrapper } from "./styles";
import Image from "next/image";
import { TextBtn } from "../../../common/Button";
import { PlantListType } from "../../../pages/manage/[userseq]";
import { useRouter } from "next/router";
import { CardHover } from "../../../styles/animations/animation";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { manageActions } from "../../../store/manage";
import { fetchCurrentStatus } from "../../../apis/manage";
import Link from "next/link";

const CardItem: FC<PlantListType> = plant => {
  //   식물이름, 식물 pk, 식물 이미지
  const router = useRouter();
  const dispatch = useDispatch();
  const onShowDetailHandler = () => {
    dispatch(
      manageActions.setPlantInfo({ plantNickname: plant.plantNickname }),
    );
    router.push(`/manage/myplant/${plant.potSerial}`);
  };
  const [waterSupplied, setWaterSupplied] = useState("");

  console.log(waterSupplied);

  useEffect(() => {
    if (!plant.potSerial) {
      return;
    }

    const getInitialData = async () => {
      const res = await fetchCurrentStatus(plant.potSerial);
      setWaterSupplied(res.waterSupply.join("-"));
    };
    getInitialData();
  }, [plant.potSerial]);

  return (
    <Wrapper>
      <Image
        onClick={onShowDetailHandler}
        className="image"
        // layout="fill"
        width={450}
        height={400}
        src={`https://ddokbun.com/api/resources/s3?plantSeq=${plant.plantSeq}`}
        alt="식물이미지"
      />
      <div className="info" style={{ background: "#FFFAFA" }}>
        <h2>{plant.plantNickname}</h2>
        <h3>마지막 물 준날</h3>
        <p>{waterSupplied}</p>
        <button onClick={onShowDetailHandler}>관리하기</button>
      </div>
    </Wrapper>
  );
};

export default CardItem;
