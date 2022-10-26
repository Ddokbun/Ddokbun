import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 50px 0px 0px;
  padding: 0px 100px;
  width: 100%;
  height: 500px;

  h1 {
    font-family: ${props => props.theme.font.TitleFont};
    font-size: 40px;
    margin-bottom: 30px;
  }
  p {
    font-family: ${props => props.theme.font.TextFont2};
    font-size: 20px;
  }

  @media screen and (${props => props.theme.mobile}) {
    margin: 50px 0px 0px;
    padding: 0px;
    width: 100%;
    height: 500px;

    h1 {
      font-family: ${props => props.theme.font.TitleFont};
      font-size: 40px;
      margin-bottom: 30px;
    }
    p {
      font-family: ${props => props.theme.font.TextFont2};
      font-size: 20px;
    }
  }
`;
