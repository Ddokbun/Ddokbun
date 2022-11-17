import { Wrapper } from "./styles";
import Image from "next/image";
import Link from "next/link";
import { ListObjectItem } from "../../../../../types/commerce/home.interface";

const SwiperItem: React.FC<{
  item: ListObjectItem;
}> = ({ item }) => {
  console.log(item);
  return (
    <Wrapper>
      <div className="subcontent-wrap">
        <Link href={`/commerce/product/${item.itemSeq}`}>
          <div className="pot-img-front">
            <Image
              src={item.imgPath}
              alt="임시 메인 이미지"
              className="banner-img"
              layout="fill"
              objectFit="cover"
            />
            <div className="item-name">
              <h2>{item.itemName}</h2>
              <h3>
                ₩{" "}
                {item.itemPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};

export default SwiperItem;
