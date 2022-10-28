import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  .title {
    margin: 30px;
  }
  h2 {
    font-family: ${props => props.theme.font.TitleFont};
    font-size: 40px;
    margin: 30px 0px 10px 0px;
  }
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    .search {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      border: 2px solid #b9b9b9;
      padding: 15px;
      height: 50px;
      border-radius: 5px;
      color: #000000;
      background-color: #d1d1d1;
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    }
    .search-term {
      width: 100%;
      margin-left: 10px;
      background-color: #d1d1d1;
      outline: none;
    }
  }

  @media screen and (${props => props.theme.mobile}) {
    .wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      .search {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        border: 2px solid #b9b9b9;
        padding: 15px;
        height: 50px;
        border-radius: 5px;
        color: #000000;
        background-color: #d1d1d1;
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
      }
      .search-term {
        width: 100%;
        margin-left: 10px;
        background-color: #d1d1d1;
        outline: none;
      }
    }
  }
`;
