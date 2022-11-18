import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.darkGreen};
  color: white;
  padding: 60px;
  margin-bottom: 10px;
  .font-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    h2 {
      font-size: 50px;
      font-family: ${props => props.theme.font.TextFont2};
    }
    margin-bottom: 50px;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button-wrap {
    font-family: ${props => props.theme.font.TextFont2};
    background-color: #d2d2d2;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 250px;
    height: 60px;
    border-radius: 10px;
    box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
    :hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 600px) {
    .font-wrap {
      h2 {
        font-size: 30px;
      }
      margin-bottom: 20px;
    }
    .button-wrap {
      width: 200px;
      height: 50px;
      border-radius: 5px;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
