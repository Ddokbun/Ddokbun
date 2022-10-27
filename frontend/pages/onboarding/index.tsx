import type { NextPage } from "next";
import Head from "next/head";

import MainContents from "../../components/Onboarding/MainContents";
import SubContents from "../../components/Onboarding/SubContents";
import CommerceContents from "../../components/Onboarding/CommerceContents";
import SearchContents from "../../components/Onboarding/SearchContents";
import RecommendContents from "../../components/Onboarding/RecommendContents";

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
