import router from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Swal from "sweetalert2";
import { fetchItemSeq, postPicture } from "../../../apis/search";
import Spinner from "../../../common/Spinner";
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
  const [loading, setLoading] = useState(0);

  const webcamRef = useRef<any>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  const postFile = async () => {
    const imagePost = base64toFile(image, "image_file.png");
    const data = postPicture(imagePost);
    console.log("데이터 보내기 성공");
    setLoading(1);
    const res = fetchItemSeq(await data);
    console.log("플랜트 시퀀스 찾는 중");
    const plantSeq = await res;
    setLoading(0);
    if (plantSeq === undefined) {
      Swal.fire({
        title: "해당하는 값을 찾지 못했습니다.",
        text: "다시 검색을 시도해주세요.",
      }).then(() => {
        window.location.replace("/search/camera");
      });
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
              Swal.fire("카메라 기기에 접근할 수 없습니다.")
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
        {loading === 1 ? <Spinner top="50" left="50" /> : ""}
      </div>
    </Wrapper>
  );
};

export default CameraCompo;
