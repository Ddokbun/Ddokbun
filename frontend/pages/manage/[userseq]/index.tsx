import { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import { fetchCartList } from "../../../apis/commerce";
import { fetchPlantsList } from "../../../apis/manage";
import PageTitle from "../../../common/PageTitle";
import { setAllCartLists } from "../../../store/commerce";
import { ManageHomeAni } from "../../../styles/animations/animation";
import { Wrapper } from "../../../styles/manage/styles";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
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
      <DynamicCardlist plantsList={plantsList!} />
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

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/commerce",
      },
      props: {},
    };
  } else {
    return {
      props: {},
    };
  }
};
