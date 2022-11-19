import { Wrapper } from "./styles";
import Image, { StaticImageData } from "next/image";
import Starter from "../../assets/commerce/plants/starter.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

interface NavCardProps {
  source: StaticImageData;
  title: string;
  content: string;
}

const NavCard: React.FC<NavCardProps> = ({ source, title, content }) => {
  const [isHover, setIsHover] = useState(false);
  const mouseInHandler = () => {
    setIsHover(true);
  };
  const mouseOutHandler = () => {
    setIsHover(false);
  };
  interface Imapping {
    Beginer: string;
    "Home Decoration": string;
    "Gardening with Pets": string;
    "Air Purifying Plants": string;
  }

  const mapping: Imapping = {
    Beginer: "/commerce/list/초보집사",
    "Home Decoration": "/commerce/list/집꾸미기",
    "Gardening with Pets": "/commerce/list/반려동물",
    "Air Purifying Plants": "/commerce/list/공기정화",
  };
  // console.log(mapping[title as keyof Imapping]);

  return (
    <Wrapper onMouseOver={mouseInHandler} onMouseOut={mouseOutHandler}>
      <motion.div
        initial={false}
        animate={{ filter: isHover ? "brightness(100%)" : "brightness(70%)" }}
        className="grid-left"
      >
        <div className="img-wrap">
          <Image src={source} objectFit="cover" layout="fill" />
        </div>
      </motion.div>
      <div className="grid-right">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </Wrapper>
  );
};

export default NavCard;
