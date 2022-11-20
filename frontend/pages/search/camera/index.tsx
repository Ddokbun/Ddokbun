import React from "react";
import { NextPage } from "next";
import CameraCompo from "../../../components/search/Camera";
import { motion } from "framer-motion";
import { WrapperVar } from "../../../styles/animations/animation";

const SearchCamera: NextPage = () => {
  return (
    <>
      {" "}
      <motion.div
        variants={WrapperVar}
        initial={"start"}
        animate={"end"}
        className="contents-box"
      >
        <CameraCompo></CameraCompo>{" "}
      </motion.div>
    </>
  );
};

export default SearchCamera;
