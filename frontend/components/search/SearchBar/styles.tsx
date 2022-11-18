import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  .title {
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-family: ${props => props.theme.font.TitleFont};
    font-size: 40px;
    margin: 30px 0px 10px 0px;
  }
  .search {
    display: flex;
    align-items: center;
    width: 60%;
    margin: auto;
    justify-content: center;
  }
  .camera {
    margin-left: 10px;
    padding: 13px;
    border-radius: 10px;
    background-color: ${props => props.theme.color.darkGreen};
    color: ${props => props.theme.color.ivory};
    h3 {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-family: ${props => props.theme.font.TitleFont};
      font-size: 25px;
      margin: 10px 0px 10px 0px;
    }
    .search {
      display: block;
      align-items: flex-start;
      width: 80%;
      margin: auto;
      justify-content: center;
      button {
        width: 100%;
      }
      .camera {
        display: flex;
        width: 100%;
        margin-left: 1px;
        padding: 13px;
        border-radius: 10px;
        background-color: ${props => props.theme.color.darkGreen};
        color: ${props => props.theme.color.ivory};
        justify-content: center;
        align-items: center;
        h3 {
          font-family: ${props => props.theme.font.TextFont2};
          margin-left: 20px;
          display: block;
        }
      }
    }
  }
`;

export const ModalWapper = styled.div`
  padding: 0 30px;
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
  .camera-button {
    background-color: ${props => props.theme.color.ivory};
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
    h2 {
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

  @media screen and (max-width: 600px) {
    h1 {
      font-family: ${props => props.theme.font.TitleFont};
      font-size: 20px;
      margin-bottom: 30px;
    }
    .file-select {
      width: 90px;
      height: 90px;
      border-radius: 10px;
      margin: 1%;
      padding: 2% 0 2%;
      label {
        font-size: 15px;
      }
    }

    .camera-button {
      width: 90px;
      height: 90px;
      border-radius: 10px;
      margin: 1%;
      padding: 2% 0 2%;
      h2 {
        font-size: 15px;
      }
    }
  }
`;
