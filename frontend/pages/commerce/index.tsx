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
import SwiperProduct from "../../components/commerce/main/SwiperProduct";
import CategoryButton from "../../components/commerce/main/CategoryButton";

export const getStaticProps: GetStaticProps = async context => {
  const res = await getMainProduct();
  const hotplant = await fetchHotPlant();
  const hotitem = hotplant.content;
  const data = res.content;
  return {
    props: {
      data,
      hotitem,
    },
  };
};

const Commerce: NextPage<{ data: MainPlant; hotitem: MainPlant }> = ({
  data,
  hotitem,
}) => {
  return (
    <Wrapper>
      <MainBanner />
      <PotBanner />
      <SurveyBanner />
      {/* <SwiperProduct data={data.slice(2, 9)} /> */}
      <SwiperProduct data={hotitem} />
      <MainProductCard data={data.slice(0, 2)} />
      <CategoryButton />
      <LastProductCard data={data.slice(9, 12)} />
    </Wrapper>
  );
};

export default Commerce;
