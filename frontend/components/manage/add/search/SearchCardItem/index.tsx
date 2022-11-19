import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchItemSeq } from "../../../../../apis/search";
import { Plants } from "../../../../../pages/manage/add/search";
import { manageActions } from "../../../../../store/manage";
import { ManageHomeAni } from "../../../../../styles/animations/animation";
import { Wrapper } from "./styles";

interface Props extends Plants {
  isDelivery: boolean;
}

const SearchCardItem: FC<Props> = ({
  plantName,
  plantNeName,
  plantSeq,
  isDelivery,
  imagePath,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [item, setItem] = useState();

  useEffect(() => {
    async function fetchSeqNum() {
      const data = await fetchItemSeq(plantSeq);
      setItem(data);
    }
    fetchSeqNum();
  }, []);

  const onFetchPlantSeqHandler = () => {
    if (router.query.path === "search") {
      router.push(`/commerce/product/${item}`);
      return;
    }

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
      variants={ManageHomeAni}
      initial="out"
      animate="in"
      exit="out"
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
