import styled from "styled-components";

export const Nav = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.color.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  font-family: ${props => props.theme.font.EnglishFont};
  font-size: 18px;
  .logo {
    order: -1;
    color: ${props => props.theme.color.ivory};
    font-size: 25px;
  }

  .nav_svg {
    display: none;
    cursor: pointer;
  }

  .menu {
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: ${props => props.theme.color.ivory};
      li {
        margin: 20px;
        cursor: pointer;
      }
    }
  }

  @media screen and (${props => props.theme.mobile}) {
    position: sticky;
    padding: 0px 0px;
    .menu {
      display: none;
    }
    .nav_svg {
      display: block;
    }

    .logo {
      font-size: 50px;
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
