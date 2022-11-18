import styled from "styled-components";

export const Wrapper = styled.div`
  .title {
    margin: 10px;
    font-size: 20px;
  }
  .table {
    margin: 10px;
    width: 100%;
  }
  .table-head {
    margin: 15px 0px 15px 0px;
  }
  th {
    text-align: start;
  }
  .modal-name {
    h2 {
      font-size: 100px;
    }
  }
  .confirm-button {
    padding: 10px;
    border: 1px solid grey;
    width: 140px;
    border-radius: 5px;
    :hover {
      background-color: ${props => props.theme.color.ivoryHover};
    }
  }
`;
