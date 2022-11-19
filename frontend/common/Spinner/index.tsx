import { FC } from "react";
import { ManageHomeAni } from "../../styles/animations/animation";
import { Wrapper } from "./styles";

interface Props {
  left?: string;
  top?: string;
}

const Spinner: FC<Props> = ({ left, top }) => {
  return (
    <Wrapper
      variants={ManageHomeAni}
      initial="out"
      animate="in"
      exit="out"
      left={left}
      top={top}
    >
      <div style={{ width: "100px" }} className="loader"></div>
    </Wrapper>
  );
};

export default Spinner;
