import React from "react";
import WeekPicker from "../../../components/manage/add/WeekPicker";
import DigitalTwin from "../../../components/manage/DigitalTwin";
import { Wrapper } from "../../../styles/manage/[posteq]/styles";

const PlantCare = () => {
  const showDetailHandler = () => {}

  return (
    <Wrapper>
      <DigitalTwin />
      <WeekPicker showDetailHandler={showDetailHandler} />
    </Wrapper>
  );
};

export default PlantCare;
