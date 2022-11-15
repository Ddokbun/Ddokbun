import styled from "styled-components";

export const Wrapper = styled.div`
  .img-wrap {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 400px;
    z-index: -1;
    margin-bottom: 10px;
  }
  .wrap {
    margin: auto;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: white;
    h2 {
      font-size: 90px;
      text-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
    }
    .button-wrap {
      margin-top: 20px;
      display: flex;
    }
    button {
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
      color: black;
      padding: 10px 20px 10px 20px;
      width: 180px;
      border-radius: 5px;
      background-color: #f7f7f7;
      margin: auto;
    }
  }

  @media screen and (max-width: 600px) {
    .img-wrap {
      height: 400px;
      position: relative;
    }
    .wrap {
      margin: auto;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      h2 {
        padding-top: 30px;
        font-size: 60px;
      }
      .button-wrap {
        display: block;
        margin: auto;
        justify-content: center;
        align-items: center;
      }
      button {
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
        margin-top: 10px;
        color: black;
        width: 100%;
        border-radius: 5px;
        background-color: #f7f7f7;
      }
    }
  }
`;
