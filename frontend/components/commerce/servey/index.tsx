import React, { useState } from "react";
import Dot from "../../../common/Dot";
import { Wrapper } from "./styles";

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
      <div className="question">
        <h1>Q1. 당신은 식물을 얼마나 좋아하시나요?</h1>
      </div>
      <div className="answers">
        <ul>
          <li>1. 하늘만큼</li>
          <li>2. 땅만큼</li>
          <li>3. 우주만큼</li>
        </ul>
      </div>
      <div className="button-wrap">
        <button className="button">이전</button>
        <button className="button">다음</button>
      </div>
    </Wrapper>
  );
};

export default ServeyForm;
