import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { Plants } from "../../../../../pages/manage/add/search";
import { manageActions } from "../../../../../store/manage";
import { EleVar } from "../../../../../styles/animations/animation";
import { Wrapper } from "./styles";

interface Props extends Plants {
  isDelivery: boolean;
}

const SearchCardItem: React.FC<Props> = ({
  plantName,
  plantNeName,
  plantSeq,
  isDelivery,
  imagePath,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onFetchPlantSeqHandler = () => {
    dispatch(manageActions.setPlantInfo({ plantSeq, plantName }));
    router.back();
  };

  const onShowDeliveryHandler = () => {
    console.log("배송조회");
  };

  return (
    <Wrapper
      onClick={onFetchPlantSeqHandler}
      isDelivery={isDelivery}
      variants={EleVar}
    >
      <div className="image-container">
        <Image
          width={"100%"}
          height={"100%"}
          src={imagePath}
          objectFit="cover"
          className="image"
          alt="식물 카드 이미지 입니다."
        />
      </div>
      <div className="info">
        <h2 className="krName">{plantName}</h2>
        <p className="egName">{plantNeName}</p>
      </div>
      {isDelivery && (
        <p onClick={onShowDeliveryHandler} className="delivery">
          배송조회
        </p>
      )}
    </Wrapper>
  );
};

export default SearchCardItem;
