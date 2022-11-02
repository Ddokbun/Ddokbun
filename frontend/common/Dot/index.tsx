import React from "react";
import { Wrapper } from "./styles";
import ServeyDot from "../../assets/icon/dot.svg";

interface Dotprops {
  now: boolean;
}

const Dot: React.FC<Dotprops> = ({ now }) => {
  return (
    <>
      {now ? (
        <Wrapper now={now}>
          <ServeyDot></ServeyDot>
        </Wrapper>
      ) : (
        <Wrapper now={now}>
          <ServeyDot></ServeyDot>
        </Wrapper>
      )}
    </>
  );
};

export default Dot;
