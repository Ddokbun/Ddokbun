import { Wrapper } from "./styles";
import Image from "next/image";
import commerceImg01 from "../../../assets/onboarding/tempRecommend01.jpg";
import commerceImg02 from "../../../assets/onboarding/tempRecommend02.jpg";
import commerceImg03 from "../../../assets/onboarding/tempRecommend03.jpg";
import commerceImg04 from "../../../assets/onboarding/tempRecommend04.jpg";
import { useSelector, useDispatch } from "react-redux";

const CommerceItem = () => {
  return (
    <Wrapper>
      <div className="subcontent-wrap">
        <div className="pot-img">
          <div>
            <div className="img-item">
              <Image src={commerceImg01} alt="임시 메인 이미지" layout="fill" />
            </div>
            <div className="img-item">
              <Image src={commerceImg03} alt="임시 메인 이미지" layout="fill" />
            </div>
          </div>
          <div>
            <div className="img-item">
              <Image src={commerceImg04} alt="임시 메인 이미지" layout="fill" />
            </div>
            <div className="img-item">
              <Image src={commerceImg02} alt="임시 메인 이미지" layout="fill" />
            </div>
          </div>
        </div>
        <div className="title">
          <h3>개인화된 추천 시스템을 탑재한 화분 쇼핑</h3>
          <h2>E-Commerce</h2>
        </div>
      </div>
    </Wrapper>
  );
};

export default CommerceItem;