import { Wrapper } from "./styles";
import { MainPlant } from "../../../../types/commerce/home.interface";
import Image from "next/image";
import Link from "next/link";
import LastProduct from "./LastProduct";
import { EleVar } from "../../../../styles/animations/animation";

const LastProductCard: React.FC<{ data: MainPlant }> = ({ data }) => {
  return (
    <Wrapper variants={EleVar}>
      <h2>Editor's Pick</h2>
      <div className="item-wrapper">
        {data.map(item => {
          return <LastProduct key={item.itemSeq} data={item}></LastProduct>;
        })}
      </div>
    </Wrapper>
  );
};

export default LastProductCard;
