import { motion } from "framer-motion";
import React, { FC } from "react";
import { EleVar } from "../../styles/animations/animation";
import { Theme } from "../../styles/theme";
import { TextBtn } from "../Button";

import { Wrapper } from "./styles";

interface Props {
  isLink: boolean;
  children: string;
}

const PageTitle: FC<Props> = ({ isLink, children }) => {
  return (
    <Wrapper variants={EleVar}>
      <h1>{children} </h1>
      {isLink && (
        <div className="add-btn-container">
          <TextBtn path="/manage/add" color={Theme.color.mainGreen}>
            화분추가
          </TextBtn>
        </div>
      )}
    </Wrapper>
  );
};

export default PageTitle;
