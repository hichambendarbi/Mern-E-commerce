import React, { Component, Fragment } from "react"
import axios from "axios"
import {Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import FloatingLabelInput from '../commons/FloatingLabelInput'
import {Retour,AuthNavigation,Links,ContainerInputs,Button,FooterLogin,AuthContainer, LinkRec} from "../commons/Assets"
import { setAlert } from '../../actions/alert'
import {connect} from 'react-redux'

class UpdatePassword extends Component {
state = {
password: "",
confirmPassword: "",
submitted: false,
}
handleChange = key => e => {
this.setState({ [key]: e.target.value })
}
updatePassword = e => {
e.preventDefault()
const { userId, token } = this.props
const { password, confirmPassword } = this.state
if(password!==confirmPassword) {
setAlert('Les mot de passe doivent etre identiques', 'danger')
} else {
axios
.post(
`/api/emailRecouver/${userId}/${token}`,
{ password }
)
.then(res => console.log("RESPONSE FROM SERVER TO CLIENT:", res))
.catch(err => console.log("SERVER ERROR TO CLIENT:", err))
this.setState({ submitted: !this.state.submitted })
}

}
componentDidMount(){
var ball = document.getElementById('ball')
if(ball!==null){
ball.style.marginLeft = "20%";
}
}
render() {
const { submitted } = this.state

return (
// <RecoverPasswordStyles>

<div className="global_login" id="loginboxx">
<div className="loginBox">


<form onSubmit={this.updatePassword}>
<AuthContainer style={{paddingTop:"120px"}}>
<Retour to="/">3DSTOR<span style={{color:"#ff8100"}}>E</span></Retour>
<ContainerInputs>
{submitted ? <Redirect to='/login'/>
: <Fragment>
<FloatingLabelInput type="email" placeholder="Nouveau mot de passe" name="password" value={this.state.password} onChange={this.handleChange("password")}/>
<FloatingLabelInput type="email" placeholder="Confirmer le mot de passe" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange("confirmPassword")}/>
</Fragment>}
<Button type="submit">Modifier le mot de passe</Button>
<FooterLogin>
<span>Cette page sera etre invalabale apres 1 heure</span>
<LinkRec to="/login">Je peut se connecter</LinkRec>
</FooterLogin>
</ContainerInputs>
</AuthContainer>
</form>

</div>
</div>


)
}
}
UpdatePassword.propTypes = {
token: PropTypes.string.isRequired,
userId: PropTypes.string.isRequired,
setAlert: PropTypes.func.isRequired

}
export default connect(null,{setAlert}) (UpdatePassword)