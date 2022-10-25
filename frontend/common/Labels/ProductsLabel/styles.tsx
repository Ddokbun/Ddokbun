import styled from "styled-components";

interface Props {}

export const Label = styled.div<Props>`
  display: flex;
  align-items: center;

  padding: 2.5px;
  border-radius: 5px;
  color: ${props => props.theme.color.ivory};
  background-color: ${props => props.theme.color.black};
  p {
    font-size: 12px;
  }
`;
