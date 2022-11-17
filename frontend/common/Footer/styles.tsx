import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #f5f6fa;

  .foot {
    padding: 50px 50px;
    margin: auto;
    height: 100%;
    gap: 50px;
    max-width: 1250px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    h1 {
      font-weight: 600;
      font-size: 25px;
      margin-bottom: 20px;
    }

    h2 {
      margin-bottom: 5px;
      font-size: 20px;
    }
    .grid-left {
      opacity: 0.6;

      color: ${props => props.theme.color.black};
      display: flex;
      flex-direction: column;
      justify-content: center;
      * {
        font-family: ${props => props.theme.font.TextFont2};
      }
    }

    .grid-right {
      position: relative;
      .img-wrap {
        top: 50%;
        left: 100px;
        transform: translate(-50%, -50%);
        position: relative;
        height: 300px;
        width: 300px;
      }
      .text-wrap {
        position: absolute;
        font-family: ${props => props.theme.font.TextFont2};
        color: ${props => props.theme.color.black};
        wrap: nowrap;
        font-size: 30px;
        font-weight: 600;
        opacity: 0.6;
        transform: translate(0%, -50%);
        top: 50%;
        left: 150px;
      }
    }
  }
`;
