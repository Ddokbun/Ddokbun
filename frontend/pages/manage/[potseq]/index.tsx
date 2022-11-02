import React from "react";
import SimpleGraph from "../../../common/Graph/SimpleGraph";
import WeekPicker from "../../../components/manage/add/WeekPicker";
import DigitalTwin from "../../../components/manage/DigitalTwin";
import LineGraph from "../../../components/manage/LineGraph";
import PlantStatus from "../../../components/manage/PlantStatus";
import { Wrapper } from "../../../styles/manage/[posteq]/styles";

const PlantCare = () => {
  const showDetailHandler = () => {
    return;
  };

  return (
    <Wrapper>
      <DigitalTwin />
      <span className="title">모든 환경이 최상이예요!</span>
      <SimpleGraph
        pages="manage"
        temper={"50%"}
        water={"50%"}
        humid={"50%"}
        waterBottle={"50%"}
      />
      <WeekPicker showDetailHandler={showDetailHandler} />
      <PlantStatus />
      <LineGraph />
    </Wrapper>
  );
};

export default PlantCare;
