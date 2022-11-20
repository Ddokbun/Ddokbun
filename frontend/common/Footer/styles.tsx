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
    p {
      font-size: 18px;
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
  }

  @media screen and (max-width: 600px) {
    .foot {
      padding: 50px 10px;

      gap: 20px;

      display: grid;
      grid-template-columns: 5fr 1fr;
      grid-template-rows: 1fr;
      h1 {
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 20px;
      }

      h2 {
        margin-bottom: 10px;
        font-size: 18px;
      }
      p {
        font-size: 15px;
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
    }
  }
`;
