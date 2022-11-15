import { Wrapper } from "./styles";
import { MainPlant } from "../../../../types/commerce/home.interface";
import Image from "next/image";

const LastProductCard: React.FC<{ data: MainPlant }> = ({ data }) => {
  console.log("여기 데이터는", data);
  return (
    <Wrapper>
      <h2>Flowers collection</h2>
      <div className="img-wrap">
        <div className="img-01">
          <Image src={data[0].imgPath} layout="fill" objectFit="cover"></Image>
        </div>
        <div className="img-position">
          <div className="img-02">
            <Image
              src={data[1].imgPath}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className="img-03">
            <Image
              src={data[2].imgPath}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LastProductCard;
