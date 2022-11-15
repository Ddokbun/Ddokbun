import styled from "styled-components";

export const Wrapper = styled.div`
  color: #000000;
  margin-bottom: 10px;
  h2 {
    font-size: 50px;
  }
  .img-wrap {
    display: flex;
    .img-01 {
      position: relative;
      width: 60%;
      height: 600px;
      overflow: hidden;
      margin-right: 10px;
    }
    .img-position {
      width: 40%;
      height: 600px;
    }
    .img-02 {
      background-color: red;
      position: relative;
      width: 100%;
      height: 290px;
      overflow: hidden;
      margin-bottom: 10px;
    }
    .img-03 {
      position: relative;
      width: 100%;
      height: 300px;
      overflow: hidden;
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
        background-color: red;
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
