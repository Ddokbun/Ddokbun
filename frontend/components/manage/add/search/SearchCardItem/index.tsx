import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { manageActions } from "../../../../../store/manage";
import { Wrapper } from "./styles";

const SearchCardItem: React.FC<{
  image: StaticImageData;
  krName: string;
  egName: string;
  plantSeq: string;
}> = ({ image, krName, egName, plantSeq }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onFetchPlantSeqHandler = () => {
    dispatch(manageActions.setPlantInfo({ plantSeq, krName }));
    router.back();
  };

  return (
    <Wrapper onClick={onFetchPlantSeqHandler}>
      <div className="image-container">
        <Image
          width={"100%"}
          height={"90%"}
          src={image}
          objectFit="cover"
          className="image"
          alt="식물 카드 이미지 입니다."
        />
      </div>
      <div className="info">
        <h2 className="krName">{krName}</h2>
        <p className="egName">{egName}</p>
      </div>
    </Wrapper>
  );
};

export default SearchCardItem;
