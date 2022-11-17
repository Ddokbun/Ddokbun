import router from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { fetchItemSeq, postPicture } from "../../../../../apis/search";
import { Wrapper } from "./styles";

const base64toFile = (base_data: any, filename: any) => {
  var arr = base_data.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

const CameraCompo = () => {
  const [image, setImage] = useState("");
  const webcamRef = useRef<any>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  const postFile = async () => {
    const imagePost = base64toFile(image, "image_file.png");
    const data = postPicture(imagePost);
    const res = fetchItemSeq(await data);
    const plantSeq = await res;
    if (plantSeq === undefined) {
      alert("해당하는 값을 찾지 못했습니다.");
      router.push(`/search`);
    } else {
      router.push(`/commerce/product/${plantSeq}`);
    }
  };
  const ResetFile = () => {
    setImage("");
  };

  if (image === "") {
    return (
      <Wrapper>
        <div className="webcam">
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              facingMode: "environment",
            }}
            onUserMediaError={() =>
              window.alert("카메라 기기에 접근할 수 없습니다.")
            }
          />
        </div>
        <div className="capture-button">
          <button onClick={capture}>촬영하기</button>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="webcam">
        <img src={image} />
      </div>
      <div className="capture-button">
        <button onClick={ResetFile}>재촬영하기</button>
        <button onClick={postFile}>전송하기</button>
      </div>
    </Wrapper>
  );
};

export default CameraCompo;
