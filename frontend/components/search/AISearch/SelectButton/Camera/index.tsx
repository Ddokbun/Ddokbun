import React, { useEffect, useRef, useState } from "react";

interface RTCVideoProps {
  mediaStream: MediaStream | undefined;
}

const Camera: React.FC = () => {
  let videoRef = useRef<HTMLVideoElement | any>(null);
  let photoRef = useRef<HTMLVideoElement | any>(null);

  const getUserCamera = () => {
    const devices = navigator.mediaDevices.enumerateDevices();
    console.log("사용가능한 장치", devices);
    navigator.mediaDevices
      .getUserMedia({
        video: {
          facingMode: "environment",
        },
      })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(error => {
        alert("카메라에 접근하지 못하고 있습니다");
        console.log("절대안된다잉", error);
      });
  };

  useEffect(() => {
    getUserCamera();
  }, [videoRef]);

  const takePicture = () => {
    let width = 500;
    let height = 200;
    let photo = photoRef.current;
    let video = videoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, photo.width, photo.height);
  };

  const clearPicture = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
  };
  const postPicture = () => {
    let width = 500;
    let height = 200;
    let photo = photoRef.current;
    console.log("사진 보낼게요", photoRef);
  };

  return (
    <div className="container">
      <video className="container" ref={videoRef}></video>
      <button onClick={takePicture}> Take Picture</button>
      <canvas className="container" ref={photoRef} id="plz"></canvas>
      <a href="" download="plz.png">
        다운로드
      </a>
      <button onClick={clearPicture}> 다시찍기 </button>
      <button onClick={postPicture}>사진 보내기</button>
    </div>
  );
};

export default Camera;
