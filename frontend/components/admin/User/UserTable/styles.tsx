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
  .button-role {
    width: 130px;
    border: 1px solid grey;
    padding: 10px;
    border-radius: 4px;
    :hover {
      background-color: ${props => props.theme.color.ivory};
    }
  }
`;
