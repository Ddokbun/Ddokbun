import { Wrapper } from "./styles";
import Image, { StaticImageData } from "next/image";
import Starter from "../../assets/commerce/plants/starter.jpg";

interface NavCardProps {
  source: StaticImageData;
  title: string;
  content: string;
}

const NavCard: React.FC<NavCardProps> = ({ source, title, content }) => {
  return (
    <Wrapper>
      <div className="grid-left">
        <Image src={source} objectFit="cover" layout="fill" />
      </div>
      <div className="grid-right">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </Wrapper>
  );
};

export default NavCard;
