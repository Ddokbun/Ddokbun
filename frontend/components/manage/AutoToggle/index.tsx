import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { changeAutoWateringStatus } from "../../../apis/manage";
import { Wrapper } from "./styles";

const AutoToggle = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const onToggleChangeHandler = () => {
    setIsToggled(prev => !prev);
  };

  const { potseq } = useRouter().query;

  // useEffect(() => {
  //   const changeStatus = async () => {
  //     if (typeof potseq === "string") {
  //       await changeAutoWateringStatus(potseq);
  //     }
  //   };
  //   changeStatus();
  // }, [isToggled, potseq]);

  return (
    <Wrapper toggle={isToggled}>
      <span className="toggle-status">{isToggled ? "auto" : "manual"}</span>
      <button className="toggle" onClick={onToggleChangeHandler}>
        <div className="circle"></div>
      </button>
    </Wrapper>
  );
};

export default AutoToggle;
