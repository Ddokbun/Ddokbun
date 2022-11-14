import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

const Camera = () => {
  const [image, setImage] = useState("");
  const webcamRef = useRef(null);
  //   const capture = useCallback(() => {
  //     const imageSrc = webcamRef.current.getScreenshot();
  //     setImage(imageSrc);
  //   }, [webcamRef]);

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
      {/* <button onClick={capture}>캡쳐</button> */}
      <img src={image} />
      <button>전송하기</button>
    </div>
  );
};

export default Camera;
