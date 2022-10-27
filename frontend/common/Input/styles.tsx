import styled from "styled-components";

export const BasicInput = styled.div`
  width: 90%;
  margin-bottom: 10%;
  /* justify-content: space-between;
  display: flex; */

  .label-basic {
    display: flex;
    flex-direction: column;
    font-family: "DM Serif Display", serif;
    color: ${props => props.theme.color.darkGreen};
  }

  .input-basic {
    border: none;
    border-bottom: 1px solid;
    border-bottom-color: ${props => props.theme.color.ivory};
    background-color: #fafafa;
  }

  .input-search {
    background-color: ${props => props.theme.color.ivory};
    border-radius: 16px;
  }

  @media screen and (${props => props.theme.mobile}) {
    input {
      width: 90%;
    }
    label {
      width: 90%;
    }
  }
`;

export const SearchInputWrapper = styled.div`
  width: 90%;
  margin-bottom: 10%;
  position: relative;

  .icon {
    top: 15%;
    position: absolute;
    left: 2%;
  }

  input {
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.color.ivory};
    border-radius: 16px;
    padding-left: 10%;
  }

  @media screen and (${props => props.theme.mobile}) {
    input {
      width: 90%;
      padding: 16px 12px 16px;
      border-radius: 18px;
    }
  }
`;
