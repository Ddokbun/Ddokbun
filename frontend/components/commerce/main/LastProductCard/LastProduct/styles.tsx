import styled from "styled-components";

export const Wrapper = styled.div`
  .img-wrap {
    width: 100%;
    .card-1 {
      width: 40vh;
      margin: 20px;
      .img-01 {
        position: relative;
        width: 100%;
        height: 300px;
        overflow: hidden;
      }
    }
    .card-compo {
      width: 100%;
      height: 42px;
      background-color: ${props => props.theme.color.whiteGray};
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      h3 {
        padding: 8px;
        font-size: 18px;
        font-family: ${props => props.theme.font.TitleFont};
        color: ${props => props.theme.color.black};
      }
      h4 {
        padding: 8px;
        font-size: 17px;
        font-family: ${props => props.theme.font.TitleFont};
        color: #6e6e6e;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .img-wrap {
      .card-1 {
        width: 100%;
        margin: 0px;
        .img-01 {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        .card-compo {
          height: 33px;
          h3 {
            padding: 5px;
            font-size: 15px;
          }
          h4 {
            padding: 5px;
            font-size: 12px;
          }
        }
      }
    }
  }
`;
