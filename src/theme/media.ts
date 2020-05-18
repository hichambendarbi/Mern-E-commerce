import { css } from "."

export const mobile = (args : any, theme? : any) => css`
  @media (max-width: 576px) {
    ${css(args, theme)};
  }
`
export const tablet = (args : any, theme? : any) => css`
  @media (min-width: 576px) and (max-width: 768px) {
    ${css(args, theme)};
  }
`
export const desktop = (args: any, theme? : any) => css`
  @media (min-width: 768px) and (max-width: 992px){
    ${css(args, theme)};
  }
`
export const largeDesktop = (args: any, theme? : any) => css`
  @media (min-width: 992px) and (max-width: 1280px){
    ${css(args, theme)};
  }
`