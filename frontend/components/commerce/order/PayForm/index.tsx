import React, { useState, Dispatch, SetStateAction } from "react";
import { Wrapper } from "./styles";

interface PayTypeProps {
  setPayType: Dispatch<SetStateAction<number>>;
}

const PayFormComponent: React.FC<PayTypeProps> = ({ setPayType }) => {
  const [nowClick, setNowClick] = useState(0);
  const nowClickHandler = (num: number) => {
    setPayType(num);
    setNowClick(num);
  };

  return (
    <Wrapper>
      {/* <div className="button-wrap">
        <div
          onClick={() => nowClickHandler(1)}
          className={nowClick === 1 ? "button now" : "button"}
        >
          카카오페이
        </div>
        <div
          onClick={() => nowClickHandler(2)}
          className={nowClick === 2 ? "button now" : "button"}
        >
          네이버페이
        </div>
      </div> */}
      <article>
        <p>결제하신 수단으로 취소됩니다.</p>
        <ul>
          <li>
            · 배송은 낮은 확률로 상품이 품절일 가능성이 있습니다. 이에 품절 시
            빠르게 환불처리해드립니다.
          </li>
          <li>
            · 환불 받으신 날짜 기준으로 3~5일(주말 제외) 후 결제대행사에서 직접
            고객님의 계좌로 환불처리됩니다.
          </li>
        </ul>
      </article>
      <div className="span">
        카카오페이는 카카오톡에서 카드를 등록, 간단하게 비밀번호만으로 결제할 수
        있는 빠르고 편리한 모바일 결제 서비스입니다. <br />
      </div>
      <div className="span"> 지원 카드 : 모든 카드 등록/결제 가능</div>
    </Wrapper>
  );
};

export default PayFormComponent;
