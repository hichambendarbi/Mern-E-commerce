import { IThemeInterface, createGlobalStyle, device } from ".";

export const theme : IThemeInterface= {
    color :{
      defaultColor: "#ffffff",
      primaryColor: "#e9e9eb",
      secondaryColor : "#2a2c39",
      thirdColor : "#3a3f48",
      fourthColor : "#423030"
    },
    font : {
      fontSize : 12,
      fontFamily : 'roboto'
    },
    windowHeight : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
};

export const GlobalStyle = createGlobalStyle`
  *, body, root { 
    margin: 0; 
    padding: 0; 
    background : ${({theme})=>theme.color.primaryColor};
  }

  h2,h3 {
    font-size : .9em;
  }
`