import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  width: 100%;
  background-color: "#fafafa";

  .banner-wrap {
    z-index: 0;
    margin: 0 auto 20px;
    width: 95%;
    max-width: 1240px;
  }

  @media screen and (${props => props.theme.mobile}) {
    .banner-wrap {
      z-index: 1;
      margin: 0 auto 20px;
      width: 100%;
      max-width: 800px;
    }
  }
`;
