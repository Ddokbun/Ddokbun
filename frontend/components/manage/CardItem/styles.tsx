import styled from "styled-components";

export const Wrapper = styled.div`
  border-color: ${props => props.theme.color.brown};
  width: 40%;
  height: 60%;
  border-width: 3px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .btnContainer {
    position: absolute;
    bottom: 18px;
    right: 18px;
  }
  .plantImg {
    width: 320px;
    height: 440px;
    display: flex;
  }
  h2 {
    color: ${props => props.theme.color.mainGreen};
    font-weight: bold;
    font-size: 28px;
  }

  @media screen and (${props => props.theme.mobile}) {
     {
      width: 90%;
      /* margin: auto; */
      display: flex;
    }
    .add-btn-container {
      display: flex;
      align-items: flex-end;
      margin: 2%;
    }
  }
`;
