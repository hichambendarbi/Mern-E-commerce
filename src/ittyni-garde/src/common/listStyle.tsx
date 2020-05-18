
import styled from 'styled-components';

export const Table = styled('table')`
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    border-spacing: 0;
    min-width: 100%;
    margin-top: 50px;
`

export const Tr = styled('tr')`
    border-bottom: 1px solid #ccc;
`

export const Th = styled('th')`
    background-color: #F1F5F8;
    border-bottom: 2px solid #ccc;
    font-size: 12px;
    padding: 10px;
    text-transform: uppercase;
    text-align: left;
`

export const Td = styled('td')`
    background-color: #fff;
    border: 0;
    border-bottom: 1px solid #ccc;
    padding: 10px;
`

export const FiltrationContainer = styled('div')`
width:100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const Filtration  = styled('div')`
width: 50%;
display: flex;
`

export const All  = styled('div')`
width: 25%;
display: flex;
flex-direction: row-reverse;
`

export const Button = styled('button')`
background: transparent;
border: 2px solid #117a8b;
transition: .5s;
margin-left: 5px;
padding: 0.5em;
:hover{
    background: #117a8b;
}
`

export const But = styled('button')`
color: crimson;
text-decoration: underline;
background: transparent;
border: none;
`