import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { fetchCartList } from "../../../../apis/commerce";
import { fetchCurrentStatus } from "../../../../apis/manage";
import SimpleGraph from "../../../../common/Graph/SimpleGraph";
import WeekPicker from "../../../../components/manage/add/WeekPicker";
import DigitalTwin from "../../../../components/manage/DigitalTwin";
import LineGraph from "../../../../components/manage/LineGraph";
import PlantStatus from "../../../../components/manage/PlantStatus";
import { wrapper } from "../../../../store";
import { setCartLists } from "../../../../store/commerce";
import { Wrapper } from "../../../../styles/manage/[posteq]/styles";

const PlantCare = () => {
  const showDetailHandler = () => {
    return;
  };

  const { potseq } = useRouter().query;

  useEffect(() => {
    const fetchInitialData = async () => {
      if (typeof potseq === "string") {
        fetchCurrentStatus(potseq);
      }
    };
    fetchInitialData();
  }, [potseq]);

  return (
    <Wrapper>
      <section className="left-section">
        <DigitalTwin />
        <span className="title">모든 환경이 최상이예요!</span>
        <div className="simpleGraph-container">
          <SimpleGraph
            pages="manage"
            temper={"51%"}
            water={"50%"}
            humid={"50%"}
            waterBottle={"20%"}
          />
        </div>
      </section>
      <section>
        <WeekPicker showDetailHandler={showDetailHandler} />
        <PlantStatus />
        <LineGraph />
      </section>
    </Wrapper>
  );
};

export default PlantCare;
