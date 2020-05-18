import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  margin-top: 70px;
  border-radius: 3px;
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const ContainerNavigation = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    width: 90%;
    align-items: center;
    justify-content: space-around;
    border: 2px solid #117a8b;
    margin-top: 1%;
    
`

export const LinkNavigation = styled.a`
    color: black;
    height: 100%;
    text-align: center;
    font-size: 10px;
    width: inherit;
    transition: .5s;
    cursor: pointer;
    padding: 1em;
    :hover{
        background:#117a8b;
    }
`

export const ContainerSearch = styled.div`
display: flex;
flex-direction: row;
height: 10%;
width: 100%;
align-items: center;
justify-content: space-between;  
margin-top: 1%;
`
 
export const Button = styled.button`
  color: #117a8b;
  font-size: 1em; 
  margin: 1em;
  width: 150px;
  padding: 0.25em 1em;
  border: 2px solid #117a8b;
  border-radius: 3px;
  @media(max-width: 700px){
    padding:0.5em;
    width: 50px;
  }
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: rgb(193,40,40);
  background: #343a40;
  border: none;
  border-radius: 3px;
  width: 25%;
  @media(max-width: 700px){
    width: 45%;
  }
`;

export const InputParams = styled.input`
display: block;
margin:10px 0;
border-radius: 5px;
padding: 5px;
width: 80%;
border: 1px solid gray;
border-radius: 3px;
`

export const ContainerInputsParams = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`

export const ContainerTable = styled.div`
  width: 90%;
}
`

export const TitleTablePararameters = styled.h1`
@media(max-width: 700px){
  font-size: 15px;
}
`

export const SpanTextButtonNouveu = styled.span`
@media(max-width: 700px){
  display: none;
}
`
