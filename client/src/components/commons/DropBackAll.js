import React from 'react'
import styled from 'styled-components'

const DropBackAll = () => {
    return (
       <Drop></Drop>
    )
}
export default DropBackAll

const Drop = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 10;
    width: 100%;
    background: rgba(0,0,0,0.80);
`