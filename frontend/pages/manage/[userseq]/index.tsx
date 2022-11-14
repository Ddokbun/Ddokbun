import { getCookies } from "cookies-next";
import { motion } from "framer-motion";
import { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import { fetchCartList } from "../../../apis/commerce";
import { fetchPlantsList } from "../../../apis/manage";
import PageTitle from "../../../common/PageTitle";
import CardList from "../../../components/manage/CardList";
import { wrapper } from "../../../store";
import { setAllCartLists } from "../../../store/commerce";
import {
  EleVar,
  ManageHomeAni,
  WrapperVar,
} from "../../../styles/animations/animation";
import { Wrapper } from "../../../styles/manage/styles";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelect } from "@react-three/drei";
import { useSelector } from "react-redux";

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

  return (
    <Wrapper variants={ManageHomeAni} initial="out" animate="in" exit="out">
      <PageTitle isLink mypage={false}>
        <h1>My Plants</h1>
      </PageTitle>
      {plantsList ? (
        <>
          <h2>관리 원하시는 화분을 클릭해주세요</h2>
          <DynamicCardlist plantsList={plantsList} />
        </>
      ) : (
        <>
          <h2>화분이 아직 없으신가요?</h2>
          <Link href={"/manage/add"}>
            <h3>화분 추가하기</h3>
          </Link>
        </>
      )}
    </Wrapper>
  );
};

export default Manage;
