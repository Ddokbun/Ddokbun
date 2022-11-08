import type { NextPage } from "next";
import MainItem from "../../components//welcome/MainItem";
import SubItem from "../../components/welcome/SubItem";
import CommerceItem from "../../components/welcome/CommerceItem";
import SearchItem from "../../components/welcome/SearchItem";
import RecommendItem from "../../components/welcome/RecommendItem";
import { Wrapper } from "../../styles/welcome/styles";
import { useScroll, useSpring } from "framer-motion";
import { NextSeo } from "next-seo";

const Onboarding: NextPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <Wrapper>
      <>
        <MainItem></MainItem>
        <SubItem></SubItem>
        <CommerceItem></CommerceItem>
        <SearchItem></SearchItem>
        <RecommendItem></RecommendItem>
      </>
    </Wrapper>
  );
};

export default Onboarding;
