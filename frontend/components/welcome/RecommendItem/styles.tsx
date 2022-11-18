import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.ivory};
  color: black;
  padding: 20px;
  .subcontent-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 30px;
    .title {
      h2 {
        text-align: center;
        font-size: 70px;
      }
      h3 {
        text-align: center;
        font-size: 25px;
        font-family: ${props => props.theme.font.TitleFont};
        padding-bottom: 60px;
      }
      .img {
        width: 1000px;
        height: 600px;
        position: relative;
        padding-top: 50px;
        padding-bottom: 50px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .subcontent-wrap {
      padding: 20px;
      .title {
        h2 {
          font-size: 30px;
        }
        h3 {
          font-size: 10px;
          padding-bottom: 30px;
        }
        .img {
          width: 400px;
          height: 250px;
          position: relative;
          padding-top: 20px;
          padding-bottom: 20px;
        }
      }
    }
  }
`;
