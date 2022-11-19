import { Wrapper } from "./styles";
import { MainPlant } from "../../../../types/commerce/home.interface";
import Image from "next/image";
import Link from "next/link";
import LastProduct from "./LastProduct";

const LastProductCard: React.FC<{ data: MainPlant }> = ({ data }) => {
  return (
    <Wrapper>
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
