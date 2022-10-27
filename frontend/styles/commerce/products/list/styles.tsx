import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  width: 100%;
  background-color: "#fafafa";

  .banner-wrap {
    margin: 0 auto 20px;
    width: 95%;
    max-width: 1240px;
  }

  @media screen and (${props => props.theme.mobile}) {
    .banner-wrap {
      margin: 0 auto 20px;
      width: 100%;
      max-width: 800px;
    }
  }
`;
