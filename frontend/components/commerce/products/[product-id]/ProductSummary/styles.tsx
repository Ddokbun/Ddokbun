import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  ul li {
    font-family: ${props => props.theme.font.TextFont2};
    margin: 0px 0px;
    font-size: min(1.5vw, 25px);
    word-break: keep-all;
    font-weight: 500;
    li:nth-child(0) {
      margin-top: 0px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0px 0px 0px 0px;
    ul li {
      font-family: ${props => props.theme.font.TextFont2};
      margin: 10px 0px;
      font-size: 20px;
      font-weight: 500;

      li:nth-child(0) {
        margin-top: 0px;
      }
    }
  }
`;
