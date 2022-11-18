import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { fetchProductDetail } from "../../../../apis/commerce";
import ProductSellCard from "../../../../common/Cards/ProductSellCard";
import { Wrapper } from "../../../../styles/commerce/products/pot/styles";
import Light from "../../../../assets/icon/light.png";
import Image from "next/image";

const Pot: NextPage = data => {
  return (
    <Wrapper>
      <div className="contents-box">
        <ProductSellCard
          itemName="똑분"
          itemEnName="Premium Smart Pot"
          tags={["스마트화분"]}
          itemSeq={0}
          itemPrice={12000}
          itemPicture={"https://ddokbun.com/api/resources/s3?plantSeq=123"}
          flag={true}
        />

        <div className="description">
          <h1>스마트 화분</h1>

          <div className="plant-growth">
            <div className="plant-grid">
              <div className="col">
                <div className="imgwrap">
                  <Image src={Light} objectFit="contain" layout="fill" />
                </div>
                <div className="flex">
                  <h3>실시간 데이터를 활용하여 현재 내식물의 상태 확인</h3>
                </div>
              </div>
              <div className="col">
                <div className="imgwrap">
                  <Image src={Light} objectFit="contain" layout="fill" />
                </div>
                <div className="flex">
                  <h3>언제, 어디서나 내 식물 걱정말고 원격 물주기</h3>
                </div>
              </div>
              <div className="col">
                <div className="imgwrap">
                  <Image src={Light} objectFit="contain" layout="fill" />
                </div>
                <div className="flex">
                  <h3>식물정보를 활용하여 내 식물 맞춤형 관리 제공</h3>
                </div>
              </div>
              <div className="col">
                <div className="imgwrap">
                  <Image src={Light} objectFit="contain" layout="fill" />
                </div>
                <div className="flex">
                  <h3>
                    잊어도 괜찮아요! 바쁠때에는 자동 물주기를 통해 편한 가드닝
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Pot;

export const getStaticProps: GetStaticProps = async context => {
  // const data = await fetchProductDetail("0");
  return {
    props: {
      // data: data[parseInt(id) - 1],
    },
  };
};
