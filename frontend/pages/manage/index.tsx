import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import TextBtn from "../../common/TextBtn";
import Card from "../../components/manage/CardItem";

const Manage: NextPage = () => {
  //
  // const router = useRouter();
  //   const onChangePageHandler = (identifier: string) => {
  //     const href = `manage/${identifier}`;
  //     router.push(href);
  //   };

  return (
    <div>
      <TextBtn path="hia" color="#43855C">
        화분추가
      </TextBtn>
      <Card />
    </div>
  );
};

export default Manage;
