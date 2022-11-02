import { NextPage } from "next";
// import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import PageTitle from "../../common/PageTitle";
import Card from "../../components/manage/CardItem";
// import CardList from "../../components/manage/CardList";
import { Wrapper } from "../../styles/manage/styles";

const Manage: NextPage = () => {
  // const router = useRouter();
  // const onChangePageHandler = (identifier: string) => {
  //   const href = `manage/${identifier}`;
  //   router.push(href);
  // };

  return (
    <Wrapper>
      <PageTitle isLink isBold>
        나의 식물들
      </PageTitle>
      <Card />
      {/* <CardList /> */}
    </Wrapper>
  );
};

export default Manage;
