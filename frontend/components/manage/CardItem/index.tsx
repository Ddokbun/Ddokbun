import { FC } from "react";
import { Wrapper } from "./styles";
import Image from "next/image";
import { TextBtn } from "../../../common/Button";
import { PlantListType } from "../../../pages/manage/[userseq]";
import { useRouter } from "next/router";
import { CardHover } from "../../../styles/animations/animation";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { manageActions } from "../../../store/manage";

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

  return (
    <Wrapper whileHover={"hover"} variants={CardHover}>
      <Image
        onClick={onShowDetailHandler}
        className="image"
        // layout="fill"
        width={450}
        height={400}
        src={`https://ddokbun.com/api/resources/s3?plantSeq=${plant.plantSeq}`}
        alt="식물이미지"
      />
      <motion.h2>{plant.plantNickname}</motion.h2>
    </Wrapper>
  );
};

export default CardItem;
