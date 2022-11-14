import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;
  margin: 5% auto;
  max-width: 1240px;
  width: 100%;
  text-align: center;
  h1 {
    font-family: ${props => props.theme.font.TitleFont};
    font-size: 40px;
    margin-bottom: 50px;
  }
  .button-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .file-select {
    background-color: ${props => props.theme.color.brown};
    border-radius: 15px;
    padding: 3% 0 3%;
    margin: 1%;
    width: 150px;
    height: 150px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    label {
      font-size: 20px;
      font-family: ${props => props.theme.font.TitleFont};
    }
  }

  .file-select input {
    width: 1px;
    height: 1px;
    padding: 0;

    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  @media screen and (${props => props.theme.mobile}) {
    .file-select {
      width: 90px;
      height: 90px;
      border-radius: 10px;
      margin: 1%;
      padding: 2% 0 2%;
    }
    label {
      font-size: 15px;
    }
  }
`;
