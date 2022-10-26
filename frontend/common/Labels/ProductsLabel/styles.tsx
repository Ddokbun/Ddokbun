import styled from "styled-components";

interface Props {}

export const Wrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  padding: 2.5px;
  border-radius: 5px;
  color: ${props => props.theme.color.ivory};
  background-color: ${props => props.theme.color.black};

  p {
    line-height: 17px;
    font-size: 12px;
    font-weight: 300;
    font-family: ${props => props.theme.font.TextFont};
  }
`;
