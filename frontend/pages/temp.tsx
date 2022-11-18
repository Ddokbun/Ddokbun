import type { NextPage } from "next";
import React from "react";
import CategoryButton from "../components/commerce/main/CategoryButton";
import SurveyBanner from "../components/commerce/main/SurveyBanner";
import { Wrapper } from "../styles/commerce/styles";

const Temp: NextPage = () => {
  return (
    <Wrapper>
      <SurveyBanner></SurveyBanner>
      <CategoryButton></CategoryButton>
    </Wrapper>
  );
};

export default Temp;
