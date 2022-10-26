import styled from "styled-components";

export const Button = styled.button`
  color: ${props => props.color};
  size: 24px;
`;

export const PriceTextButtonStyle = styled.div`
  display: flex;
  color: ${props => props.theme.color.brown};
  cursor: pointer;
  align-items: center;
  gap: 10px;
  svg {
    width: 10px;
    height: 20px;
  }

  @media screen and (${props => props.theme.mobile}) {
    font-size: 36px;
    svg {
      width: 20px;
      height: 30px;
    }
  }
`;

export const PriceButtonStyle = styled.div`
  width: 60vw;
  height: 50px;
  border-radius: 2px;
  display: flex;
  background-color: ${props => props.theme.color.mainGreen};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${props => props.theme.color.ivory};

  gap: 10px;
  svg {
    width: 10px;
    height: 20px;
  }

  @media screen and (${props => props.theme.mobile}) {
    font-size: 36px;
    svg {
      width: 30px;
      height: 40px;
    }
  }
`;

export const BuyListButtonStyle = styled.div`
  width: 80px;
  height: 50px;
  border-radius: 2px;
  display: flex;
  background-color: ${props => props.theme.color.ivory};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  gap: 10px;
  svg {
    stroke-width: 10px;
    fill: ${props => props.theme.color.black};
    width: 40px;
    height: 40px;
  }

  @media screen and (${props => props.theme.mobile}) {
    font-size: 36px;
    width: 30vw;
  }
`;
