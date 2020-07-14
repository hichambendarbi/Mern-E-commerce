import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import FloatingLabelInput from '../commons/FloatingLabelInput'
import {Retour,AuthNavigation,Links,ContainerInputs,Button,FooterLogin,AuthContainer, LinkRec} from "../commons/Assets"
import axios from "axios"

const SendEmail = () => {
const [emailForm, setEmailData] = useState({
email: '',
submited: false
})

const {email, submited} = emailForm

// Affect value to input email
const onChange = e => setEmailData({
email: e.target.value
})

// Send email with axios
const sendEmailToGmail = e => {
e.preventDefault();
axios.post(`/api/emailRecouver/${email}`)
console.log(email)
setEmailData({
email: '',
submited: true
})
}

return (
<form onSubmit={e=> sendEmailToGmail(e)}>
<AuthContainer style={{paddingTop:"120px"}}>
<Retour to="/">3DSTOR<span style={{color:"#ff8100"}}>E</span></Retour>
<ContainerInputs>
{submited ? <span>Consulter votre boite email</span>
: <FloatingLabelInput type="email" placeholder="E-mail" name="email" value={email} onChange={e=> onChange(e)}/>}
<Button type="submit">Envoyer email</Button>
<FooterLogin>
<span>Envoyer un email de recuperation</span>
<LinkRec to="/login">Je peut se connecter</LinkRec>
</FooterLogin>
</ContainerInputs>
</AuthContainer>
</form>
)
}

export default SendEmail