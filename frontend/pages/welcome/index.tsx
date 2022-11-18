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
      <div className="y mandatory-scroll-snapping" dir="rtl">
        <MainItem></MainItem>
        <SubItem></SubItem>
        <CommerceItem></CommerceItem>
        <SearchItem></SearchItem>
        <RecommendItem></RecommendItem>
      </div>
    </Wrapper>
  );
};

export default Onboarding;
