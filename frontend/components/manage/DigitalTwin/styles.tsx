import styled from "styled-components";

export const Wrapper = styled.section`
  width: 40%;
  h2 {
    color: ${props => props.theme.color.mainGreen};
    display: flex;
    align-items: flex-end;
  }

  .twin-background {
    background-color: ${props => props.theme.color.ivory};
    width: 100%;
    height: 500px;
    border-radius: 16px;
  }

  .top-container {
    display: flex;
    justify-content: space-between;
    margin: 1%;
  }

  .icon-container {
    display: flex;
    justify-content: space-between;
  }

  .water {
    cursor: pointer;
  }
  svg {
  }

  @media screen and (${props => props.theme.mobile}) {
    width: 90%;
    margin: auto;
  }
`;
