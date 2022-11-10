import React, { useEffect, useRef } from "react";

const Camera = () => {
  let videoRef = useRef(null);
  let photoRef = useRef(null);

  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(error => {
        console.log(error);
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
    console.log(ctx);
  };

  const clearPicture = () => {
    let photo = photoRef.current;

    let ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
  };

  return (
    <div className="container">
      <h1>사진을 촬영해주세요</h1>
      <video className="container" ref={videoRef}></video>
      <button onClick={takePicture}> Take Picture</button>
      <canvas className="container" ref={photoRef}></canvas>
      <button onClick={clearPicture}> Clear Picture</button>
    </div>
  );
};

export default Camera;
