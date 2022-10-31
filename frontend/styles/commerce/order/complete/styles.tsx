import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1250px;
  margin: auto;
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  .grid {
    width: 100%;
    display: grid;
    height: auto;
    margin: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 30px;
  }
  .grid-top {
    h1 {
      font-size: 55px;
      color: ${props => props.theme.color.mainGreen};
      text-align: center;
      font-family: ${props => props.theme.font.TitleFont};
    }
  }

  .grid-middle {
    font-size: 20px;
    font-weight: 500;
    font-family: ${props => props.theme.font.TitleFont};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
      color: #0097e6;
    }
    .button {
      margin-top: 50px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 50px;
      color: ${props => props.theme.color.ivoryHover};
      background-color: ${props => props.theme.color.mainGreen};
      cursor: pointer;
    }
  }
  .carousel-wrap {
    width: 100%;
    height: 500px;
    h1 {
      font-size: 55px;
      color: ${props => props.theme.color.mainGreen};
      text-align: center;
      font-family: ${props => props.theme.font.EnglishFont};
      text-align: center;
    }
  }
`;
