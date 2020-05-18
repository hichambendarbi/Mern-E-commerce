import styled from "styled-components";

// Container
export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

//header wrapper
export const Header = styled("div")`
  background : rgb(0, 0, 0);
  color : rgb(250,250,250);
  min-height : 35px; 
  border-bottom : 1px solid black;
`;

// main wrapper
export const BodyContainer = styled("main")`
  display : flex;
  flex-direction : row;
  position : relative;
  min-height : ${()=>window.innerHeight - 35 - 25}px;
`;
// sidebar wrapper
export const Sidebar = styled("div")`
  main-width : 250px;
`;

// body wrapper
export const Body = styled("div")`
  margin-left: 250px;
  width : 100%;
  @media (max-width: 700px) {
    margin-left: auto;
    margin-right: auto;
  }

  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

`;

// footer wrapper
export const Footer = styled("div")`
  background : rgb(0, 0, 0);
  color : rgb(250,250,250);
`;
