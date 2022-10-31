import React from "react";
import WeekPicker from "../../../components/manage/add/WeekPicker";
import DigitalTwin from "../../../components/manage/DigitalTwin";
import PlantStatus from "../../../components/manage/PlantStatus";
import { Wrapper } from "../../../styles/manage/[posteq]/styles";

const PlantCare = () => {
  const showDetailHandler = () => {
    return;
  };

  return (
    <Wrapper>
      <DigitalTwin />
      <WeekPicker showDetailHandler={showDetailHandler} />
      <PlantStatus />
    </Wrapper>
  );
};

export default PlantCare;
