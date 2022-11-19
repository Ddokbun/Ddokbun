import type { NextPage } from "next";
import MainItem from "../../components//welcome/MainItem";
import SubItem from "../../components/welcome/SubItem";
import CommerceItem from "../../components/welcome/CommerceItem";
import SearchItem from "../../components/welcome/SearchItem";
import RecommendItem from "../../components/welcome/RecommendItem";
import { Wrapper } from "../../styles/welcome/styles";
import { useRef } from "react";

const Onboarding: NextPage = () => {
  return (
    <Wrapper>
      <MainItem></MainItem>
      <RecommendItem></RecommendItem>
      <CommerceItem></CommerceItem>
      <SubItem></SubItem>
      {/* <SearchItem></SearchItem> */}
    </Wrapper>
  );
};

export default Onboarding;
