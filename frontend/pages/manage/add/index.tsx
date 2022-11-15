import React from "react";
import PageTitle from "../../../common/PageTitle";
import AddForm from "../../../components/manage/add/AddForm";
import { WrapperVar } from "../../../styles/animations/animation";
import { Wrapper } from "../../../styles/manage/add/styles";

const addPlant = () => {
  return (
    <Wrapper variants={WrapperVar} initial="start" animate="end">
      <PageTitle isLink={false} mypage={false}>
        <h1>나의 식물 등록</h1>
      </PageTitle>
      <AddForm />
    </Wrapper>
  );
};

export default addPlant;
