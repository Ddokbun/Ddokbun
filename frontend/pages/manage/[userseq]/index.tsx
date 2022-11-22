import { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import { fetchCartList } from "../../../apis/commerce";
import { fetchPlantsList } from "../../../apis/manage";
import PageTitle from "../../../common/PageTitle";
import { setAllCartLists } from "../../../store/commerce";
import { ManageHomeAni } from "../../../styles/animations/animation";
import { ModalWrapper, Wrapper } from "../../../styles/manage/styles";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { checkAuthentication } from "../../../utils/protectedRouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../common/Modal";
import Image from "next/image";
import pot from "../../../assets/smart-pot.jpg";

const DynamicCardlist = dynamic(
  () => import("../../../components/manage/CardList"),
  {
    ssr: false,
  },
);

export interface PlantListType {
  potSerial?: string;
  plantNickname?: string;
  imagePath?: string;
  plantSeq?: number;
}

const Manage: NextPage = () => {
  const [plantsList, setPlantsList] = useState<PlantListType[]>();
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getInitialData = async () => {
      const [plantsListData, cartListData] = await Promise.all([
        fetchPlantsList(),
        fetchCartList(),
      ]);

      setPlantsList(plantsListData);
      dispatch(setAllCartLists(cartListData));
    };
    getInitialData();
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const modalContents = () => {
    return (
      <ModalWrapper>
        <div>
          <div className="img-wrapper">
            <Image src={pot} layout="fill" objectFit="cover"></Image>
          </div>
          <div className="text-wrapper">
            <div>1. 똑분에서 화분을 구매해주세요.</div>
            <div>2. 화분 하단에 있는 시리얼 넘버를 확인해주세요</div>
            <div>3. 화분 등록을 완료한 후 관리하기를 시작해보세요</div>
            <div>4. 환경 데이터는 자동으로 갱신됩니다</div>
            <div>5. 취향에 맞게 수동 물주기와 자동 물주기를 선택해주세요</div>
          </div>
        </div>
      </ModalWrapper>
    );
  };

  return (
    <Wrapper variants={ManageHomeAni} initial="out" animate="in" exit="out">
      <PageTitle isLink mypage={false}>
        <h1>
          My Plants{" "}
          <span>
            <FontAwesomeIcon icon={faCircleInfo} onClick={openModal} />
          </span>
          {modalOpen && (
            <Modal onClose={closeModal} title="화분 사용 방법을 알려드릴게요">
              {modalContents()}
            </Modal>
          )}
        </h1>
      </PageTitle>
      <DynamicCardlist plantsList={plantsList!} />
    </Wrapper>
  );
};

export default Manage;

// export const getServerSideProps: GetServerSideProps = async ({
//   query,
//   req,
//   res,
// }) => {
//   const isAuthenticated = await checkAuthentication(query, req, res);
//   if (!isAuthenticated) {
//     return {
//       redirect: {
//         destination: "/commerce",
//       },
//       props: {},
//     };
//   } else {
//     return {
//       props: {},
//     };
//   }
// };
