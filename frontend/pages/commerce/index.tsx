import { GetStaticProps, NextPage } from "next";
import { Wrapper } from "../../styles/commerce/styles";
import SurveyBanner from "../../components/commerce/main/SurveyBanner";
import { fetchHotPlant, getMainProduct } from "../../apis/commerce";
import { MainPlant } from "../../types/commerce/home.interface";
import MainProductCard from "../../components/commerce/main/MainProductCard";
import MainBanner from "../../components/commerce/main/MainBanner";
import PotBanner from "../../components/commerce/main/PotBanner";
import LastProductCard from "../../components/commerce/main/LastProductCard";
import SwiperProduct from "../../components/commerce/main/SwiperProduct";
import CategoryButton from "../../components/commerce/main/CategoryButton";
import { WrapperVar } from "../../styles/animations/animation";
import { motion } from "framer-motion";

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
      <motion.div
        variants={WrapperVar}
        initial={"start"}
        animate={"end"}
        className="contents-box"
      >
        <MainBanner />
        <PotBanner />
        <SurveyBanner />
        <SwiperProduct data={hotitem} />
        <MainProductCard data={data.slice(0, 2)} />
        <CategoryButton />
        <LastProductCard data={data.slice(9, 12)} />
      </motion.div>
    </Wrapper>
  );
};

export default Commerce;
