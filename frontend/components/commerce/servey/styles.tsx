import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 700px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 100px;

  .dots {
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    padding-bottom: 50px;
  }

  .question {
    padding-left: 10%;
    h1 {
      word-break: keep-all;
      font-size: 40px;
      font-family: ${props => props.theme.font.TextFont1};
    }
  }
`;
