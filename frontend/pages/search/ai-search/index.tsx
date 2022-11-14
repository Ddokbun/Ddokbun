import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import SelectButton from "../../../components/search/AISearch/SelectButton";

const AISearch: NextPage = () => {
  return (
    <>
      <SelectButton></SelectButton>
    </>
  );
};

export default AISearch;
