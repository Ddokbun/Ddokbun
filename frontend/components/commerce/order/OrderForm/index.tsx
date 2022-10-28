import React, { useState } from "react";
import GetPost from "../../../../common/GetPostsModal";
import { InputRow, Wrapper } from "./styles";

const OrderFormComponent: React.FC = () => {
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);
  const handleSetPostcode = () => {
    setOpenPostcode(val => !val);
  };
  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const [post, setPost] = useState("");
  const [detailPost, setDetailPost] = useState("");
  const [additionalPost, setAdditionalPost] = useState("");

  const onChangeHandler = {
    name: (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    email: (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    post: (e: string) => {
      setPost(e);
    },
    detailPost: (e: string) => {
      setDetailPost(e);
    },
    additionalPost: (e: React.ChangeEvent<HTMLInputElement>) => {
      setAdditionalPost(e.target.value);
    },
  };

  return (
    <Wrapper>
      <form className="grid-form">
        <InputRow maxWidth="300px">
          <label htmlFor="name">이름</label>
          <input id="name" onChange={onChangeHandler.name} value={name} />
        </InputRow>
        <InputRow maxWidth="800px">
          <label htmlFor="name">휴대전화</label>
          <input type="text" />
        </InputRow>
        <InputRow maxWidth={null}>
          <label htmlFor="email">이메일</label>

          <input id="email" onChange={onChangeHandler.email} type="text" />
        </InputRow>
        <InputRow maxWidth={"800px"}>
          <label htmlFor="name">주소</label>
          <div className="address">
            <input
              className="nofocus"
              value={post}
              onClick={handleSetPostcode}
              type="text"
              readOnly
            />
            <input
              value={detailPost}
              className="nofocus"
              type="text"
              readOnly
            />
            <input
              type="text"
              onChange={onChangeHandler.additionalPost}
              value={additionalPost}
              placeholder="상세주소를 입력해주세요"
            />
            <div className="toggle-button" onClick={handleSetPostcode}>
              주소검색
            </div>
            {openPostcode && (
              <GetPost
                getPost={onChangeHandler.post}
                getDetailPost={onChangeHandler.detailPost}
                handleSetPostcode={handleSetPostcode}
              />
            )}
          </div>
        </InputRow>
      </form>
    </Wrapper>
  );
};

export default OrderFormComponent;
