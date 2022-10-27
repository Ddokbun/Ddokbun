import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.brown};
  .search {
    width: 100%;
    position: relative;
    display: flex;
  }

  .search-term {
    width: 100%;
    border: 3px solid #b9b9b9;
    border-right: none;
    padding: 5px;
    height: 36px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #000000;
  }

  .search-button {
    width: 40px;
    height: 36px;
    border: 1px solid #676767;
    background: #b9b9b9;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
  }

  .wrap {
    width: 30%;
  }

  @media screen and (${props => props.theme.mobile}) {
  }
`;
