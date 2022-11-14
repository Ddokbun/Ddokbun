import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;
  padding-bottom: 100px;
  .title {
    margin: 50px 10px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-family: ${props => props.theme.font.TitleFont};
    font-size: 30px;
    margin: 30px 0px 10px 0px;
  }
  .img-wrap {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
  }
`;
