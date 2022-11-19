import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 2px 5px;
  border-radius: 5px;
  color: ${props => props.theme.color.mainGreen};
  background-color: ${props => props.theme.color.ivory};

  p {
    font-weight: 600;
    font-size: 15px;
    font-family: ${props => props.theme.font.TextFont2};
  }

  @media screen and (max-width: 1024px) {
    width: 80px;
    p {
      font-size: 12px;
    }
  }
`;
