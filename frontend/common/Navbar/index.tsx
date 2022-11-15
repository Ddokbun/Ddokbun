import React, { useEffect, useRef, useState } from "react";
import { ShopHoverNav, Slider, Wrapper } from "./styles";

import Bag from "../../assets/commerce/bag.svg";
import User from "../../assets/commerce/user.svg";
import Search from "../../assets/icon/search.svg";

import Image from "next/image";
import Link from "next/link";
import Plant1 from "../../assets/commerce/plants/plant1.jpg";

import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { NabAni, NabCategoryAni } from "../../styles/animations/animation";
import NavCard from "../NavCard";
import Starter from "../../assets/commerce/plants/starter.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const userseq = useSelector((state: RootState) => state.authSlice.userSeq);
  console.log(userseq, "adfasdfasdfasdf");

  const [slider, setSlider] = useState(false);
  const [shopCate, setShopCate] = useState(false);
  const [shopHover, setShopHover] = useState(false);

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

  const handleShopEnter = () => {
    setShopHover(true);
  };
  const handleShopLeave = () => {
    setShopHover(false);
  };

  const route = useRouter();
  useEffect(() => {
    if (ref.current) {
      ref.current.classList.remove("open");
    }
    if (slider === true) {
      setSlider(false);
      setShopCate(false);
    }
  }, [route]);

  const shopHoverAni = {
    hover: {
      opacity: 1,
    },
  };
  return (
    <>
      <Wrapper>
        <div className="wrapper">
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
          <div className="menu-wrap">
            <Link href={`/manage/${userseq}`}>
              <a>IoT</a>
            </Link>
            <Link href={"/commerce"}>
              <a onMouseEnter={handleShopEnter} onMouseLeave={handleShopLeave}>
                Shopping ▾{" "}
              </a>
            </Link>
          </div>

          <div className="img_wrap">
            <Search />
            <Bag />
            <Link href={`/mypage/${userseq}`}>
              <User viewBox="0 0 512 512" />
            </Link>
          </div>
        </div>
        <ShopHoverNav
          variants={shopHoverAni}
          animate={{ display: shopHover ? "block" : "none" }}
          onMouseEnter={handleShopEnter}
          onMouseLeave={handleShopLeave}
        >
          <div className="grid-wrapper">
            <div className="gird-left">
              <Image src={Plant1} layout="fill" objectFit="cover" />
              <h3>Smart Plant Pot</h3>
              <p>
                당신의 가드닝을 도와줄 <br />
                스마트 화분을 만나보세요
              </p>
              <div className="button">
                <a>보러가기</a>
              </div>
            </div>
            <div className="grid-col">
              <Link href={"/commerce/list/초보집사"}>
                <NavCard
                  source={Starter}
                  title="Beginer"
                  content="초보 집사들을 위한 최선의 선택"
                />
              </Link>
            </div>
            <div className="grid-col">
              <NavCard
                source={Starter}
                title="Beginer"
                content="초보 집사들을 위한 최선의 선택"
              />
            </div>
            <div className="grid-col">
              <NavCard
                source={Starter}
                title="Beginer"
                content="초보 집사들을 위한 최선의 선택"
              />
            </div>
            <div className="grid-col">
              <NavCard
                source={Starter}
                title="Beginer"
                content="초보 집사들을 위한 최선의 선택"
              />
            </div>
          </div>
        </ShopHoverNav>
      </Wrapper>

      <Slider
        initial={false}
        variants={NabAni}
        animate={slider ? "open" : "closed"}
      >
        {/* <Slider> */}
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
