import styled from "styled-components";

export const Wrapper = styled.div`
  border-color: ${props => props.theme.color.brown};
  width: 90%;
  /* height: 100%; */
  border-width: 3px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 10%;

  .btnContainer {
    position: absolute;
    bottom: 18px;
    right: 18px;
  }
  .image {
    display: flex;
    justify-content: center;
    border-radius: 16px;
    opacity: 0.9
  }
  h2 {
    color: ${props => props.theme.color.mainGreen};
    font-weight: bold;
    font-size: 28px;
  }

  @media screen and (${props => props.theme.mobile}) {
    width: 90%;
    /* margin: auto; */
    display: flex;

    .btn-container {
      display: flex;
      align-items: flex-end;
      margin: 2%;
    }
  }
`;
