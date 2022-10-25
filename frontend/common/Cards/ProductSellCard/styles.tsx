import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-auto-flow: row;
  grid-gap: 0px;
  place-items: end;

  .img-wrap {
    place-self: right;
    padding: 0px 60px 0px 0px;
    width: 100%;
    position: relative;
    max-width: 400px;
    align-items: center;
    text-align: center;
  }

  .text-wrap {
    margin-top: 50px;
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-self: start;

    gap: 3px;

    .text-top {
      h2 {
        padding: 0px;
        font-size: 2.5rem;
        margin: 0;
        color: ${props => props.theme.color.mainGreen};
      }
      h3 {
        font-size: 2rem;
        color: ${props => props.theme.color.ivory};
      }
      div {
        margin-left: 10px;
      }
    }
    & > h3 {
      font-size: 2rem;
    }
  }
`;
