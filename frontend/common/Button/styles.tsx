import styled from "styled-components";

export const Button = styled.button`
  color: ${props => props.color};
  size: 24px;
`;

export const PriceButtonStyle = styled.div`
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
