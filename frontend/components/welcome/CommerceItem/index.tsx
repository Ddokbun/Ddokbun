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
        <div className="flex-position">
          <div className="pot-flex">
            <div className="pot-img flip">
              <div className="img-item front">
                <Image
                  src={commerceImg01}
                  alt="똑분 스마트화분 설명 이미지1"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absol-content">
                  <h2>설문조사형 추천</h2>
                </div>
              </div>
              <div className="back">
                <div className="detail-content">
                  <div>
                    <h2>[설문조사형 추천]</h2>
                    <h3>
                      식물을 키우는 위치, <br />
                      식물을 키우는 사람 등
                    </h3>
                    <h3>
                      설문조사 결과에 따라 <br />
                      구매자 맞춤형 식물을 추천해드릴게요
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="pot-img flip">
              <div className="img-item front">
                <Image
                  src={commerceImg03}
                  alt="똑분 스마트화분 설명 이미지2"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absol-content">
                  <h2>유사식물 기반 추천</h2>
                </div>
              </div>
              <div className="back">
                <div className="detail-content">
                  <div>
                    <h2>[유사식물 추천]</h2>
                    <h3>
                      구매하고 싶은 식물이 있나요? <br />
                    </h3>
                    <h3>
                      현재 보고 있는 식물을 바탕으로 <br />
                      유사한 식물을 추천해드릴게요!
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="pot-img flip">
              <div className="img-item front">
                <Image
                  src={commerceImg04}
                  alt="똑분 스마트화분 설명 이미지3"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absol-content">
                  <h2>IoT 기반 추천</h2>
                </div>
              </div>
              <div className="back">
                <div className="detail-content">
                  <div>
                    <h2>[IoT 기반 추천]</h2>
                    <h3>
                      이미 똑분 화분을 구매하셨다면!
                      <br />
                    </h3>
                    <h3>
                      스마트 화분 데이터를 분석해 <br />
                      현재 상황에 적절한 식물을 알려드려요
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="title">
            <h3>개인화된 추천 시스템을 탑재한 화분 쇼핑</h3>
            <h2>E-Commerce</h2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CommerceItem;
