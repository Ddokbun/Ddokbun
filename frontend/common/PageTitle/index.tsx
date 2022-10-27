import React from "react";
import { Theme } from "../../styles/theme";
import { TextBtn } from "../Button";

import { Wrapper } from "./styles";

const PageTitle: React.FC<{
  isLink: boolean;
  isBold: boolean;
  children: string;
}> = ({ isLink, isBold, children }) => {
  return (
    <Wrapper isBold={isBold}>
      <h1>{children} </h1>
      {isLink && (
        <div className="add-btn-container">
          <TextBtn path="manage/add" color={Theme.color.mainGreen}>
            화분추가
          </TextBtn>
        </div>
      )}
    </Wrapper>
  );
};

export default PageTitle;
