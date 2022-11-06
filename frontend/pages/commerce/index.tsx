import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../styles/commerce/styles";
import MainProduct from "../../components/commerce/main/MainProductCard/MainProduct";
import SurveyBanner from "../../components/commerce/main/SurveyBanner";
import IoTSurvey from "../../components/commerce/main/IoTSurvey";
import { fetchHotPlant } from "../../apis/commerce";
import { MainPlant } from "../../types/commerce/home.interface";
import MainProductCard from "../../components/commerce/main/MainProductCard";

export const getStaticProps: GetStaticProps = async context => {
  const res = await fetchHotPlant();
  const data = res.content;
  return {
    props: {
      data,
    },
  };
};

const Commerce: NextPage<{ data: MainPlant }> = ({ data }) => {
  return (
    <Wrapper>
      <SurveyBanner />
      <IoTSurvey />
      <MainProductCard data={data.slice(0, 9)} />
    </Wrapper>
  );
};

export default Commerce;
