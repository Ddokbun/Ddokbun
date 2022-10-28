import React, { useState } from "react";
import { Wrapper } from "./styles";

const PayFormComponent: React.FC = () => {
  const [nowClick, setNowClick] = useState(0);
  const nowClickHandler = (num: number) => {
    setNowClick(num);
  };
  return (
    <Wrapper>
      <div className="button-wrap">
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
      </div>
      <article>
        <p>결제하신 수단으로 취소됩니다.</p>
        <ul>
          <li>
            · 입점업체 배송은 낮은 확률로 상품이 품절일 가능성이 있습니다. 이에
            품절 시 빠르게 환불 처리해드립니다.
          </li>
          <li>
            · 현금 환불의 경우, 예금정보가 일치해야 환불 처리가 가능합니다.
            은행명, 계좌번호, 예금주명을 정확히 기재 부탁드립니다.
          </li>
          <li>
            · 환불 받으신 날짜 기준으로 3~5일(주말 제외) 후 결제대행사에서 직접
            고객님의 계좌로 환불 처리됩니다.
          </li>
        </ul>
      </article>
      <div className="button-wrap flex">
        <div className="button">PAYMENT</div>
      </div>
    </Wrapper>
  );
};

export default PayFormComponent;
