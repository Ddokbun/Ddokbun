import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #ededed;
  position: fixed;
  top: 0;
  height: 100%;
  padding: 40px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  font-family: ${props => props.theme.font.TextFont2};
  .admin-nav {
    display: flex;
    flex-direction: column;
  }
  .flex {
    display: flex;
    align-items: center;
    h2 {
      margin-left: 13px;
      font-size: 20px;
      font-family: ${props => props.theme.font.TextFont2};
    }
    :hover {
      cursor: pointer;
    }
  }
  .title {
    margin-bottom: 40px;
    font-size: 22px;
  }
  .link-list {
    margin-bottom: 15px;
    font-size: 18px;
  }
`;
