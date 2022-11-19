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
    padding-right: 10px;
  }
  td {
    padding-right: 10px;
  }
  .order {
    width: 150px;
    margin-right: 10px;
  }
  .name {
    width: 90px;
  }
  .phone {
    width: 140px;
  }
  .address {
    width: 320px;
    padding-right: 30px;
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
      background-color: ${props => props.theme.color.darkGray};
    }
  }
`;
