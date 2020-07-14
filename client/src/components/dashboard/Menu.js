import React from 'react'
import { Header, Menu1, SidebarInner, Li, Span, Links, LinkLogo, Notification, NotiNumber, Notificordre, NotiNumberordre, ImgUser, Sp } from './Assets'
// import {Products, Add, Categorys, Customer, Employe,
//          Statistic, PanierL, Livree, Livreurs, Commandes, Logout} from '../img'
         import { ReactComponent as Add} from '../img/icons/add.svg'
         import { ReactComponent as Products} from '../img/icons/product-realise.svg'
         import { ReactComponent as Categorys} from '../img/icons/categ.svg'
         import { ReactComponent as Customer} from '../img/icons/customer.svg'
         import { ReactComponent as Employe} from '../img/icons/employee.svg'
         import { ReactComponent as PanierL} from '../img/icons/shopping-basket.svg'
         import { ReactComponent as Statistic} from '../img/icons/statistics.svg'
         import { ReactComponent as Commandes} from '../img/icons/delivery-package.svg'
         import { ReactComponent as Livreurs} from '../img/icons/delivery-man-with-package.svg'
         import { ReactComponent as Livree} from '../img/icons/shipped.svg'
         import { ReactComponent as Logout} from '../img/icons/logout.svg'
         import { ReactComponent as Ordre } from '../img/icons/purchase-order.svg'
         import { ReactComponent as Notificon } from '../img/icons/notification-bell-outline-interface-symbol.svg'
import { logout } from '../../actions/auth'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
const Menu = ({logout}) => {

    return (
        <Header>
        <LinkLogo to="/" style={{ float: "left"}}>
          <p>3DSTOR<span style={{color:"#F68B1E"}}>E</span></p>
        </LinkLogo>
        <Notification>
           <Notificon height="20" width="20" fill="black"/>
        </Notification>
        <NotiNumber>11</NotiNumber>
        <Notificordre>
           <Ordre height="20" width="20" fill="black"/>
        </Notificordre>
        <NotiNumberordre>9</NotiNumberordre>
        <Menu1> 
          <SidebarInner>
            <Li>
              <ImgUser style={{marginRight: "10px"}}>
              <img src="http://192.168.43.182:3000/public/9b572e5d-e6ba-491c-9889-305282121e5d-84711165_2818946121492211_5344013586328977408_n(1).jpg"
               alt="user" style={{
                width: "40px",
                borderRadius: "50%",  
                height: "40px"
               }}/>
              </ImgUser>
              <Span>BENDARBI HICHAM</Span>
            </Li> 
            <Links to={`/products`}><Li><Products width="18" height="18" fill="#FFF" style={{marginRight: "10px"}}/><Sp>Tous les produits</Sp></Li></Links>
            <Links to={`/administration/newProduct`}><Li><Add width="18" height="18" fill="#FFF" style={{marginRight: "10px"}}/><Sp>Noveau produit</Sp></Li></Links>
            <Links to={`/admin/tickets/list-all`}><Li><Categorys width="18" height="18" fill="#FFF" style={{marginRight: "10px"}}/><Sp>Tous les categories</Sp></Li></Links>
            <Links to={`/admin/settings/`}><Li><Customer width="18" height="18" fill="#FFF" style={{marginRight: "10px"}}/><Sp>Tous les clients</Sp></Li></Links>
            <Links to={`/admin/settings/`}><Li><Employe width="18" height="18" fill="#FFF" style={{marginRight: "10px"}}/> <Sp>Tous les employes</Sp></Li></Links>
            <Links to={`/admin/settings/`}><Li><Statistic width="18" height="18" fill="#FFF" style={{marginRight: "10px"}}/><Sp>Les statistiques</Sp></Li></Links>
            <Links to={`/admin/settings/`}><Li><PanierL width="18" height="18" fill="#FFF" style={{marginRight: "10px"}}/><Sp>Liste panier</Sp></Li></Links>
            <Links to={`/admin/settings/`}><Li><Commandes width="18" height="18" fill="#FFF" style={{marginRight: "10px"}}/> <Sp>Liste des commandes</Sp></Li></Links>
            <Links to={`/admin/settings/`}><Li><Livree width="18" height="18" fill="#FFF" style={{marginRight: "10px"}}/><Sp>Commndes livrees</Sp></Li></Links>
            <Links to={`/admin/settings/`}><Li><Livreurs width="18" height="18" fill="#FFF" style={{marginRight: "10px"}}/><Sp>Nos livreurs</Sp></Li></Links>  
            <Links to={`/admin/settings/`} href="/" onClick={logout}><Li><Logout width="18" height="18" fill="#FFF" style={{marginRight: "10px"}}/> Deconnexion</Li></Links> 
            {/* {MenuFelds.map(field=> 
              <Links to={`${field.link}`}><Li>{field.text}</Li></Links> 
            )}  */}
          </SidebarInner>
        </Menu1>
      </Header>
    )
}  

Menu.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default  connect(mapStateToProps, {logout}) (Menu)