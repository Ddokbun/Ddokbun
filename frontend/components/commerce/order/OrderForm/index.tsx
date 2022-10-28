import React from "react";
import GetPost from "../../../../common/GetPostsModal";
import { Wrapper } from "./styles";

const OrderFormComponent: React.FC = () => {
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);
  const handleSetPostcode = () => {
    setOpenPostcode(val => !val);
  };

  return (
    <Wrapper>
      <form className="grid-form">
        <div className="row">
          <label htmlFor="name">이름</label>
          <input type="text" />
        </div>
        <div className="row">
          <label htmlFor="name">이메일</label>
          <input type="text" />
        </div>
        <div className="row">
          <label htmlFor="name">휴대전화</label>
          <input type="text" />
        </div>
        <div className="row">
          <label htmlFor="name">주소</label>
          <div className="address">
            <input type="text" />
            <div onClick={handleSetPostcode}>토글</div>
            {openPostcode && <GetPost handleSetPostcode={handleSetPostcode} />}
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default OrderFormComponent;
