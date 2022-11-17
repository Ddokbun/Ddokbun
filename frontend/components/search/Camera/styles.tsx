import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  width: 100%;
  background-color: "#fafafa";
  .webcam {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
  }
  .capture-button {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      font-family: ${props => props.theme.font.TitleFont};
      font-size: 20px;
      background-color: #d0d0d0;
      padding: 20px;
      width: 150px;
      border: 1px solid grey;
      border-radius: 5px;
      margin: 10px;
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
    }
  }
`;
