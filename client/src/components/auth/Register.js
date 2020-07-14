import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import FloatingLabelInput from '../commons/FloatingLabelInput'
import {Retour,AuthNavigation,Links,ContainerInputs,Button,FooterLogin,AuthContainer, LinkRec} from "../commons/Assets"
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'


const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState ({ 
        cname:'',
        email :'',
        password:'',
        password1:'',
    });
    const {
        cname,
        email,
        password,
        password1
      } = formData;
      const onChangeAdd = e => setFormData({...formData, [e.target.name]:e.target.value})
      console.log(formData)
      const onSubmit = async e => {
          e.preventDefault()
          if(password!==password1) {
              setAlert('mot de passe non identique', 'danger')
          } else {
              register({cname, email, password})
          }
      }

            // Redirect if logged in 
            if(isAuthenticated) {
                return <Redirect to='/'/>
            }
    return (
     <AuthContainer>
         <Retour to="/">3DSTOR<span style={{color:"#ff8100"}}>E</span></Retour>
         <AuthNavigation>
             <Links to="/login">SE CONNECTER</Links>
             <Links to="/register" style={{borderBottom:"2px solid #f5770b", color: "#f5770b"}}>CREER UN COMPTE</Links>
         </AuthNavigation>
         <form>
         <ContainerInputs>
               <FloatingLabelInput placeholder="Nom et Prenom" name="cname" value={cname}  onChange={e => onChangeAdd(e)}/>
               <FloatingLabelInput placeholder="E-mail" name="email" value={email}  onChange={e => onChangeAdd(e)}/>
               <FloatingLabelInput placeholder="Mot de passe" name="password" value={password}  onChange={e => onChangeAdd(e)}/>
               <FloatingLabelInput placeholder="Retapez le mot de passe" name="password1" value={password1}  onChange={e => onChangeAdd(e)}/>
             <Button onClick={e=> onSubmit(e)}>SE CONNECTER</Button>
             <FooterLogin>
                 <span>J'arrive pas connecter a mon compte 3DSTORE</span>
                 <LinkRec to="/recuperationMotDePasse">Mot de passe oublie ?</LinkRec>
             </FooterLogin>
         </ContainerInputs>
         </form>
     </AuthContainer>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(
    mapStateToProps
    ,{ setAlert, register })(Register)


