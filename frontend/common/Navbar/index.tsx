import React from "react";
import { Wrapper } from "./styles";

import Bag from "../../assets/commerce/bag.svg";
import LeftArrow from "../../assets/commerce/leftArrow.svg";
import Link from "next/link";

const Navbar = () => {
  const userseq = 1;

  return (
    <Wrapper>
      <div className="img_wrap">
        <LeftArrow className="left_arrow nav_svg " />
      </div>
      <Link href={"/welcome"}>
        <div className="logo">Ddokbbun</div>
      </Link>
      <div className="img_wrap">
        <Bag className="bag nav_svg" />
      </div>
      <div className="menu">
        <ul>
          <Link href={`/manage/${userseq}`}>IoT</Link>
          <Link href={"/commerce"}>
            <li>Shopping</li>
          </Link>
          <Link href={"/search"}>Search</Link>
          <Link href={`/mypage/${userseq}`}>
            <li>MyPage</li>
          </Link>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;
