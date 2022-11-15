import React, { useState, Dispatch, SetStateAction } from "react";
import GetPost from "../../../../common/GetPostsModal";
import { Wrapper } from "./styles";

interface OrderProps {
  name: string;

  phoneHead: string;
  phoneBody: string;
  phoneTail: string;

  mailHead: string;
  mailTail: string;
  post: string;
  detailPost: string;
  additionalPost: string;

  nameError: string;
  phoneError: string;
  mailError: string;
  postError: string;

  setName: Dispatch<SetStateAction<string>>;
  setHeadEmail: Dispatch<SetStateAction<string>>;
  setTailEmail: Dispatch<SetStateAction<string>>;
  setPost: Dispatch<SetStateAction<string>>;
  setDetailPost: Dispatch<SetStateAction<string>>;
  setAdditionalPost: Dispatch<SetStateAction<string>>;
  setPhoneHead: Dispatch<SetStateAction<string>>;
  setPhoneBody: Dispatch<SetStateAction<string>>;
  setPhoneTail: Dispatch<SetStateAction<string>>;
}

const OrderFormComponent: React.FC<OrderProps> = props => {
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);
  const handleSetPostcode = () => {
    setOpenPostcode(val => !val);
  };

  /** 폼 인풋 검사 */
  const onChangeHandler = {
    name: (e: React.ChangeEvent<HTMLInputElement>) => {
      props.setName(e.target.value);
    },
    emailHead: (e: React.ChangeEvent<HTMLInputElement>) => {
      props.setHeadEmail(e.target.value);
    },
    emailTail: (e: React.ChangeEvent<HTMLInputElement>) => {
      props.setTailEmail(e.target.value);
    },
    phoneHead: (e: React.ChangeEvent<HTMLInputElement>) => {
      props.setPhoneHead(e.target.value);
    },
    phoneBody: (e: React.ChangeEvent<HTMLInputElement>) => {
      props.setPhoneBody(e.target.value);
    },
    phoneTail: (e: React.ChangeEvent<HTMLInputElement>) => {
      props.setPhoneTail(e.target.value);
    },

    post: (e: string) => {
      console.log("post", e);

      props.setPost(e);
      console.log("props post", props.post);
    },
    detailPost: (e: string) => {
      console.log("detailPost", e);

      props.setDetailPost(e);
    },
    additionalPost: (e: React.ChangeEvent<HTMLInputElement>) => {
      props.setAdditionalPost(e.target.value);
    },
  };

  return (
    <Wrapper>
      <form className="flex-form">
        <div className="name grid">
          <label htmlFor="name ">이름</label>
          <input id="name" onChange={onChangeHandler.name} value={props.name} />
          <p className="error">{props.nameError}</p>
        </div>
        <div className="grid phone">
          <label htmlFor="phone">휴대전화</label>
          <div className="phone-num flex-box">
            <input
              type="text"
              onChange={onChangeHandler.phoneHead}
              value={props.phoneHead}
            />
            <span>-</span>
            <input
              type="text"
              onChange={onChangeHandler.phoneBody}
              value={props.phoneBody}
            />
            <span>-</span>
            <input
              type="text"
              onChange={onChangeHandler.phoneTail}
              value={props.phoneTail}
            />
          </div>
          <p className="error">{props.phoneError}</p>
        </div>

        <div className="grid email">
          <label htmlFor="email">이메일</label>
          <div className="email flex-box">
            <input
              id="email-1"
              onChange={onChangeHandler.emailHead}
              value={props.mailHead}
              type="text"
            />
            <span>@</span>
            <input
              id="email-2"
              onChange={onChangeHandler.emailTail}
              value={props.mailTail}
              type="text"
            />
          </div>
          <p className="error">{props.mailError}</p>
        </div>
        <div className="grid address">
          <label htmlFor="name">주소</label>
          <div className="address-grid">
            <input
              className="nofocus"
              value={props.post}
              onClick={handleSetPostcode}
              type="text"
              readOnly
            />
            <div className="toggle-button" onClick={handleSetPostcode}>
              주소검색
            </div>
            <input
              value={props.detailPost}
              className="nofocus"
              type="text"
              readOnly
            />
            <input
              type="text"
              onChange={onChangeHandler.additionalPost}
              value={props.additionalPost}
              placeholder="상세주소를 입력해주세요"
            />
            {openPostcode && (
              <GetPost
                getPost={onChangeHandler.post}
                getDetailPost={onChangeHandler.detailPost}
                handleSetPostcode={handleSetPostcode}
              />
            )}
            <p className="error">{props.postError}</p>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default OrderFormComponent;
