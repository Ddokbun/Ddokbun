import { Wrapper } from "./styles";
import { MainPlant } from "../../../../types/commerce/home.interface";
import Image from "next/image";
import Link from "next/link";

const LastProductCard: React.FC<{ data: MainPlant }> = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <h2>For Beginner</h2>
      <div className="img-wrap">
        <div className="card-1">
          <Link href={`commerce/product/${data[0].itemSeq}`}>
            <div className="img-01">
              <Image
                src={data[0].imgPath}
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          </Link>
          <div className="card-compo">
            <h3>{data[0].itemName}</h3>
            <h4>
              ₩{" "}
              {data[0].itemPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h4>
          </div>
        </div>
        <div className="card-1">
          <Link href={`commerce/product/${data[1].itemSeq}`}>
            <div className="img-02">
              <Image
                src={data[1].imgPath}
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          </Link>
          <div className="card-compo">
            <h3>{data[1].itemName}</h3>
            <h4>
              ₩{" "}
              {data[1].itemPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h4>
          </div>
        </div>
        <div className="card-1">
          <Link href={`commerce/product/${data[2].itemSeq}`}>
            <div className="img-03">
              <Image
                src={data[2].imgPath}
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          </Link>
          <div className="card-compo">
            <h3>{data[2].itemName}</h3>
            <h4>
              ₩{" "}
              {data[2].itemPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h4>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LastProductCard;
