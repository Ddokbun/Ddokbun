import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  width: 100%;
  background-color: "#fafafa";

  .banner-wrap {
    margin: 0 auto 20px;
    width: 70%;
    max-width: 800px;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-auto-flow: row;

    margin: auto;
    width: 100%;

    // 임시 css 입니다
    .card {
      z-index: -1;
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (${props => props.theme.mobile}) {
    .banner-wrap {
      margin: 0 auto 20px;
      width: 100%;
      max-width: 800px;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: auto;
      grid-auto-flow: row;
      grid-gap: 30px;
      .card {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
`;
