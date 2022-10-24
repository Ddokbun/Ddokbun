import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${props => props.theme.color.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;

  .logo {
    order: -1;
    color: ${props => props.theme.color.ivory};
    font-size: 20px;
  }

  svg {
    display: none;
  }

  .menu {
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: ${props => props.theme.color.ivory};
      li {
        margin: 5px;
        cursor: pointer;
      }
    }
  }

  @media screen and (${props => props.theme.mobile}) {
    padding: 0px 0px;
    .menu {
      display: none;
    }
    svg {
      display: block;
    }

    .logo {
      font-size: 20px;
      order: 0;
    }

    .img_wrap {
      height: 100%;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .bag {
      width: 30px;

      fill: ${props => props.theme.color.ivory};
      stroke: ${props => props.theme.color.ivory};
    }

    .left_arrow {
      width: 30px;
      fill: ${props => props.theme.color.ivory};
    }
  }
`;
