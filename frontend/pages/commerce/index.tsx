import { NextPage } from "next";
import { Wrapper } from "../../styles/commerce/styles";
import MainProduct from "../../components/commerce/main/MainProduct";
import SurveyBanner from "../../components/commerce/main/SurveyBanner";

const Commerce: NextPage = () => {
  return (
    <Wrapper>
      <MainProduct />
      <SurveyBanner />
      <MainProduct />
      <MainProduct />
      <MainProduct />
      <MainProduct />
      <MainProduct />
    </Wrapper>
  );
};

export default Commerce;
