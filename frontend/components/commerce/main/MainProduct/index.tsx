import { Wrapper } from "./styles";
import Image from "next/image";
import Link from "next/link";
import temp01 from "../../../../assets/commerce/temp-product.jpg";

const MainProduct = () => {
  return (
    <Wrapper>
      <div className="subcontent-wrap">
        <Link href={"/commerce/products/3"}>
          <div className="pot-img">
            <div className="pot-img-front">
              <Image
                src={temp01}
                alt="임시 메인 이미지"
                className="banner-img"
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="pot-img-back">
              <div className="font-wrap">
                <h2>Smart Flower Pot</h2>
                <h4>손쉽게 관리하는 스마트 화분</h4>
                <h3>₩ 49,000</h3>
                <div className="button">
                  <Link href={"/commerce/products/3"}>
                    <div className="button-wrap">바로가기</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};

export default MainProduct;
