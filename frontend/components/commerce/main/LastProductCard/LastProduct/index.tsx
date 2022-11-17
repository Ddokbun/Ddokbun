import { Wrapper } from "./styles";
import { ListObjectItem } from "../../../../../types/commerce/home.interface";
import Image from "next/image";
import Link from "next/link";

const LastProduct: React.FC<{ data: ListObjectItem }> = ({ data }) => {
  return (
    <Wrapper>
      <div className="img-wrap">
        <div className="card-1">
          <Link href={`commerce/product/${data.itemSeq}`}>
            <div className="img-01">
              <Image src={data.imgPath} layout="fill" objectFit="cover"></Image>
            </div>
          </Link>
          <Link href={`commerce/product/${data.itemSeq}`}>
            <div className="card-compo">
              <h3>{data.itemName}</h3>
              <h4>
                ₩{" "}
                {data.itemPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h4>
            </div>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default LastProduct;
