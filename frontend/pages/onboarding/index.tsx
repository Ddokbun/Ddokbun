import type { NextPage } from "next";
import Head from "next/head";
import MainContents from "../../components/onboarding/MainContents";
import SubContents from "../../components/onboarding/SubContents";
import CommerceContents from "../../components/onboarding/CommerceContents";
import SearchContents from "../../components/onboarding/SearchContents";
import RecommendContents from "../../components/onboarding/RecommendContents";

const Onboarding: NextPage = () => {
  return (
    <div>
      <MainContents></MainContents>
      <SubContents></SubContents>
      <CommerceContents></CommerceContents>
      <SearchContents></SearchContents>
      <RecommendContents></RecommendContents>
    </div>
  );
};

export default Onboarding;
