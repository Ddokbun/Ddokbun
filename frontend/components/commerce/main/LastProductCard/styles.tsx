import styled from "styled-components";

export const Wrapper = styled.div`
  color: #000000;
  margin-bottom: 50px;
  h2 {
    margin-left: 10px;
    font-size: 50px;
  }
  .img-wrap {
    display: flex;
    width: 80%;
    margin: auto;
    .card-1 {
      width: 100%;
      margin: 0 20px;
      .img-01 {
        position: relative;
        width: 100%;
        height: 300px;
        overflow: hidden;
        margin-right: 10px;
      }
      .img-02 {
        position: relative;
        width: 100%;
        height: 300px;
        overflow: hidden;
      }
      .card-compo {
        width: 100%;
        height: 42px;
        background-color: ${props => props.theme.color.whiteGray};
        display: flex;
        justify-content: space-between;
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
      .img-03 {
        position: relative;
        width: 100%;
        height: 300px;
        overflow: hidden;
      }
    }
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 30px;
    }
    .img-wrap {
      display: block;
      .img-01 {
        position: relative;
        width: 100%;
        height: 400px;
        overflow: hidden;
        margin-bottom: 10px;
      }
      .img-position {
        display: flex;
        width: 100%;
        height: 240px;
      }
      .img-02 {
        position: relative;
        width: 100%;
        height: 200px;
        overflow: hidden;
        margin-right: 5px;
      }
      .img-03 {
        position: relative;
        width: 100%;
        height: 200px;
        overflow: hidden;
        margin-left: 5px;
      }
    }
  }
`;
