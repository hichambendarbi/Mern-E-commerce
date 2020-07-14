import styled from 'styled-components'

export const Header = styled.div`
display: block;
margin: 0 auto;
width: 100%;
max-width: 100%;
background-color: #fff;
position: fixed;
height: 60px!important;
overflow: hidden;
z-index: 10;
top: 0;
box-shadow: 0 0.5px 4px -2px #928f8f;
@media(max-width: 920px) {
  height: 100px!important;
}
@media(max-width: 500px) {
  height: 100px!important;
}
`

export const SidbarToggle = styled.label`
transition: all 0.3s;
box-sizing: border-box;
cursor: pointer;
position: absolute;
z-index: 99;
height: 100%;
width: 100%;
top: 24px;
left: 28px;
left: 22px;
height: 22px;
width: 22px;
display: none;
@media(max-width: 800px) {
  display: block;
}
`

export const SidbarMenu = styled.div`
height: 100%;
position: fixed;
left: 0;
width: 250px;
margin-top: 60px;
transform: translateX(-250px);
transition: transform 250ms ease-in-out;
background: #343a40;
@media(max-width: 500px) {
  margin-top: 100px;
}
`

export const Ul = styled.ul`
margin:0;
padding:0; 
border-bottom: 1px solid #33333329;
`

export const Button = styled.button`
top: -5px;
line-height: 1;
font-family: Lato,sans-serif;
overflow: hidden;
/* right: 100px; */
position: relative; 
font-size: 20px;
padding: 6px 13px 8.034px 39.034px;
border: none;
background: transparent;
cursor: pointer;
@media(max-width: 500px){
  padding: 30px 13px 8.034px 39.034px;
  right: -20px;
}
`

export const Span = styled.span`
font-size: 16px;
@media(max-width: 500px){
  display: none;
}
`

export const ContainerSearch = styled.div`
position: ${props => props.position};
left: 47%;
width: 400px;
height: 35px;
font-weight: 100;
top: 10px;
color: black;
display: flex;
flex-direction: row;
align-items: center;
border: 1px solid #e6e4e4;
border-radius: 3px;
@media(max-width: 1400px) {
  left: 38%;
}
@media(max-width: 1340px) {
  left: 36%;
}
@media(max-width: 1300px) {
  left: 30%;
}
@media(max-width: 1200px) {
  left: 28%;
}
@media(max-width: 1150px) {
  left: 25%;
}
@media(max-width: 1100px) {
  left: 20%;
  width: 400px;
}
@media(max-width: 990px) {
  width: 350px;
}
@media(max-width: 920px) {
  position: absolute;
  left: 4%;
  width: 92%;
  height: 38px;
  top: 55px;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0.5px solid #e6e4e4;
  border-radius: 15px;
}

`

export const SearchIconDiv = styled.div`
width: 10%;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
`

export const InputSearchDiv = styled.div`
width: 80%;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
`

export const InputClearDiv = styled.div`
width: 10%;
height: 38px;
display: flex;
justify-content: center;
align-items: center;
`

export const InputSearch = styled.input`
width: 100%;
height: 36px;
background: none;
border: none;
`

export const ButtonCancel = styled.button`
border: none;
background: transparent;
height: 100%;
width: 100%;
@media(max-width: 920px) {
  display: none;
}
@media(max-width: 500px) {
  display: none;
}
`

export const ButtonSearch = styled.button`
position: absolute;
left: 100%;
width: 120px;
height: 35px;
font-weight: 100;
color: #fff;
display: flex;
flex-direction: row;
align-items: center;
border-radius: 3px;
margin-left: 5px;
padding: 10px 13px;
border: none;
border-radius: 3px;
background: #F68B1E;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
cursor: pointer;
:hover{
  background: #ca7218;
}
@media(max-width: 920px) {
  display: none;
}
@media(max-width: 700px) {
 display: none;
}
`

export const ButtonSearchMobile = styled.button`
border: none;
background: transparent;
height: 100%;
width: 100%;
display: none;
align-items: center;
justify-content: center;
@media(max-width: 920px) {
  display: inherit;
}
@media(max-width: 500px) {
  display: inherit;
}
`

export const Menu = styled.div`
    position: fixed;
    left: 77%;
    width: 200px;
    z-index: auto;
    height: 200px;
    top: 50px;
  
    display: flex;
    flex-direction: row;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #928f8f;
    border-radius: 3px;
    background: blue;
` 

// Build style Accueil

export const ContainerAcceuil = styled.div`
max-width: 1184px;
height: 45vh;
// padding-left: 28px;
// padding-right: 28px;
display: flex;
justify-content: space-between;
margin-top: 12px;
@media(max-width: 500px){
  margin-top: 110px;
  padding-left: 20px;
  padding-right: 20px;
}
@media(max-width: 930px){
  margin-top: 52px;
}
@media(max-width: 700px){
  height: 200px;
}
@media(max-width: 481px){
  margin-top: 110px;
}

`

export const MenuAcceuil = styled.div`
width: 18%;
height: 100%;
display: flex;
background: #fff;
border-radius: 5px;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);
@media(max-width: 800px) {
  display: none;
}
`

export const CarouselAcceuil = styled.div`
width: 60%;
height: 100%;
display: flex;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);
@media(max-width: 800px) {
  width: 100%;
}
`

export const OptionAcceuil = styled.div`
width: 18%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
@media(max-width: 800px) {
  display: none;
}
`

export const LivraisonOption = styled.div`
width: 100%;
height: 46%;
display: flex;
`

export const UlCategorie = styled.ul`
width: 100%;
height: 100%;
`

export const LiCategorie = styled.li`
width: 100%;
height: 10%;
display: flex;
align-items: center;
color: black;
cursor: pointer;
:hover{
  color: #ff8100;
}

`

export const LinkCategorie = styled.a`

font-size: 12px; 

@media(max-width: 1050px){
  font-size: 8px;
}
`

export const IconCategorie = styled.div`
width: 30px;
border: 1px solid black;
border-radius: 25%;
height: 80%;
margin-right: 10px;
margin-left: 2px;
`

export const Livraison = styled.div`
width: 100%;
height: 48%;
background: #ffff;
display: flex;
border-radius: 5px;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);
`

export const Covid = styled.div`
width: 100%;
height: 48%;
background: #fff;
display: flex;
border-radius: 5px;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);
`

export const ImageCovid = styled.img`
width: 100%;
height: 100%;
border-radius: 5px;
background: #ffff;
`

export const UlLiv = styled.ul`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
border-radius: 5px;
justify-content: space-evenly;
`
export const LiLiv = styled.li`
Width: 100%;
height: 25%;
display: flex;
align-items: center;
`

export const Alivraison = styled.a`
color: black;
font-weight: 600;
font-size: 12px;
`

export const Contn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const SousSlid = styled.div`
    max-width: 1184px;
    width: 100%;
    left: 28px;
    padding: 0;
    border-radius: 5px;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    height: 60px;
    justify-content: space-between;
    @media(max-width: 500px){
      margin-top: 12px;
    }
`
export const ContentS = styled.div`
    width: 23%;
    display: flex;
    height: 100%;
    background: #fff;
    border-radius: 5px;
    align-items: center;
    font-size: 1rem;
    font-weight: 500px;
    letter-spacing: 2px;
    font-weight: 600;
    @media(max-width: 500px){
      font-size: 10px;
      flex-direction: column;
      width: 25%;
      border-radius: 0px;
      background: none;
      font-weight: 400;
      letter-spacing: 0px;
    }
`

export const DivIc = styled.div`
width: 45px;
height: 45px;
margin-left: 20px;
margin-right: 10px;
border-radius: 50%;
background: ${props => props.background};
padding: 10px;
@media(max-width: 500px){
  margin-bottom: 2px;
}
`

export const PlusDemand = styled.div`
margin-top: 12px;
padding: 0 20px;
max-width: 1184px;
`

export const ContPlusDemn = styled.div`
display: flex;
background: #FFF;
border-radius: 5px;
width: 100%;
flex-direction: row;
@media(max-width: 700px){
  flex-direction: column;
}
`

export const HeaderPDemand = styled.div`
    width: 100%;
    height: 25px;
    padding: 20px 5px;
    border-radius: 5px;
    display: flex;
    align-items: center; 
    font-weight: 700;
    font-size: 12px;
    justify-content: space-between;
`

export const Contai1 = styled.div`
width: 100%;
display: flex;
margin-bottom: 4px;
justify-content: space-between;
`

export const Card = styled.a`
width: 20.5%;
height: 100%:
display: flex;
padding: 8px 8px;
border-radius: 5px;
cursor: pointer;
:hover{
  border-radius: 5px;
box-shadow: 0 3px 5px 4px rgba(0,0,0,0.1);
}
`
export const ImgDM = styled.img`
height: auto;
width: 100%;
`
export const SpanDM = styled.h3`
font-size: .75rem;
line-height: 1.4;
text-overflow: ellipsis;
white-space: initial;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
font-weight: 400;
@media(max-width: 500px){
  font-size: .45rem;
}
`

export const PriceDM = styled.div`
font-size: 14px;
font-weight: 700;
@media(max-width: 500px){
  font-size: 10px;
}
`

export const ContPiscine = styled.div`
display: flex;
background: #FFF;
border-radius: 5px;
width: 100%;
flex-direction: row;
`

export const VoirPlus = styled.a`
color: #ff8100;
font-size: 12px;
cursor: pointer;
`
export const Ads = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
`

export const Ads1 = styled.div`
background: none;
width: 49%;
`

export const Ads2 = styled.div`
background: none;
width: 49%;
`

export const CartCounter = styled.span` 
color: #f7f7f9;
width: 20px;
font-size: 10px;
font-weight: 800;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
height: 20px;
margin-bottom: 0px;
text-decoration: none;
background: #ff8100;
right: 71px;
top: 8px;
z-index: 1;
position: absolute;
@media(max-width: 500px){
  right: 5px;
}
`