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
import { EleVar, WrapperVar } from "../../../styles/animations/animation";
import { Wrapper } from "../../../styles/manage/styles";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useDispatch } from "react-redux";

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
      const plantsListData = await fetchPlantsList();
      setPlantsList(plantsListData);
    };

    const getCartList = async () => {
      const data = await fetchCartList();
      dispatch(setAllCartLists(data));
    };

    getCartList();
    getInitialData();
  }, []);

  return (
    <Wrapper variants={WrapperVar} initial="start" animate="end">
      <PageTitle isLink>My Plants</PageTitle>
      {plantsList ? (
        <>
          <motion.h2 variants={EleVar}>
            관리 원하시는 화분을 클릭해주세요
          </motion.h2>
          <DynamicCardlist plantsList={plantsList} />
        </>
      ) : (
        <>
          <motion.h2 variants={EleVar}>화분이 아직 없으신가요?</motion.h2>
          <Link href={"/manage/add"}>
            <motion.h3 variants={EleVar}>화분 추가하기</motion.h3>
          </Link>
        </>
      )}
    </Wrapper>
  );
};

export default Manage;
