import styled from "styled-components";

export const Wrapper = styled.div`
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

export const LeftSection = styled.section`
  justify-content: center;
  background-color: #fffafa;
`;

export const RightSection = styled.section`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #fffafa;
  border-top-left-radius: 16px;
  min-height: 100vh;

  h2 {
    font-family: ${props => props.theme.font.TitleFont};
    color: ${props => props.theme.color.black};
    font-size: 36px;
    padding: 4% 0% 0% 4%;
  }

  h3 {
    font-family: ${props => props.theme.font.SubTitleFont};
    font-size: 24px;
    color: ${props => props.theme.color.black};
    padding-left: 4%;
  }

  .image-container {
    position: absolute;
    right: 5%;
    margin: 1%;
  }

  img {
    border-radius: 16px;
  }

  .line {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 5%;
    padding-bottom: 2%;
    border-bottom: 1px solid #ccc;
  }

  .info {
    width: 60%;
  }

  p {
    font-family: ${props => props.theme.font.TextFont2};
  }

  .logs {
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 16px;
    }
  }
`;
