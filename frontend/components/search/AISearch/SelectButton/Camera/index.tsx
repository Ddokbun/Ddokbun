import router from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { fetchItemSeq, postPicture } from "../../../../../apis/search";

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
    router.push(`/commerce/product/${plantSeq}`);
  };

  return (
    <div>
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
      <button onClick={capture}>캡쳐</button>
      <img src={image} />
      <button onClick={postFile}>전송하기</button>
    </div>
  );
};

export default CameraCompo;
