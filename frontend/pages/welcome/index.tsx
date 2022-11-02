import type { NextPage } from "next";
import MainItem from "../../components//welcome/MainItem";
import SubItem from "../../components/welcome/SubItem";
import CommerceItem from "../../components/welcome/CommerceItem";
import SearchItem from "../../components/welcome/SearchItem";
import RecommendItem from "../../components/welcome/RecommendItem";

const Onboarding: NextPage = () => {
  return (
    <div>
      <MainItem></MainItem>
      <SubItem></SubItem>
      <CommerceItem></CommerceItem>
      <SearchItem></SearchItem>
      <RecommendItem></RecommendItem>
    </div>
  );
};

export default Onboarding;
