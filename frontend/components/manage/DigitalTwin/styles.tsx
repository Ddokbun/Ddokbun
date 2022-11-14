import styled from "styled-components";

interface Props {
  light: number;
}

export const Wrapper = styled.div<Props>`
  width: 90%;
  h2 {
    color: ${props => props.theme.color.mainGreen};
    display: flex;
    align-items: flex-end;
    font-size: 36px;
    font-weight: bold;
    font-family: ${props => props.theme.font.TextFont2};
  }

  .twin-background {
    width: 100%;
    height: 500px;
    border-radius: 16px;
    background-color: ${props => props.theme.color.ivory};
    filter: brightness(${props => props.light}%);
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

  @media screen and (${props => props.theme.tablet}) {
    width: 100%;
  }

  @media screen and (${props => props.theme.mobile}) {
    width: 90%;
    margin: auto;
    min-width: 400px;

    h2 {
      font-size: 16px;
    }
  }
`;
