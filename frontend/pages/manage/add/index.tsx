import React from "react";
import PageTitle from "../../../common/PageTitle";
import AddForm from "../../../components/manage/add/AddForm";
import { ManageHomeAni } from "../../../styles/animations/animation";
import { Wrapper } from "../../../styles/manage/add/styles";

const addPlant = () => {
  return (
    <Wrapper variants={ManageHomeAni} initial="out" animate="in" exit="out">
      <PageTitle isLink={false} mypage={false}>
        <h1>나의 식물 등록</h1>
      </PageTitle>
      <AddForm />
    </Wrapper>
  );
};

export default addPlant;
