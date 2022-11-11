import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Camera from "../../../../components/search/AISearch/SelectButton/Camera";

const SearchCamera: NextPage = () => {
  return (
    <>
      <Camera> </Camera>
    </>
  );
};

export default SearchCamera;
