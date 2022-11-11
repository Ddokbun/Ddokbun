import React, { useEffect, useRef, useState } from "react";
import { Slider, Wrapper } from "./styles";

import Bag from "../../assets/commerce/bag.svg";
import User from "../../assets/commerce/user.svg";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const userseq = 1;
  const [slider, setSlider] = useState(false);
  const toggleButton = () => {
    if (ref.current) {
      ref.current.classList.toggle("open");
      setSlider(val => !val);
    }
    // ref.current.classList.value.toggle("open");
  };
  const route = useRouter();
  useEffect(() => {
    if (ref.current) {
      ref.current.classList.toggle("open");
    }
    setSlider(false);
  }, [route]);

  const NabAni = {
    open: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        duration: 0.5,
      },
    },
  };

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
          <ul>
            <Link href={`/manage/${userseq}`}>
              <li>
                <div className="title">IoT</div>
              </li>
            </Link>
            <Link href={"/commerce"}>
              <li>
                <div className="title">Shopping</div>
                <div className="drop-down open">
                  <li>초보집사</li>
                  <li>집꾸미기</li>
                  <li>공기정화</li>
                  <li>애완동물</li>
                </div>
              </li>
            </Link>
            <Link href={"/search"}>
              <li>
                <div className="title">Search</div>
              </li>
            </Link>
            <Link href={`/mypage/${userseq}`}>
              <li>
                <div className="title">MyPage</div>
              </li>
            </Link>
          </ul>
        </div>
      </Slider>
    </>
  );
};

export default Navbar;
