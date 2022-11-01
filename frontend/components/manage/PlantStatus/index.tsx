import React, { useState } from "react";
import { StatusButton } from "../../../common/Button";
import { Wrapper } from "./styles";
import temperature from "../../../assets/icon/temperature.png";
import illuminance from "../../../assets/icon/illuminance.png";
import humidity from "../../../assets/icon/humidity.png";
import soil from "../../../assets/icon/soil.png";
import { Theme } from "../../../styles/theme";

const PlantStatus = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const plantStatus = [
    { statusCode: 0, src: temperature.src, title: "온도" },
    { statusCode: 1, src: illuminance.src, title: "조도" },
    { statusCode: 2, src: humidity.src, title: "습도" },
    { statusCode: 3, src: soil.src, title: "토양습도" },
  ];

  const onClickHandler = (code: number) => {
    console.log("dd");
  };

  const statusButtons = plantStatus.map(plant => {
    return (
      <StatusButton
        status={plant}
        activeIndex={activeIndex}
        key={plant.statusCode}
        setActiveIndex={setActiveIndex}
        onClick={onClickHandler}
        backgroundColor={Theme.color.ivory}
        backgroundHover={Theme.color.ivoryHover}
        textColor={"black"}
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
