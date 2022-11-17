import { Wrapper } from "./styles";
import { MainPlant } from "../../../../types/commerce/home.interface";
import Image from "next/image";
import Link from "next/link";

const LastProductCard: React.FC<{ data: MainPlant }> = ({ data }) => {
  return (
    <Wrapper>
      <h2>Plant collection</h2>
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
          <div className="card-compo"></div>
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
          <div className="card-compo"></div>
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
          <div className="card-compo"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LastProductCard;
