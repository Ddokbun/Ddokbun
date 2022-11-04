import { getCookie, getCookies } from "cookies-next";
import { GetServerSideProps, NextPage } from "next";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchCartList } from "../../../apis/commerce";
import { fetchPlantsList } from "../../../apis/manage";
import PageTitle from "../../../common/PageTitle";
import Card from "../../../components/manage/CardItem";
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

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async ({ req, res }) => {
    const { token } = getCookies({ req, res });

    const data = await fetchCartList(token);

    // store.dispatch(setCartLists(["하이"]));

    return {
      props: {},
    };
  });

// const Manage: NextPage<{ plantsList: PlantListType }> = ({ plantsList }) => {
const Manage: NextPage = () => {
  // const router = useRouter();
  // const onChangePageHandler = (identifier: string) => {
  //   const href = `manage/${identifier}`;
  //   router.push(href);
  // };
  const [plantsList, setPlantsList] = useState<PlantListType[]>();
  useEffect(() => {
    const fetchInitialData = async () => {
      const data = await fetchPlantsList();
      console.log(data);

      setPlantsList(data);
    };
    fetchInitialData();
  }, [setPlantsList]);

  return (
    <Wrapper>
      <PageTitle isLink isBold>
        나의 식물들
      </PageTitle>
      {plantsList && <CardList plantsList={plantsList} />}
    </Wrapper>
  );
};
// export const getServerSideProps: GetServerSideProps = async context => {

//   const plantsList = await fetchPlantsList();

//   console.log("서버사이드");

//   return {
//     props: {
//       // plantsList,
//     }, // will be passed to the page component as props
//   };
// };
export default Manage;
