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
      width: 30px;
      height: 40px;
    }
  }
`;

export const PriceButtonStyle = styled.div`
  width: 60%;
  height: 40px;
  border-radius: 10px;
  display: flex;
  background-color: ${props => props.theme.color.mainGreen};
  cursor: pointer;
  align-items: center;
  justify-content: center;
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
