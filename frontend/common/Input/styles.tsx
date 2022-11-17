import styled from "styled-components";

export const BasicInput = styled.div`
  width: 90%;
  margin-bottom: 10%;
  /* justify-content: space-between;
  display: flex; */
  position: relative;
  font-family: "DM Serif Display", serif;
  color: ${props => props.theme.color.darkGreen};
  font-family: ${props => props.theme.font.TextFont2};

  .icon {
    top: 10%;
    position: absolute;
    right: 2%;
    width: 30px;
    height: 30px;
    z-index: 2;
  }

  .label-basic {
    display: flex;
    flex-direction: column;
    font-size: 24px;
  }

  .input-basic {
    border: none;
    border-bottom: 1px solid;
    border-bottom-color: ${props => props.theme.color.ivory};
    background-color: #fafafa;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }
  .input-search {
    background-color: ${props => props.theme.color.ivory};
    border-radius: 16px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    .label-basic {
      font-size: 18px;
      margin: 0% 5%;
    }
    .input-basic {
      font-size: 14px;
    }
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 60px;
  position: relative;
  font-family: "DM Serif Display", serif;
  background-color: #c9c9c9;
  border-radius: 8px;
  border: 1px solid grey;
  color: ${props => props.theme.color.darkGreen};
  font-family: ${props => props.theme.font.TextFont2};
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 13px;
  }

  input {
    margin-left: 13px;
    width: 92%;
    height: 100%;
    border-radius: 16px;
    outline: none;
    background-color: #c9c9c9;
    ::placeholder {
      color: ${props => props.theme.color.darkGreen};
    }
    :hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    margin-bottom: 10%;

    input {
      padding: 16px 12px 16px 10%;
      border-radius: 18px;
    }

    .pad {
      padding-left: 10%;
    }
  }
`;

export const DateInputStyle = styled.div`
  width: 90%;
  margin-bottom: 10%;
  /* justify-content: space-between;
    display: flex; */
  position: relative;
  font-family: "DM Serif Display", serif;
  color: ${props => props.theme.color.darkGreen};
  font-family: ${props => props.theme.font.TextFont2};

  .icon {
  }
  .label-basic {
    display: flex;
    flex-direction: column;
    font-size: 24px;
  }

  .icon {
    top: 10%;
    position: absolute;
    right: 2%;
    width: 30px;
    height: 30px;
    /* z-index: -1; */
  }

  input:focus {
    outline: none;
  }

  @media screen and (max-width: 600px) {
    margin: 5%;
    .label-basic {
      font-size: 18px;
    }
    .input-basic {
      font-size: 14px;
    }
  }
`;
