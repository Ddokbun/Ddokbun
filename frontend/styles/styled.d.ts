import "styled-components";

declare module "styled-components" {
  //DefaultTheme에 사용되는 스타일 타입을 지정합니다
  export interface DefaultTheme {
    mobile: string;
    font: {
      EnglishFont: string;
      TitleFont: string;
      SubTitleFont: string;
      TextFont: string;
    };
    color: {
      mainGreen: string;
      darkGreen: string;
      black: string;
      ivory: string;
      brown: string;
    };
  }
}
