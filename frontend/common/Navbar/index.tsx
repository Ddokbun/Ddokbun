import React, { useEffect, useRef, useState } from "react";
import { Slider, Wrapper } from "./styles";

import Bag from "../../assets/commerce/bag.svg";
import User from "../../assets/commerce/user.svg";

import Link from "next/link";

import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { NabAni, NabCategoryAni } from "../../styles/animations/animation";

const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const userseq = 1;
  const [slider, setSlider] = useState(false);
  const [shopCate, setShopCate] = useState(false);

  const toggleButton = () => {
    if (ref.current?.classList.contains("open")) {
      ref.current.classList.remove("open");
      setSlider(false);
    } else {
      ref.current?.classList.add("open");
      setSlider(true);
    }
    // ref.current.classList.value.toggle("open");
  };

  const handleShopCate = () => {
    setShopCate(val => !val);
  };

  const route = useRouter();
  useEffect(() => {
    if (ref.current) {
      ref.current.classList.remove("open");
    }
    setSlider(false);
    setShopCate(false);
  }, [route]);

  return (
    <>
      <Wrapper>
        <div className="icon-wrapper">
          <div ref={ref} id="nav-icon2" onClick={toggleButton}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="logo">
          <Link href={"/welcome"}>Ddokbbun</Link>
        </div>

        <div className="img_wrap">
          <Bag />
          <User viewBox="0 0 512 512" />
        </div>
      </Wrapper>

      <Slider variants={NabAni} animate={slider ? "open" : "closed"}>
        <div className="menu">
          <Link href={`/manage/${userseq}`}>
            <div className="title">IoT</div>
          </Link>

          <div className="title" onClick={handleShopCate}>
            Shopping
          </div>

          <motion.div
            className="drop-down"
            variants={NabCategoryAni}
            animate={shopCate ? "open" : "closed"}
          >
            <p>▪️ 초보집사</p>
            <p>▪️ 집꾸미기</p>
            <p>▪️ 공기정화</p>
            <p>▪️ 애완동물</p>
          </motion.div>

          <Link href={"/search"}>
            <div className="title">Search</div>
          </Link>

          <Link href={`/mypage/${userseq}`}>
            <div className="title">MyPage</div>
          </Link>
        </div>
      </Slider>
    </>
  );
};

export default Navbar;
