import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GlobalContainer = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
padding-top: 65px;
align-items: center;
background: #f5f5f5; 
@media(max-width: 480px) {
padding-top: 0px;
}
`

export const Logo = styled(Link)`
transition: all 0.3s;
box-sizing: border-box;
cursor: pointer;
position: absolute;
z-index: 99;
left: 22px;
padding: 11.5px;
font-size: 24px;
font-weight: 900;
color: black;
@media(max-width: 800px) {
    left: 42px;
}
`


export const AuthContainer = styled.div`
width: 400px;
min-height: 90vh;
display: flex;
flex-direction: column;
@media(max-width: 410px) {
    width: 390px;
}
@media(max-width: 400px) {
    width: 390px;
}
@media(max-width: 390px) {
    width: 370px;
}
@media(max-width: 370px) {
    width: 350px;
}
@media(max-width: 350px) {
    width: 300px;
}
`

export const Retour = styled(Link)`
cursor: pointer;
padding: 12px 25px;
left: 30px;
border-bottom: 1px solid #f4f4f4;
font-weight: 900;
box-shadow: 0 2px 2px -2px gray;
text-decoration: none;
color: black;
`

export const AuthNavigation = styled.div`
width: 100%;
height: 50px;
align-items: center;
display: flex;
justify-content: space-between;
border-bottom: 1px solid #f4f4f4;
`

export const Links = styled(Link)`
text-decoration: none;
color: gray;
font-size: 15px;
padding: 10px 25px;
:hover{
    color: #f5770b;
}
@media(max-width: 410px) {
    font-size: 13px;
}
@media(max-width: 350px) {
    font-size: 10px;
}
`

export const ContainerInputs = styled.div`
width: 100%;
height: 50vh;
padding: 40px 5px;
display: flex;
flex-direction: column;
`

export const InputsDiv = styled.div`
width: 100%;
height: 40px;
margin-bottom: 20px;
`

export const Button = styled.button`
width: 100%;
height: 40px;
background: #f5770b;
color: #fff;
border: none;
border-radius: 3px;
margin-top: 10px;
padding: 1em;
`

export const FooterLogin = styled.div`
width: 100%;
text-align: center;
margin-top: 30px;
font-size: 15px;
display: flex;
flex-direction: column;
`

export const LinkRec = styled(Link)`
color: #f5770b;
font-size: 15px;
text-decoration: none;
`