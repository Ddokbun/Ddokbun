import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .delivery-num span {
    font-size: 24px;
    font-family: ${props => props.theme.font.TextFont2};
    font-weight: 500;
  }
  .button-wrap {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;

    gap: 50px;
    button {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0px 10px;
      width: 200px;
      height: 100%;
      background-color: ${props => props.theme.color.ivory};
      border-radius: 10px;

      span {
        letter-spacing: 10px;
        font-size: 24px;
        font-family: ${props => props.theme.font.TitleFont};
      }
      :nth-child(2) {
        background-color: ${props => props.theme.color.ivoryHover};
      }
    }
    .delivery-line {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

interface DeliveryLineProps {
  now: boolean;
}

export const DeliveryLine = styled.div<DeliveryLineProps>`
  width: 100%;
  display: grid;
  grid-template-columns: 50px 300px;
  gap: 40px;
  margin: 20px;
  place-items: center;
  position: relative;
  span {
    color: ${props => (props.now ? props.theme.color.darkGreen : "dark")};
    font-family: ${props =>
      props.now ? props.theme.font.SubTitleFont : props.theme.font.TitleFont};

    font-size: ${props => (props.now ? "24px" : "18px")};
    :nth-child(1) {
      position: relative;
      left: 50px;
      svg {
        fill: ${props => (props.now ? props.theme.color.darkGreen : "gray")};
      }
      scale: ${props => (props.now ? "1.5" : 0.8)};
      height: 20px;
      width: 20px;
    }
    :nth-child(2) {
      text-align: center;
      width: 100%;
    }
  }
`;
