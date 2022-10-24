import Image from "next/image";
import React from "react";
import { NextPage } from "next";
import { Wrapper } from "./styles";
import Temp from "../../../src/assets/temp.jpg";
import Temp2 from "../../../src/assets/temp2.png";

const Manage: NextPage = () => {
  return (
    <Wrapper>
      <div className="banner-wrap">
        <Image src={Temp} alt="임시배너이미지입니다" />
      </div>
      <div className="cards-grid">
        <div className="card">
          <Image src={Temp2} alt="임시카드이미지입니다" />
        </div>
        <div className="card">
          <Image src={Temp2} alt="임시카드이미지입니다" />
        </div>
        <div className="card">
          <Image src={Temp2} alt="임시카드이미지입니다" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Manage;
