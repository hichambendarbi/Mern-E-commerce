import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Header = styled.div`
display: block;
margin: 0 auto;
width: 100%;
max-width: 100%;
box-shadow: none;
background-color: #fff;
position: fixed;
height: 60px!important;
overflow: hidden;
z-index: 10;
top: 0;
box-shadow: 0 0.5px 4px -2px #928f8f;
`

export const Menu1 = styled.div` 
height: -webkit-fill-available;
overflow-y: scroll;
position: fixed;
left: 0;
width: 250px;
margin-top: 60px;
transform: translateX(0);
transition: transform 250ms ease-in-out;
background: black;
`

export const SidebarInner = styled.ul`
margin:0;
padding:0;
border-top: 1px solid rgba(255, 255, 255, 0.10);
`

export const Li = styled.li`
list-style: none;
color: #fff;
text-transform: uppercase;
font-size: 12px;
display: flex;
align-items: center;
justify-content: start;
padding: 16px;
cursor: pointer;
border-bottom: 1px solid rgba(255, 255, 255, 0.10);
:hover{
  background: #F68B1E;
}
`

export const Span = styled.span`
display: block;
font-size: 11px;
font-weight: 700;
color: #928f8f;
margin-right: 20px;s
`

export const Links = styled(Link)`
color: #fff;
text-transform: uppercase;
font-weight: bold;
cursor: pointer;
text-decoration: none;
`

export const LinkLogo = styled(Link)`
float: left;
color: black;
padding: 10px 20px;
margin-bottom: 0px;
font-weight: 900;
text-decoration: none;
font-size: 24px;
`

export const Sp = styled.span`
font-size: 10px;
`

//--------------------------------------------------------------- START PRODUCT STYLED
export const Container = styled.div`
width: 100%;
margin-left: 500px;
height: calc(100vh-60px);
display: flex;
flex-direction: column;
@media(max-width: 500px) { 
  margin-top: 65px;
}
`

//---------------------------------------------------------------- START STYLED NEWPRODUCT
// DropDown Select option
export const SelectD = styled.div`
position: relative;
display: flex;
height: 40px;
line-height: 2.5;
background: #2c3e50;
overflow: hidden;
border-radius: .25em;
`

export const Select = styled.section`
-webkit-appearance: none;
-moz-appearance: none;
-ms-appearance: none;
appearance: none;
outline: 0;
box-shadow: none;
border: 0 !important;
background: #2c3e50;
background-image: none;
flex: 1;
padding: 0 .5em;
color: #fff;
cursor: pointer;
`

export const HeaderNewProduct = styled.div`
height: 51.5px;
align-items: center;
border-right: 3px solid #f68b1e;
border-bottom: 3px solid #f68b1e;
font-size: 20px;
margin-right: 270px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
padding: 0PX 20px;
font-weight: 800;
justify-content: space-between;
}
`

export const FormNewProduct = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
height: 74vh;
padding: 10px 20px;
top: 140px;
width: -webkit-fill-available;
POSITION: fixed;
margin-right: 270px;
margin-top: 20px;
align-items: center;
display: flex;
flex-direction: column;
overflow-y: scroll;
}
`

export const ContainerInputs = styled.div`
width: 100%;
height: 60px;
display: flex;
margin-bottom: ${props => props.marginBottom};
justify-content: space-between;
margin-top: ${props => props.marginTop};
`

export const DivInput = styled.div` 
    height: 80px;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const Input = styled.input`
width: 100%;
height: 40px;
border: 0.5px solid #928f8f;
border-radius: 3px;
padding: 3px;
`

export const Label = styled.label`
    padding-bottom: 3px;
    font-size: 15PX;
    color: #34495e;
    font-weight: bolder;
`

export const Button = styled.button`
width: 100%;
height: 40px;
background: ${props => props.background};
color: #fff;
border: none;
border-radius: 3px;
margin-top: 10px;
padding: 1em;
cursor: pointer;
:hover{
  background: #ca7218;
}
`

export const Btn = styled.button`
float: right;
width: 20px;
background: transparent;
border: 1px solid #2c3e50;
color: #2c3e50;
font-weight: 900;
cursor: pointer;
border-radius: 3px;
:hover{
  background: #f4f4f4;
}
`

export const DropDown = styled.select`
-webkit-appearance:none;
-moz-appearance:none;
-ms-appearance:none;
appearance:none;
outline:0;
box-shadow:none;
border:0!important;
background: #5c6664;
background-image: none;
flex: 1;
padding: 0 .5em;
color:#fff;
cursor:pointer;
font-size: 1em;
font-family: 'Open Sans', sans-serif;
}
`

export const DescriptionProduct = styled.textarea`
width: 100%;
height: 100px; 
border: 0.5px solid #2c3e50;
border-radius: 3px;
padding: 3px;
`

// Start style component Complet adding product
export const StepperContainer = styled.div`
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;
`

export const StepperButton = styled.button`
background: #f68b1e;
border-radius: 50%;
padding: 0.5%;
width: 30px;
border: none;
height: 30px;
`

export const Line = styled.hr`
width: 30%;
border: none;
height: 1px;
background-color: #928f8f;
@media(max-width: 1300px) {
  width: 25%;
}
@media(max-width: 1100px) {
  width: 20%;
}
@media(max-width: 950px) {
  width: 15%;
}
@media(max-width: 860px) { 
  width: 10%;
}
}
`

export const TextStepper = styled.div`
width: 100%;
height: 30px;
background: red;
display: flex;
`

export const SLabel = styled.label`
color: black;
`

export const TablesContainer = styled.div`
width: 100%;
display: flex;
background: gray;
height: inherit;
justify-content: space-between;
`

export const SectionTble = styled.div`
    height: inherit;
    background: red;
    display: flex;
    width: 30%;
`

export const TableDiv = styled.div`
width: 100%;
margin: 10px 70px 70px;
box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
`

export const Table = styled.table`
border-radius: 5px;
font-size: 12px;
font-weight: normal;
border: none;
border-collapse: collapse;
width: 100%;
max-width: 100%;
white-space: nowrap;
background-color: white;
`

export const ContainerFiltre = styled.div`
width: 100%;
height: 40px;
display: flex;
border-radius: 11px;
margin-bottom: 10px;
`

export const InputsSearch = styled.div`
height: 100%;
background: green;
width: inherit;
display: flex;
border-bottom-right-radius: ${props => props.bbrr};
border-top-right-radius: ${props => props.btrr};
border-bottom-left-radius: ${props => props.bblr};
border-top-left-radius: ${props => props.btlr};
`

export const SpanNavigation = styled.span`
cursor: pointer;
:hover{
  color: red;
}
`

// --------------------START STYLED WITH DisplaySearch 

export const ContainerArticle = styled.div`
width: 100%;
display: flex;
padding: 28px 28px 28px 28px;
justify-content: space-between;
@media(max-width: 920px) {
  width: 100%;
  padding: 60px 8px 28px 8px;
}
@media(max-width: 500px) {
  width: 100%;
  padding: 120px 8px 28px 8px;
}
`

export const ContainerFilter = styled.div`
width: 18%;
height: 100vh;
background: #fff;
padding: 1em;
display: flex;border-radius: 5px;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);
@media(max-width: 920px) {
  display: none;
}
`

export const ContainerProd = styled.div`
width: 80%;
background: #fff;
display: flex;
border-radius: 5px;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);
flex-direction: column;
@media(max-width: 920px) {
  width: 100%;
}
`

export const TitlAndFilter = styled.div`
width: 100%;
height: 50px;
border-bottom: 1px solid #ededed;
display: flex;
padding: 0 10px 0 10px;
align-items: center;
justify-content: space-between;
`

export const Title = styled.div`
font-size: 1.25rem;
font-weight: 500;
@media(max-width: 500px){
  font-size: 12px;
  font-weight: 700;
}
`

export const Tri = styled.span`
font-size: .875rem;
font-weight: 500;
`

export const ResutlatNumb = styled.span`
font-size: .875rem;
color: #75757a;
@media(max-width: 500px){
  font-size: .8rem;
}
`

export const ContainerProduits = styled.div`
width 100%;
display: flex;
padding: 5px;
justify-content: space-around;
flex-wrap: wrap;
@media(max-width: 500px) {
  flex-direction: column;
}
`

export const ProductCard = styled.div`
width: calc(100% / 4 - 8px);
display: flex;
margin-bottom: 8px;
flex-direction: column;
:hover{
border-radius: 5px;
box-shadow: 0 3px 5px 4px rgba(0,0,0,0.1);
}
@media(max-width: 500px) {
  width: 100%;
}
`

export const LinkToProd = styled(Link)`
min-height: 1px;
background: transparent;
cursor: pointer;
color: inherit;
@media(max-width: 500px) {
  display: flex;
}
`

export const DivImage = styled.div`
position: relative;
`

export const ImgProd = styled.img`
width: 100%;
height: auto;
border-top-left-radius: 5px;
border-top-right-radius: 5px;

@media(max-width: 500px){
  width: 170px;
  height: 88%;
} 

@media(max-width: 414px){
  width: 170px;
  height: 80%;
} 

@media(max-width: 370px){
  width: 140px;
  height: 90%;
} 
`

export const DivInfo = styled.div`
padding: 0 8px 8px 8px;
`

export const ExporInfo = styled.div`
    background: #0040ce;
    font-size: font-weight:500;
    border-raduis: 2px;
    font-size: .6875rem;
    height: 18px;
    display: inline-flex;
    padding: 0 4px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 4px;
`

export const DescriptionProd = styled.h3`
font-size: 1rem;
line-height: 1.4;
text-overflow: ellipsis;
white-space: initial;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
font-weight: 400;
@media(max-width: 1360px){
  font-size: .75rem;
}
`

export const Prc = styled.div`
font-size: .875rem;
text-align: left;
padding-top: 4px;
direction: rtl;
font-weight: 700;
direction: ltr;
`

export const DiscountPrc = styled.div`
display: flex;
`

export const Old = styled.div`
text-decoration: line-through;
color: #75757a;
direction: ltr;
font-size: .75rem;
`

export const Pourc = styled.div`
font-size: .75rem;
padding: 0 2px 0 2px;
text-decoration: none;
margin-left: 8px;
height: 18px;
min-width: 32px;
background-color: #feefde;
color: #f68b1e;
`

export const DivFeedback = styled.div`
display: flex;
padding-top: 8px;
color: #75757a;
font-size: .75rem;
align-items: center;
@media(max-width: 370px){
  padding-top: 4px;
}
`

export const DivStars = styled.div`
width: 80px;
height: 12px;
margin-right: 4px;
position: relative;
display: flex;
align-items: center;
justify-content: space-around;
`

export const DivBtn = styled.div`
width: 100%;
overflow: visible;
padding-top: 16px;
@media(max-width: 500px){
  display: none;
}
`

export const BtnAddToCard = styled.button`
width: 100%;
font-size: .75rem;
transform: translate3d(0, 0, 0);
padding-left: 16px;
padding: 8px 16px 8px 16px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
background-color: #f68b1e;
color: #FFF;
cursor: pointer;
text-align: center;
text-transform: uppercase;
font-weight: 500;
border-radius: 4px;
border: none;
:hover{
  background: orange;
}
@media(max-width: 500px) {
  display: none;
}
`

export const ButtonT = styled.button`
backgrounColor: #f4f4f4;
color: black;
border: none;
padding: 4px;
@media(max-width: 500px){
  display: inline;
}
` 

export const SpanT = styled.span`
font-size: 16px;
@media(max-width: 500px){
  display: inline;
}
`

export const Notification = styled.span`
float: right;
color: black;
padding: 10px 20px;
margin-bottom: 0px;
-webkit-text-decoration: none;
text-decoration: none;
font-size: 24px;
`

export const NotiNumber = styled.span`
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
background: #f39c12;
right: 11px;
margin-top: 6px;
position: absolute;
`

export const NotiNumberordre = styled.span`
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
background: #0cc38e;
right: 60px;
margin-top: 6px;
position: absolute;
`

export const Notificordre = styled.span`
float: right;
color: black;
padding: 10px 10px;
margin-bottom: 0px;
-webkit-text-decoration: none;
text-decoration: none;
font-size: 24px;
`

export const ImgUser = styled.div`
color: black;
align-items: center;
justify-content: center;
display: flex;
background: #FFF;
width: 40px;
height: 40px;
border-radius: 50%;
`

// Build Display product
export const Main = styled.div`
padding-bottom: 8px;
padding-top: 8px;
@media(max-width: 930px){
  padding-top: 40px;
}
@media(max-width: 500px){
  padding-top: 110px;
}
`

export const ContainerDisplay = styled.div`
width: 1184px;
flex-direction: column;
display: flex;
@media (max-width: 1200px){
  max-width: fit-content;
  align-items: center;
}

`

export const TitleProductPageRoute = styled.div`
font-size: 12px;
color: gray;
padding: 8px 0 10px 0;
@media(max-width: 500px){
  display: none;
}
`

export const ContainerImgInf = styled.div`
width: 1184px;
flex-direction: column;
display: flex;
flex-direction: row;
@media (max-width: 1200px){
  max-width: 950px;
}
@media (max-width: 960px){
  flex-direction: column;
}
@media (max-width: 900px){
  width: 840px;
}
@media (max-width: 840px){
  width: 780px;
}
@media (max-width: 780px){
  width: 720px;
}
@media (max-width: 720px){
  width: 660px;
}
@media (max-width: 660px){
  width: 600px;
}
@media (max-width: 600px){
  width: 540px;
}
@media (max-width: 540px){
  width: 480px;
}
@media (max-width: 480px){
  width: 440px;
}
@media (max-width: 440px){
  width: 420px;
}
@media (max-width: 420px){
  width: 400px;
}
@media (max-width: 400px){
  width: 380px;
}
@media (max-width: 380px){ 
  width: 360px;
} 
@media (max-width: 360px){ 
  width: 340px;
}
@media (max-width: 340px){ 
  width: 320px;
}
@media (max-width: 320px){ 
  width: 300px;
}
`

export const ContainerProDisp = styled.div`
display: flex;
width: 75%;
height: 100%;
background: #FFF;
border-radius: 3px;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);
padding: 8px;
@media(max-width: 950px){
  width: 100%;
}
@media(max-width: 500px){
  flex-direction: column;
}
`

export const ContProductImgs = styled.div`
display: flex;
width: 25%;
height: 100%;
padding-bottom: 4px;
padding-left: 8px;
padding-right: 8px;
flex-basis: 37%;
max-width: 37%;
min-width: 37%;
flex-direction: column;
@media(max-width: 500px){
width: 100%;
flex-basis: 100%;
max-width: 100%;
min-width: 100%;
}
`

export const ConImg1 = styled.div`
padding-top: 4px;
`

export const ConImg2 = styled.div`
margin-bottom: 8px;
border-radius: 4px;
position: relative;
justify-content: center;
display: flex;
`

export const ZoomImg = styled.a`
cursor: zoom-in;
text-decoration: none;
background-color: rgba(0,0,0,0);
transition: opacity .5s;
top: 0;
height: auto;
width: 100%;
`

export const ImgP = styled.img`
width: 100%;
height: 100%;
cursor: zoom-in;
border-style: none;
`

export const ConImg3 = styled.div`
display: flex;
position: relative;
overflow: hidden;
border-bottom: 1px solid #ededed;
padding-bottom: 8px;
`

export const ConImg4 = styled.div`
display: flex;
`

export const ConImg5 = styled.div`
padding-left: 0;
width: 44px;
padding-right: 4px;
height: 40px;
display: flex;
`

export const LabelImg = styled.label`
cursor: pointer;
width: 100%;
border-radius: 2px;
&:focus{
  border: 1px solid #f68b1e;
}
`

export const ImgList = styled.img`
width: 100%;
border-radius: 2px;
border-style: none;
cursor: pointer;
`


export const ContProdInf = styled.div`
flex-basis: 63%;
max-width: 63%;
min-width: 63%;
width: 63%;
padding-bottom: 4px;
padding-left: px;
padding-right: 0px;
@media(max-width: 500px){
flex-basis: 100%;
max-width: 100%;
min-width: 100%;
width: 100%;
padding-left: 8px;
padding-right: 8px;
}
`

export const TitleWish = styled.div`
display: flex;
justify-content: space-between;
`

export const TitPw = styled.div`
display: flex;
padding-right: 24px;
flex-direction: column;
`

export const TitH = styled.h1`
font-size: 1.25rem;
padding-bottom: 4px;
padding-top: 8px;
font-weight: 400;
margin: 0;
@media(max-width: 850px){
  font-size: .80rem;
}
`

export const Fav = styled.a`
display: flex;
align-self: flex-start;
padding: 8px;
cursor: pointer;
:hover{
    border-radius: 100%;
    background: #feefde;
    align-items: center;
}
`

export const ExportPr = styled.a`
background: #0040ce;
font-size: font-weight:500;
border-raduis: 2px;
font-size: .875rem;
height: 20px;
display: flex;
color: #fff;
margin-top: 8px;
padding-right: 4px;
line-height: 1.2;
font-weight: 500;
align-items: center;
justify-content: center;
display: inline-flex;
border-radius: 2px;
max-width: 170px;
font-family: "Segoe UI";
`

export const ContMarFeed = styled.div`
padding-right: 8px;
`

export const MarquPos = styled.div`
font-size: .875rem;
padding-bottom: 4px;
padding-top: 4px;
`

export const Mark = styled.a`
color: #264996;
text-decoration: none;
display: inline-block;
font-size: .875rem;
:hover{
  text-decoration: underline;
  cursor: pointer;
}
`

export const PriceAndDis = styled.div`
margin-top: 4px;
padding-bottom: 8px;
padding-top: 8px;
position: relative;
border-bottom: 1px solid #ededed;
border-top: 1px solid #ededed;
`

export const PriceDis = styled.div`
font-size: 1.5rem;
text-align: left;
font-weight: 700;
direction: ltr;
`

export const DiscoDis = styled.div`
display: flex;
` 

export const SpanDisc = styled.span`
display: flex; 
font-size: 1rem;
text-decoration: line-through;
color: #75757a;
text-align: left;
`

export const PourDisp = styled.span`
margin-left: 8px;
font-size: .875rem;
padding-right: 4px;
height: 20px;
min-width: 40px;
color: #f68b1e;
background-color: #feefde;
line-height: 1.2;
font-weight: 500;
align-items: center;
justify-content: center;
display: flex;
`

export const OptionsDetails = styled.div`
padding-right: 4px;
border-bottom: 1px solid #ededed;
padding-bottom: 2px;
`

export const ContOptions = styled.div`
padding-bottom: 8px;
margin-right: 4px;

padding-top: 8px;
display: flex;
justify-content: space-between;
align-items: center;

`

export const SpanOption = styled.div`
font-size: .875rem;
text-transform: uppercase;
font-weight: 550;
`

export const LinkDetails = styled.a`
display: flex;
font-size: .875rem;
cursor: pointer;
color: #264996;
`

export const GroupOptions = styled.div`
padding-bottom: 4px;
padding-top: 4px;
font-size: .75rem;
display: flex;
`

export const InputOpt = styled.label`
border-radius: 2px;
border: 1px solid #ededed;
min-width: 40px;
padding: 8px;
margin: 4px;
font-weight: 500;
text-align: center;
`

export const ContAch = styled.div`
padding-top: 8px;
padding-bottom: 8px;
padding-left: 4px;
padding-right: 4px;
`

export const ButtonAch = styled.button`
transform: translate3d(0,0,0);
    width: 100%;
    padding-bottom: 12px;
    padding-top: 12px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    align-items: center;
    display: flex;
    background: #f68b1e;
    color: #FFF; 
    cursor: pointer;
    justify-content: center;
    border: none; 
    border-radius: 4px;
    text-transform: uppercase; 
`

export const Share = styled.div`
display: block;
padding-top: 8px;
padding-bottom: 8px;
`

export const HShare = styled.h1`
font-size: .875rem;
text-transform: uppercase;
font-weight: 550;
padding-bottom: 8px;
`

export const SocialShare = styled.div`
padding-bottom: 8px;
padding-top: 8px;
display: flex;
`

export const Socialbtn = styled.button`
padding: 4px;
display: flex;
border: 1px solid #282828;
border-radius: 99px;
cursor: pointer;
margin-right: 5px;
background: none;
`


export const ConstPromo = styled.div`
padding-right: 8px;
padding-left: 8px;
display: flex;
flex-direction: column;
`

export const TitleProm = styled.h2`
font-size: .875rem;
text-transform: uppercase;
font-weight: 550;
padding-bottom: 8px;
padding-top: 8px;
`

export const DivProms = styled.div`
padding-bottom: 4px;
padding-top: 4px;
display: flex;
flex-direction: column;
`

export const LinkPro = styled.a`
    padding-bottom: 4px;
    padding-top: 4px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    color: #264996;
    font-size: .875rem;
    text-decoration: none;
    cursor: pointer;
    :hover{
      text-decoration: underline;
    }
`

export const ProDispLivr = styled.div`
display: flex;
width: 25%;
height: 100%;
border-radius: 3px;
padding-left: 8px;
padding-right: 8px;
@media(max-width: 960px){
  width: 100%;
  padding-left: 0px;
}
`

export const SectionRetLi = styled.section`
background: #FFF;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);
border-radius: 4px;
display: block;
width: 100%;
`

export const TitleRetoureLiv = styled.h2`
font-size: .875rem;
text-transform: uppercase;
font-weight: 550;
padding: 8px;
border-bottom: 1px solid #ededed;
`

export const DivRetLiv = styled.div`
display: flex;
flex-direction: column;
`

export const ConstRet1 = styled.div`
display: flex;
padding: 8px;
`

export const SvgIc = styled.svg`
    padding: 4px;
    border: 1px solid #ededed;
    font-size: 0;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 4px;
`

export const DivTils = styled.div`
display: flex;
flex-direction: column;
margin-left: 8px;
`

export const Htit = styled.h3`
font-size: .875rem;
font-weight: 550;
width: 100%;
`

export const Ptit = styled.p`
padding-top: 4px;
font-size: .760rem;
`



export const ContImg = styled.div`
display: flex; 
margin-bottom: 8px;
overflow: hidden;
border-radius: 4px;
padding-top: 100%;
justify-content: center;

`

export const ImgsChoice = styled.div` 
margin-bottom: 8px;
display: flex;
flex-direction: column;
`

export const ListImgs = styled.div`
margin-bottom: 8px;
display: flex;
`

export const SouList = styled.div`
display: flex;
`

export const Itm = styled.div`
padding-left: 0;
width: 40px;
height: 40px;
`

export const Itms = styled.img`
border-radius: 2px;
border-style: none;
`
