import Image from "next/image";
import Logo from "../../assets/logo.png";
import { Wrapper } from "./styles";

const Spinner = () => {
  return (
    <Wrapper>
      <div style={{ width: "100px" }} className="loader"></div>
    </Wrapper>
  );
};

export default Spinner;
