import { NextPage } from "next";
import { Wrapper } from "../../styles/commerce/styles";
import MainProduct from "../../components/commerce/main/MainProduct";
import SurveyBanner from "../../components/commerce/main/SurveyBanner";
import IoTSurvey from "../../components/commerce/main/IoTSurvey";

const Commerce: NextPage = () => {
  return (
    <Wrapper>
      <MainProduct />
      <SurveyBanner />
      <MainProduct />
      <MainProduct />
      <IoTSurvey />
      <MainProduct />
      <MainProduct />
      <MainProduct />
    </Wrapper>
  );
};

export default Commerce;
