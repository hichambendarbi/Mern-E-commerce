import styled from "styled-components"

export const ModalLayout = styled.div`

  position: fixed; /* Stay in place */
  z-index: 99; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`
export const ModalHeaderTitle = styled.h1`
    font-size : 12px;
`

export const ModalContainer = styled.div`
  display : flex;
  flex-direction : column;  
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`

export const ModalFooter = styled.div`
    padding : 15px
`
export const ModalContent = styled.div`
  padding-top: 20px;
`
export const ModalClose = styled.span`
  position: absolute;
  top: 0;
  color: #aaaaaa;
  font-size: 35px;
  font-weight: bold;
  right: 0;
  cursor: pointer;
`
export const ModalHeader = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
`