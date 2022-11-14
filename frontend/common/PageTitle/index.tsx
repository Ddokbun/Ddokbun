import { motion } from "framer-motion";
import React, { FC, ReactElement } from "react";
import { EleVar } from "../../styles/animations/animation";
import { Theme } from "../../styles/theme";
import { TextBtn } from "../Button";

import { Wrapper } from "./styles";

interface Props {
  isLink: boolean;
  children: ReactElement;
  mypage: boolean;
}

const PageTitle: FC<Props> = ({ isLink, children, mypage }) => {
  return (
    <Wrapper variants={EleVar}>
      {children}
      {isLink && (
        <div className="add-btn-container">
          <TextBtn path="/manage/add" color={Theme.color.mainGreen}>
            화분추가
          </TextBtn>
        </div>
      )}
      {/* {mypage && } */}
    </Wrapper>
  );
};

export default PageTitle;
