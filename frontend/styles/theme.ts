import { DefaultTheme } from "styled-components";

const deviceSize = {
  mobile: "600px",
};

export const Theme: DefaultTheme = {
  mobile: `(max-width:${deviceSize.mobile})`,

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
    mainGreen: "#43855C",
    darkGreen: "#4E6C50",
    black: "#395144",
    brown: "#AA8B56",
    ivory: "#F0EBCE",
  },
};
