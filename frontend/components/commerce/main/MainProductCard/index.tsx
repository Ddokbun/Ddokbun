import { Wrapper } from "./styles";
import MainProduct from "./MainProduct";
import { MainPlant } from "../../../../types/commerce/home.interface";
import { EleVar } from "../../../../styles/animations/animation";

const MainProductCard: React.FC<{ data: MainPlant }> = ({ data }) => {
  return (
    <Wrapper variants={EleVar}>
      <>
        {data.map(item => {
          return <MainProduct key={item.itemSeq} item={item}></MainProduct>;
        })}
      </>
    </Wrapper>
  );
};

export default MainProductCard;
