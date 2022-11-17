import styled from "styled-components";

export const Wrapper = styled.div`
  .pot-img-front {
    position: relative;
    width: 98%;
    height: 400px;
    margin-right: 10px;
    :hover {
      cursor: pointer;
    }
  }
  .item-name {
    position: absolute;
    width: 100%;
    height: 400px;
    background: linear-gradient(
      21deg,
      rgba(25, 25, 25, 1) 0%,
      rgba(0, 212, 255, 0) 50%
    );
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h2 {
      margin: 20px;
      color: white;
      font-size: 20px;
      font-family: ${props => props.theme.font.TextFont2};
    }
    h3 {
      margin: 20px;
      font-size: 18px;
      color: white;
    }
  }
  @media screen and (max-width: 600px) {
    .pot-img-front {
      position: relative;
      width: 98%;
      height: 300px;
      margin-right: 10px;
    }
    .item-name {
      position: absolute;
      width: 100%;
      height: 300px;
      h2 {
        margin: 7px;
        font-size: 14px;
      }
      h3 {
        margin: 7px;
        font-size: 12px;
      }
    }
  }
`;
