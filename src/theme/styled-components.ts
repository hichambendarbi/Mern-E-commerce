import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = (styledComponents as any) as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  color: {
    defaultColor: string;
    primaryColor: string;
    secondaryColor: string;
    thirdColor: string;
    fourthColor: string;
  },
  font :{
    fontSize : number,
    fontFamily : string
  },
  windowHeight : number
}

export default styled;

export { css, createGlobalStyle, keyframes, ThemeProvider };
