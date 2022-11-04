import { Wrapper } from "./styles";
import Image from "next/image";
import Link from "next/link";
import temp01 from "../../../../assets/commerce/temp-product.jpg";
import { ListObjectItem } from "../../../../../types/commerce/home.interface";

const MainProduct: React.FC<{
  item: ListObjectItem;
}> = ({ item }) => {
  return (
    <Wrapper>
      <div className="subcontent-wrap">
        <Link href={"/commerce/list/초보집사"}>
          <div className="pot-img">
            <div className="pot-img-front">
              <Image
                src={item.imgPath}
                alt="임시 메인 이미지"
                className="banner-img"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="pot-img-back">
              <div className="font-wrap">
                <h2>{item.rankItemName}</h2>
                <h4>{item.rankItemEnName}</h4>
                <h3>
                  ₩{" "}
                  {item.rankItemPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </h3>
                <div className="button">
                  <Link href={"/commerce/list/초보집사"}>
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
