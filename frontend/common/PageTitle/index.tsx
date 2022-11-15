import { motion } from "framer-motion";
import React, { FC, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { manageActions } from "../../store/manage";
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
  const dispatch = useDispatch();

  const onClearPlantInfoHandler = () => {
    dispatch(manageActions.setPlantInfo({ plantName: "", plantSeq: "" }));
  };
  return (
    <Wrapper variants={EleVar}>
      {children}
      {isLink && (
        <div className="add-btn-container" onClick={onClearPlantInfoHandler}>
          <TextBtn path="/manage/add" color={Theme.color.mainGreen}>
            화분추가
          </TextBtn>
        </div>
      )}
    </Wrapper>
  );
};

export default PageTitle;
