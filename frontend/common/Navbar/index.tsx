import React from "react";
import { Nav } from "./styles";
import Bag from "../../src/assets/bag.svg";
import LeftArrow from "../../src/assets/leftArrow.svg";

const Navbar = () => {
  return (
    <Nav>
      <div className="m_img_wrap">
        <LeftArrow className="m_left_arrow " />
      </div>
      <div className="m_logo">Ddokbbun</div>
      <div className="m_img_wrap">
        <Bag className="m_bag" />
      </div>
    </Nav>
  );
};

export default Navbar;
