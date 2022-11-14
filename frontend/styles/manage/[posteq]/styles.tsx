import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 5% auto;
  max-width: 1240px;
  width: 100%;
  background-color: "#fafafa";
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;

  .title {
    color: ${props => props.theme.color.mainGreen};
    margin: 4%;
    display: flex;
    justify-content: center;
    margin-right: 10%;
  }

  .left-section {
    justify-content: center;
  }

  .simpleGraph-container {
    display: flex;
    justify-content: center;
    margin-right: 10%;
  }

  @media screen and (${props => props.theme.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }

  @media screen and (max-width: 600px) {
  }

  .simpleGraph-container {
    margin-right: 0;
  }
`;
