import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.darkGreen};
  width: 35%;
  height: 100%;
  border-radius: 16px;
  margin: 3%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 100%);

  .image-container {
    border-radius: 8px;
    margin: 5% 0 0 5%;
  }
  .image {
    border-radius: 5%;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .info > .krName {
    font-weight: bold;
  }

  .info > .egName {
    color: ${props => props.theme.color.ivory};
  }

  @media screen and (${props => props.theme.mobile}) {
    width: 90%;
    height: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 100px);

    .image-container {
      border-radius: 8px;
      margin: 5% 0 0 5%;
    }
    .image {
      border-radius: 5%;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .info > .krName {
      font-weight: bold;
    }

    .info > .egName {
      color: ${props => props.theme.color.ivory};
    }
  }
`;
