import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Wrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface PropsType {
  handleSetPostcode: () => void;
  getPost: (e: string) => void;
  getDetailPost: (e: string) => void;
}

interface PostType {
  address: string;
  addressType: string;
  bname: string;
  zonecode: string;
  buildingName: string;
}

const GetPost: React.FC<PropsType> = ({
  handleSetPostcode,
  getPost,
  getDetailPost,
}) => {
  const onCompletePost = (data: PostType) => {
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddr +=
          extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }
    console.log(fullAddr);
    console.log(data.zonecode);

    getPost(data.zonecode);
    getDetailPost(fullAddr);
    handleSetPostcode();
    // setAddress(data.zonecode);
    // setAddressDetail(fullAddress);
    // setIsOpenPost(false);
  };
  const postCodeStyle: React.CSSProperties = {
    display: "block",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "600px",
    height: "500px",
    padding: "0px 10px 10px",
  };

  return (
    <Wrapper>
      <div className="close">
        <FontAwesomeIcon icon={faXmark} onClick={handleSetPostcode} />
      </div>
      <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />
    </Wrapper>
  );
};

export default GetPost;
