import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 50px 0px 0px;
  padding: 0px 40px;
  width: 100%;
  margin-bottom: 60px;

  h1 {
    font-family: ${props => props.theme.font.TitleFont};
    font-size: 40px;
    margin-bottom: 30px;
  }
  p {
    font-family: ${props => props.theme.font.TextFont2};
    font-size: 20px;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 600px) {
    margin: 50px 0px 0px;
    padding: 0px;
    width: 100%;
    margin-bottom: 100px;

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
