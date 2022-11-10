import { Wrapper } from "./styles";
import MainProduct from "./MainProduct";
import { MainPlant } from "../../../../types/commerce/home.interface";

const MainProductCard: React.FC<{ data: MainPlant }> = ({ data }) => {
  return (
    <Wrapper>
      <>
        {data.map(item => {
          return <MainProduct key={item.itemSeq} item={item}></MainProduct>;
        })}
      </>
    </Wrapper>
  );
};

export default MainProductCard;
