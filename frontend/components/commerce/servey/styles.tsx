import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 80vh;
  min-width: 700px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .question {
    padding-left: 0;
    h1 {
      font-weight: 600;
      opacity: 1.2;
      word-break: keep-all;
      font-size: 40px;
      font-family: ${props => props.theme.font.TextFont1};
    }
  }

  .answers {
    margin-left: auto;
    width: 30%;

    ul li {
      margin: 50px 0px;
      font-family: ${props => props.theme.font.TextFont1};
      font-size: 32px;
    }
  }
  .button-wrap {
    align-self: center;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 50px;
    .button {
      font-family: ${props => props.theme.font.TextFont1};
      letter-spacing: 10px;
      font-size: 20px;
      padding: 10px 100px;
      border-radius: 5px;
      border: 3px solid ${props => props.theme.color.ivory};
    }
  }
`;
