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
    }
    .camera {
      display: flex;
      margin-left: 1px;
      padding: 13px;
      border-radius: 10px;
      background-color: ${props => props.theme.color.darkGreen};
      color: ${props => props.theme.color.ivory};
      justify-content: center;
      align-items: center;
      h3 {
        margin-left: 20px;
        display: block;
      }
    }
  }
`;
