import { getCookies } from "cookies-next";
import { GetServerSideProps, NextPage } from "next";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchPlantsList } from "../../../apis/manage";
import PageTitle from "../../../common/PageTitle";
import CardList from "../../../components/manage/CardList";
import { Wrapper } from "../../../styles/manage/styles";

export interface PlantListType {
  potSerial: string;
  plantNickname: string;
  imagePath?: string;
  plantSeq: number;
}

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
// export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
//   const { token } = getCookies({ res, req });
//   const plantsList = await fetchPlantsList(token);


//   return {
//     props: {
//       // plantsList,
//     }, // will be passed to the page component as props
//   };
// };
export default Manage;
