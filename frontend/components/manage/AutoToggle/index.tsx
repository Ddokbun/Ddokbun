import React, { useState } from "react";
import { Wrapper } from "./styles";

const AutoToggle = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const onToggleChangeHandler = () => {
    setIsToggled(prev => !prev);
  };

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
