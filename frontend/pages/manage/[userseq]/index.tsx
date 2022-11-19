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
import Spinner from "../../../common/Spinner";
import { checkAuthentication } from "../../../utils/protectedRouter";

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
      {plantsList?.length && <DynamicCardlist plantsList={plantsList} />}
    </Wrapper>
  );
};

export default Manage;

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  const isAuthenticated = await checkAuthentication(query, req, res);
  console.log(isAuthenticated);

  if (isAuthenticated) {
    return {
      props: {},
    };
  } else {
    return {
      redirect: {
        destination: "/commerce",
      },
      props: {},
    };
  }
};
