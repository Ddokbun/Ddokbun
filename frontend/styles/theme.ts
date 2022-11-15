import { DefaultTheme } from "styled-components";

const deviceSize = {
  mobile: "600px",
  tablet: "1024px",
};

export const Theme: DefaultTheme = {
  mobile: `(max-width:${deviceSize.mobile})`,
  tablet: `(max-width:${deviceSize.tablet})`,

  font: {
    EnglishFont: "DM Serif Display",
    TitleFont: "프리텐다드B",
    SubTitleFont: "김포평화",
    TextFont1: "코트라",
    TextFont2: "프리텐다드R",
  },
  /* font-family: 'Abril Fatface', cursive;
  font-family: 'Black Han Sans', sans-serif;
  font-family: 'Prata', serif; */

  color: {
    red: "#e84118",
    mainGreen: "#43855C",
    darkGreen: "#4E6C50",
    black: "#395144",
    brown: "#AA8B56",
    brownHover: "#CEB282",
    ivory: "#F0EBCE",
    ivoryHover: "#FFFBE7",
    whiteGray: "#f7f7f7",
    darkGray: "#ececec",
  },
};
