import React from "react";
import { Nav } from "./styles";
import Bag from "../../assets/bag.svg";
import LeftArrow from "../../assets/leftArrow.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <Nav>
      <div className="img_wrap">
        <LeftArrow className="left_arrow nav_svg " />
      </div>
      <div className="logo">Ddokbbun</div>
      <div className="img_wrap">
        <Bag className="bag nav_svg" />
      </div>
      <div className="menu">
        <ul>
          <Link href={'manage'}>IoT</Link>
          <li>Shopping</li>
          <li>Search</li>
          <li>MyPage</li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
