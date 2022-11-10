import { Wrapper } from "./styles";
import Image from "next/image";
import Link from "next/link";
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
                <h2>{item.itemName}</h2>
                <h4>{item.itemEnName}</h4>
                <h3>
                  ₩{" "}
                  {item.itemPrice
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
