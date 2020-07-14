import React,{Fragment} from 'react'
import styled from 'styled-components'

const PopUp = (props) => {
    return (
        <Fragment>
        <ContainerModal>
            <ContainerHeaderContent>
                  <SectionHeader>
                      <h1>{props.title}</h1>
                  </SectionHeader>
                  <SectionContent >
                       {props.children}
                  </SectionContent>
            </ContainerHeaderContent>
            <ActionModal >
               {props.canCancel && (<BtnAnnulerConfirmer onClick={props.onCancel}>
                   Quitter
               </BtnAnnulerConfirmer>)}
               {props.canConfirm && <BtnAnnulerConfirmer  onClick={props.onConfirm}>Confirmer</BtnAnnulerConfirmer>}
            </ActionModal>
        </ContainerModal>
        </Fragment>
    )
}

export default PopUp

const ContainerModal = styled.div`
width: 40%;
background: white;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
position: fixed;
top: 20vh;
right: 30%;
z-index: 12;
border-radius: 10px;
@media(max-width: 700px){
    width: 90%;
    right: inherit;
}
`
const ContainerHeaderContent = styled.section`
text-align: center;
`

const SectionHeader = styled.section`
padding: 1rem;
background: #117A8B;
color: white;
padding: 1em;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
`

const SectionContent = styled.section`
padding: 1rem;
display: flex;
flex-direction: column;
align-items: center;
`

const ActionModal = styled('section')`
display: flex;
justify-content: flex-end;
padding: 1rem;
JUSTIFY-CONTENT: center;
margin: 0 10px;
@media(max-width: 700px) {
      width: 85%;
}
`

const BtnAnnulerConfirmer = styled('button')`
    color: #117a8b;
    font-size: 1em; 
    margin: 1em;
    width: 150px;
    padding: 0.25em 1em;
    border: 2px solid #117a8b;
    border-radius: 3px;
  
  @media(max-width: 700px){
      padding: 0.5em;
  }
  
`
