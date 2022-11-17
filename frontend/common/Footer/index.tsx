import React from "react";
import { Wrapper } from "./styles";
import Logo from "../../assets/logo.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <div className="foot">
        <div className="grid-left">
          <h1>Ddokbun 똑분</h1>
          <h2>SSAFY D208 해리포터팀</h2>

          <p>팀장 신혜원</p>
          <p>FrontEnd 김채리 신혜원 허건녕</p>
          <p>BackEnd 손광진 이동욱 이재환</p>
        </div>

        {/* <div className="grid-right">
          <div className="col">
            <h2>IoT</h2>
            <p>나만의 스마트화분 똑분</p>
          </div>
          <div className="col">
            <h2>Commerce</h2>
            <p>사용자를 위한 맞춤 추천</p>
          </div>
          <div className="col">
            <h2>Admin</h2>
            <p>확장형 커머스</p>
          </div>
          <div className="col">
            <h2>AI for User</h2>
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default Footer;
