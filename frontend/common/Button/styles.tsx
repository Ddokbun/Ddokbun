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
  h3 {
    font-size: 20px !important;
  }
  gap: 5px;
  svg {
    width: 20px;
    height: 15px;
  }

  @media screen and (${props => props.theme.mobile}) {
    h3 {
      font-size: 30px !important;
    }
    gap: 10px;
    svg {
      width: 25px;
      height: 30px;
    }
  }
`;

export const PriceButtonStyle = styled.div`
  width: 250px;
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
  h3 {
    letter-spacing: 5px;
  }

  @media screen and (${props => props.theme.mobile}) {
    width: 60vw;
    font-size: 36px;
    svg {
      width: 30px;
      height: 40px;
    }
  }
`;

export const BuyListButtonStyle = styled.div`
  width: 100px;
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
    z-index: 2;
    width: 30vw;
  }
`;

export const SubmitButtonStyle = styled.button`
  background-color: ${props => props.theme.color.mainGreen};
  color: #fbfbfb;
  border-radius: 12px;
  padding: 3% 0 3%;
  margin: 1%;
  width: 40%;

  @media screen and (${props => props.theme.mobile}) {
    width: 40%;
    height: 100%;
    padding: 2% 0 2%;
  }
`;

export const CancelButtonStyle = styled.button`
  background-color: ${props => props.theme.color.darkGreen};
  color: #7a887a;
  border-radius: 12px;
  padding: 3% 0 3%;
  margin: 1%;
  width: 40%;

  @media screen and (${props => props.theme.mobile}) {
    width: 40%;
    height: 100%;
    padding: 2% 0 2%;
  }
`;

export const SearchButtonStyle = styled.button`
  background-color: ${props => props.color};
  font-family: ${props => props.theme.font.TitleFont};
  font-size: 20px;
  color: black;
  border-radius: 15px;
  padding: 3% 0 3%;
  margin: 1%;
  width: 150px;
  height: 150px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);

  @media screen and (${props => props.theme.mobile}) {
    width: 90px;
    height: 90px;
    border-radius: 10px;
    font-size: 15px;
    margin: 1%;
    padding: 2% 0 2%;
  }
`;
export const LoginButtonStyle = styled.div`
  width: 350px;
  height: 50px;
  border-radius: 6px;
  display: flex;
  background-color: ${props => props.theme.color.brown};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  gap: 10px;

  font-family: ${props => props.theme.font.TitleFont};

  @media screen and (${props => props.theme.mobile}) {
    width: 350px;
    height: 50px;
    font-size: 15px;
  }
`;

interface StatusButtonType {
  isActive: boolean;
  backgroundColor: string;
  backgroundHover: string;
  textColor: string;
}

export const StatusButtonStyle = styled.li<StatusButtonType>`
  width: 120px;
  height: 60px;
  border-radius: 16px;
  font-size: 16px;
  background-color: ${props =>
    props.isActive ? props.backgroundHover : props.backgroundColor};
  color: ${props => props.textColor};
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    background-color: ${props => props.backgroundHover};
  }

  span {
    margin: 3%;
  }

  @media screen and (${props => props.theme.mobile}) {
    width: 100px;
    font-size: 12px;
  }
`;
