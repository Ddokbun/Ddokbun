import styled from "styled-components";

export const Wrapper = styled.tr`
  height: 130px;
  border-bottom: 1px solid #ccc;
  .image-container {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 30%;
    margin: 4%;
    align-items: center;
  }
  button {
    font-size: 12px;
    font-family: ${props => props.theme.font.TextFont2};
  }
  button:hover {
    color: ${props => props.theme.color.mainGreen};
  }

  p {
    font-family: ${props => props.theme.font.TextFont2};
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .info > p {
    font-family: ${props => props.theme.font.TextFont2};
  }
  @media screen and (max-width: 600px) {
    p {
      font-size: 12px;
    }
    button {
      font-size: 8px;
    }
    .image-container {
      grid-template-columns: auto 1fr;
      grid-gap: 5%;
      margin: 4%;
      align-items: center;
    }
  }
`;
