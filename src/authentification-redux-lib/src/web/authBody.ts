import styled, { keyframes, createGlobalStyle } from "../../../theme/styled-components"
import { device } from "../../../theme"

export const animationFade = keyframes`
    0% {
    opacity: 0;
    transform: scale(0.85);
    }
    100% {
    opacity: 1;
    transform: scale(1);
    }
`
export const animationFadeSlide = keyframes`
    0% {
    opacity: 0;
    transform: translateY(7%);
    }
    100% {
    opacity: 1;
    transform: translateY(0);
}
`

export const AuthContent = styled.div`
    flex-wrap: nowrap;
    flex-grow: 1;
    margin-top: 44px;
    animation: ${animationFadeSlide} .4s ease-out both .5s;
    flex-direction: column;
    display: flex;
`
export const AuthContainer = styled.div`
    
`


//==== styles
export const LoginBrandContainer = styled.div`
    margin: 0 auto;
    padding: 44px 0 21px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 auto;
`

export const LoginBrandText = styled.div`
    color: #117a8b;
    font-size : 51px;
    animation : ${animationFade} 2s ease-in-out;

    span{
        color : red;
        font-weight : bold;
        font-size: larger;
    }
`
export const LoginGlobalStyle = createGlobalStyle`
    body { 
        background-repeat: no-repeat;
        background-attachment: fixed;
        -webkit-tap-highlight-color: transparent;
        font: 16px/1.5 'OpenSans','Open Sans',sans-serif;
        font-style: normal;
        color: #fff;

        text-align: center;

        padding: 0 14px;
        margin: 0;
    }

    *, :after, :before {
        box-sizing: border-box;
    }
    
    html, body, main {
        height: 100%;
        padding: 0;
        margin: 0;
    }

    header {
        border-bottom : none !important;
        background : none !important;

        * {background : none !important;}
    }

    .ittyniLogo, .footerWrapper {
        display : none
    }

    main {
        min-height: auto !important;
        div:first-child {
            flex-grow : 1 !important;
        }
        & > div:nth-child(2) {
            display : none;
        }

        ${device.mobile`
            padding-top : 50px !important;
        `}
    }

`