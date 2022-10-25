import styled from "styled-components";

export const CardContainer = styled.div`
  border-color: ${props => props.theme.color.brown};
  width: 490px;
  height: 565px;
  border-width: 3px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .btnContainer {
    position: absolute;
    bottom: 18px;
    right: 18px;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.color.mainGreen};
  font-weight: bold;
  font-size: 36px;
`;

export const PlantImage = styled.img`
  width: 320px;
  height: 440px;
  display: flex;
`;
