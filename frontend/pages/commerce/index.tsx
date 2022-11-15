import { GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../styles/commerce/styles";
import MainProduct from "../../components/commerce/main/MainProductCard/MainProduct";
import SurveyBanner from "../../components/commerce/main/SurveyBanner";
import IoTSurvey from "../../components/commerce/main/IoTSurvey";
import { fetchHotPlant, getMainProduct } from "../../apis/commerce";
import { MainPlant } from "../../types/commerce/home.interface";
import MainProductCard from "../../components/commerce/main/MainProductCard";
import MainBanner from "../../components/commerce/main/MainBanner";
import PotBanner from "../../components/commerce/main/PotBanner";
import LastProductCard from "../../components/commerce/main/LastProductCard";

export const getStaticProps: GetStaticProps = async context => {
  const res = await getMainProduct();
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
      <MainBanner />
      <MainProductCard data={data.slice(0, 3)} />
      <PotBanner />
      <MainProductCard data={data.slice(3, 9)} />
      <SurveyBanner />
      {/* <IoTSurvey /> */}
      <LastProductCard data={data.slice(9, 12)} />
    </Wrapper>
  );
};

export default Commerce;
