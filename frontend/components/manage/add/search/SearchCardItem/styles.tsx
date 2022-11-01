import styled from "styled-components";

export const Wrapper = styled.div<{ isDelivery: boolean }>`
  background-color: ${props => props.theme.color.darkGreen};
  width: ${props => props.isDelivery ? '90%' : '35%'};
  height: ${props => props.isDelivery ? '80%' : '100%'};
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
    color: ${props => props.theme.color.brown};
  }

  .delivery {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 0% 20% 10% 0%;
    color: ${props => props.theme.color.ivory};
    font-size: 12px;
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
