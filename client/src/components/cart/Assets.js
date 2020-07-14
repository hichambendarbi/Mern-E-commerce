import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerCart = styled.div`
width: 100%;
max-width: 970px;
margin-left: auto;
margin-right: auto;
padding: 0 10px;
position: relative;
height: 700px;
@media (max-width: 500px)
    {
        margin-top: 120px;
    }
`

export const NumProdCart = styled.h1`
    font-size: 22px;
    line-height: 26px;
    font-weight: 700;
    color: #000;
    margin-top: 16px;
    margin-bottom: 20px;
`

export const Header = styled.div`
color: #8e8e93;
font-weight: 500;
font-size: 14px;
line-height: 1.14;
text-transform: uppercase;
display: flex;
`

export const HeaderProduct = styled.div`
text-align: left;
width: 53.47%;
`

export const HeaderQuantity = styled.div`
width: 10.315%;
text-align: center;
`

export const Price = styled.div`
width: 18.105%;
text-align: center;
`

export const SousTotal = styled.div`
width: 18.105%;
text-align: center;
`

export const FormCart = styled.form`
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.05);
    margin: 8px 0;
`

export const SectionCart = styled.div`
border-collapse: collapse;
display: table;
width: 100%;
display: flex;
`

export const ContainerImg = styled.div`
padding: 10px;
vertical-align: top;
width: 80px;
`

export const LinkProduct = styled(Link)`
color: #000;
text-decoration: none;
`

export const ImgPro = styled.img`
background-image: none;
vertical-align: middle;
max-width: 100%;
`

export const ItemInfo = styled.div`
padding-top: 10px;
padding-right: 10px;
padding-bottom: 32px;
padding-left: 0;
text-align: left;
position: relative;
width: 45%;
`

export const Mark = styled.div`
color: #ababab;
font-size: 14px;
line-height: 1;
margin-bottom: 6px!important;
`

export const ProductDes = styled(Link)`
font-size: 14px;
font-weight: 550;
color: black;
text-decoration: none;
line-height: 1.25;
margin-bottom: 6px!important;
display: inline-block!important;
background-color: white;
:hover{
    color: #f68b1e;
}
`

export const QauntityDropDiv = styled.div`
border-left: 1px solid #eee;
border-right: 1px solid #eee;
width: 11%;
white-space: nowrap;
padding-top: 23px;
min-width: 63px;
font-size: 15px;
font-weight: 500;
`

export const ProductSize = styled.div`
color: #ababab;
font-size: 14px;
line-height: 1;
`

export const PriceUni = styled.div`
background-color: #fff;
text-align: center;
width: 18.21%;
padding-top: 29px;
`

export const PriceNow = styled.span`
color: #000;
font-size: 15px;
`

export const SousTotalDiv = styled.div`
border-left: 1px solid #eee;
border-radius: 4px;
color: #f68b1e;
font-size: 16px;
font-weight: 500;
text-align: center;
width: 18.21%;
padding-top: 29px;
` 

export const ContainerTotal = styled.div`
border-collapse: collapse;
color: #000;
display: table;
float: right;
min-width: 380px;
text-align: right;
margin-bottom: 4px!important;
`
export const LabelTTC = styled.label`
display: table-cell;
font-size: 15px;
padding: 4px 20px;
font-weight: 550;
`

export const TTC = styled.div`
color: #f68b1e;
font-size: 1.67em;
padding: 4px 20px;
font-weight: 550;
display: table-cell;
`

export const PriceShipping = styled.div`
clear: both;
color: #ababab;
float: right;
font-size: 14px;
margin-right: 20px!important;
margin-bottom: 8px!important;
`

export const ContainerBtn = styled.div`
width: 100%;
max-width: 970px;
margin-left: auto;
margin-right: auto;
padding: 0 10px;
position: relative;
padding: 16px 20px;
display: flex;
justify-content: flex-end;
`

export const LinkCart = styled(Link)`
min-width: 240px;
font-size: 12px;
font-weight: 550;
margin-left: 10px;
padding: 8px 16px;
box-shadow: 0 2px 8px 0 rgba(0,0,0,.15);
border-radius: 3px;
text-decoration: none;
background: #FFF;
color: black;
text-transform: uppercase;
text-align: center;
`

export const LinkCart1 = styled(Link)`
    min-width: 240px;
    font-size: 12px;
    font-weight: 550;
    margin-left: 10px;
    padding: 8px 16px;
    text-transform: uppercase;
    background: #f68b1e;
    border: 1px solid #f68b1e;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    display: flex;
    border-radius: 3px;
`

export const Select = styled.select`
background-size:25px 25px;
border:solid 1px #ddd;
font-family:inherit;
font-size:100%;
font-weight:inherit;
outline:none;
padding:8px 10px;
text-indent: 0.01px;
text-overflow: '';
vertical-align: middle;
width:100%;
-webkit-border-radius:3px;
-moz-border-radius:3px;
border-radius:3px;
-webkit-appearance: button;
-moz-appearance: button;
appearance: button;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
padding: 10px 20px;
background: none;
color: black;
` 

