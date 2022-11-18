import { Wrapper } from "./styles";
import Image, { StaticImageData } from "next/image";
import Starter from "../../assets/commerce/plants/starter.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

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
