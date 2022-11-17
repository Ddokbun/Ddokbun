import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 5%;
  font-family: ${props => props.theme.font.TextFont2};
  padding-left: 4px;

  .info-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    p {
      font-family: ${props => props.theme.font.TextFont2};
      font-size: 18px;
    }
  }

  .text-info {
    display: flex;
    padding-left: 16px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .info-container {
      width: 50%;
    }
    .image-container {
      width: 50px;
      margin-right: 1%;
    }
    .text-info {
      display: flex;

      p {
        font-size: 12px;
      }
    }
  }
`;
