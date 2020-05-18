import React from 'react'
import styled from 'styled-components'


export const Dropallback: React.FC<any> = (props) => {
    return(
<Drop></Drop>
)
}


const Drop = styled('div')`
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 100%;
background: rgba(0, 0, 0, 0.80); 
`
