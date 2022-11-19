import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .plant-name {
    font-family: ${props => props.theme.font.SubTitleFont};
    color: ${props => props.theme.color.black};
    font-size: 24px;
    margin-bottom: 8px;
  }

  p {
    font-family: ${props => props.theme.font.TextFont2};
  }

  button,
  a {
    font-family: ${props => props.theme.font.TextFont2};
    color: ${props => props.theme.color.mainGreen};
  }
  .button-container {
    margin-top: 2%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;
