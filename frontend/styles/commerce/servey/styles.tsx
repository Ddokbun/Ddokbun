import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;

  background-color: ${props => props.theme.color.whiteGray};
  .survey {
    display: flex;
    gap: 20px;
    flex-direction: column;
    margin: auto;
    max-width: 1500px;
    padding-top: 50px;

    .dots {
      display: flex;
      justify-content: center;
    }
  }

  .button {
    margin: 30px auto;
    padding: 0px 0px;
    height: 60px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.color.darkGreen};
    color: ${props => props.theme.color.whiteGray};
    font-size: 20px;
    border-radius: 5px;
    transition: all ease-out 0.1s;
    cursor: pointer;
    :hover {
      font-size: 24px;
      background-color: ${props => props.theme.color.mainGreen};
    }
  }

  @media screen and (max-width: 900px) {
    .survey {
      gap: 10px;
      padding-top: 20px;
    }

    .button {
      margin: 30px auto;
      padding: 0px 0px;
      height: 60px;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${props => props.theme.color.darkGreen};
      color: ${props => props.theme.color.whiteGray};
      font-size: 20px;
      border-radius: 5px;
      transition: all ease-out 0.1s;
      cursor: pointer;
      :hover {
        font-size: 24px;
        background-color: ${props => props.theme.color.mainGreen};
      }
    }
  }
`;
