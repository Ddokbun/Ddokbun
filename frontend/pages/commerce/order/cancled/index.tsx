import { deleteCookie } from "cookies-next";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 355px);
  .contents-box {
    padding: 50px;
    margin: auto;
    width: 100%;
    max-width: 1250px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 30px;
      font-family: ${props => props.theme.font.TextFont2};
      margin: 50px 0px;
    }

    a {
      font-size: 20px;

      font-family: ${props => props.theme.font.TextFont2};
      color: ${props => props.theme.color.darkGreen};
      margin-bottom: 50px;
      text-decoration-line: underline;
    }
  }
`;

const Cancled: NextPage = () => {
  useEffect(() => {
    deleteCookie("tid");
    deleteCookie("orderSeq");
  }, []);
  return (
    <Wrapper>
      <div className="contents-box">
        <h1>결제가 취소됐습니다.</h1>

        <Link href={"/commerce/order/order-form"}>
          <a>다시 결제를 시도해 주세요</a>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Cancled;
