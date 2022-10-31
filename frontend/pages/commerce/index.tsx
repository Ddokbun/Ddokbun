import { NextPage } from "next";
import { Wrapper } from "../../styles/commerce/styles";
import MainProduct from "../../components/commerce/main/MainProduct";

const Commerce: NextPage = () => {
  return (
    <Wrapper>
      <MainProduct />
      <MainProduct />
      <MainProduct />
      <MainProduct />
      <MainProduct />
      <MainProduct />
    </Wrapper>
  );
};

export default Commerce;
