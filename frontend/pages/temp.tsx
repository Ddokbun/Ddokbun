import type { NextPage } from "next";
import React from "react";
import SurveyBanner from "../components/commerce/main/SurveyBanner";
import { Wrapper } from "../styles/commerce/styles";

const Temp: NextPage = () => {
  return (
    <Wrapper>
      <SurveyBanner></SurveyBanner>
    </Wrapper>
  );
};

export default Temp;
