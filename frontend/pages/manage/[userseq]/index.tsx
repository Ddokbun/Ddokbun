import { getCookies } from "cookies-next";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { fetchCartList } from "../../../apis/commerce";
import { fetchPlantsList } from "../../../apis/manage";
import PageTitle from "../../../common/PageTitle";
import CardList from "../../../components/manage/CardList";
import { wrapper } from "../../../store";
import { setCartLists } from "../../../store/commerce";
import { Wrapper } from "../../../styles/manage/styles";

export interface PlantListType {
  potSerial: string;
  plantNickname: string;
  imagePath?: string;
  plantSeq: number;
}

const Manage: NextPage<{ plantsListData?: PlantListType[] }> = ({
  plantsListData,
}) => {
  return (
    <Wrapper>
      <PageTitle isLink isBold>
        나의 식물들
      </PageTitle>
      {plantsListData && <CardList plantsList={plantsListData} />}
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async ({ req, res }) => {
    const { token } = getCookies({ req, res });

    // const data = await fetchCartList(token);
    const plantsListData = await fetchPlantsList(token);

    // store.dispatch(setCartLists(["하이"]));

    return {
      props: {
        plantsListData,
      },
    };
  });

export default Manage;
