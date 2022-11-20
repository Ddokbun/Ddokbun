import type { NextPage } from "next";
import MainItem from "../../components//welcome/MainItem";
import SubItem from "../../components/welcome/SubItem";
import CommerceItem from "../../components/welcome/CommerceItem";
import SearchItem from "../../components/welcome/SearchItem";
import RecommendItem from "../../components/welcome/RecommendItem";
import { Wrapper } from "../../styles/welcome/styles";
import { useRef } from "react";

const Onboarding: NextPage = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const onHomeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // window.addEventListener("scroll", function () {
  //   homeRef.current?.scrollIntoView({ behavior: "smooth" });
  // });
  return (
    <Wrapper>
      <MainItem></MainItem>
      {/* <button onClick={onHomeClick}>버튼</button> */}
      <RecommendItem></RecommendItem>
      <CommerceItem></CommerceItem>
      <SearchItem></SearchItem>
      <SubItem></SubItem>
    </Wrapper>
  );
};

export default Onboarding;
