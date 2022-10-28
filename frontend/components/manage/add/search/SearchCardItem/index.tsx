import Image, { StaticImageData } from "next/image";
import React from "react";
import { Wrapper } from "./styles";

const SearchCardItem: React.FC<{
  image: StaticImageData;
  krName: string;
  egName: string;
  plantSeq: string;
}> = ({ image, krName, egName, plantSeq }) => {
  return (
    <Wrapper>
      <div className="image-container">
        <Image
          width={"100%"}
          height={"90%"}
          src={image}
          objectFit="cover"
          className="image"
        />
      </div>
      <div className="info">
        <h2 className="krName">{krName}</h2>
        <p className="egName">{egName}</p>
      </div>
    </Wrapper>
  );
};

export default SearchCardItem;
