import React, { useState } from "react";
import { StatusButton } from "../../../common/Button";
import { Wrapper } from "./styles";

const PlantStatus = () => {
  const statusCode = [0, 1, 2, 3];
  const [activeIndex, setActiveIndex] = useState(-1);

  const statusButtons = statusCode.map(code => {
    return (
      <StatusButton
        statusCode={code}
        activeIndex={activeIndex}
        key={code}
        setActiveIndex={setActiveIndex}
      />
    );
  });
  return (
    <Wrapper>
      <ul>{statusButtons}</ul>
    </Wrapper>
  );
};

export default PlantStatus;
