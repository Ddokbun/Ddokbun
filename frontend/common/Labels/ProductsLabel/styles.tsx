import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2px 5px;
  border-radius: 5px;
  color: ${props => props.theme.color.ivory};
  background-color: ${props => props.theme.color.black};

  p {
    font-size: 10px;
    font-family: ${props => props.theme.font.TextFont2};
  }
`;
