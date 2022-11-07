import React, { useState } from "react";
import { start } from "repl";
import Dot from "../../../common/Dot";
import { EleVar, WrapperVar } from "../../../styles/animations/animation";
import { FormWrapper, Wrapper } from "./styles";
import { motion } from "framer-motion";

const ServeyForm: React.FC = () => {
  const [level, setLevel] = useState(1);
  return (
    <Wrapper>
      <div className="dots">
        <Dot now={true} />
        <Dot now={false} />
        <Dot now={false} />
        <Dot now={false} />
        <Dot now={false} />
      </div>
      <FormWrapper variants={WrapperVar} initial="start" animate="end">
        <motion.h1 variants={EleVar}>
          Q1. 당신은 식물을 얼마나 좋아하시나요?
        </motion.h1>

        <ul>
          <motion.li variants={EleVar}>1. 하늘만큼</motion.li>
          <motion.li variants={EleVar}>2. 땅만큼</motion.li>
          <motion.li variants={EleVar}>3. 우주만큼</motion.li>
        </ul>
      </FormWrapper>

      <div className="button-wrap">
        <button className="button">이전</button>
        <button className="button">다음</button>
      </div>
    </Wrapper>
  );
};

export default ServeyForm;
