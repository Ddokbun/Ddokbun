import Image from "next/image";
import Logo from "../../assets/logo.png";
import { ManageHomeAni } from "../../styles/animations/animation";
import { Wrapper } from "./styles";

const Spinner = () => {
  return (
    <Wrapper variants={ManageHomeAni} initial="out" animate="in" exit="out">
      <div style={{ width: "100px" }} className="loader"></div>
    </Wrapper>
  );
};

export default Spinner;
