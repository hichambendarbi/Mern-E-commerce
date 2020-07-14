import React,{Fragment, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Logo} from '../commons/Assets'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
import { getTocartLocal, getProductCartById, getAllCart } from '../../actions/cart'
import { getProduct } from '../../actions/product'
import {ContainerSearch,
        InputClearDiv,
        Header,
        SidbarToggle, 
        SidbarMenu,
        Ul,
        Button ,
        Span,InputSearch,
        ButtonCancel,
        ButtonSearchMobile, 
        ButtonSearch,SearchIconDiv,
        InputSearchDiv,
        CartCounter} from './Assets'     
// import { User, Search, Cancel, Right, Usercheck, Down, Up } from "../img";
import { ReactComponent as Shopping } from "../img/icons/commerce-and-shopping.svg";
import { ReactComponent as User } from "../img/icons/user.svg";
import { ReactComponent as Search } from "../img/icons/search.svg";
import { ReactComponent as Cancel } from "../img/icons/shapes-and-symbols (4).svg";
import { ReactComponent as Right } from "../img/icons/right-arrow.svg";
import { ReactComponent as Usercheck } from "../img/icons/user-check.svg";
import { ReactComponent as Down } from "../img/icons/arrow-down-sign-to-navigate.svg"; 
import { ReactComponent as Up } from "../img/icons/navigate-up-arrow.svg"; 

// Star SideBar and Navbar header
const Sidebar = ({ auth: { isAuthenticated, loading, user}, getTocartLocal,
                   getProductCartById, getAllCart, cart:{cart, leng, cartids, cartall} , logout }) => {

const labels0 = ["Vos commandes", "Votre liste d'envies"]
const labels = ["Iimprimantes 3D", "Pieces et Reparations", "Impression projet", "Ordinateurs d'occasion"]

// getProductCartById() 
  
  useEffect(() => {
      getTocartLocal()
      getProductCartById(isAuthenticated)
  }, [getTocartLocal, getProductCartById])
  
  if(cartall.length==0){
    getAllCart()
  }
 

    const [Hover, setHover] = useState({
      colorhover: "black",
      colorhover1: "black",
      search: "",
    })

    const [show, showHide] = useState(false)

    const Over = () => {
      setHover({
        colorhover: "#ff8100"
      }) 
    }
    const Out = () => {
      setHover({
        colorhover: "black"
      })
    }
    const Over1 = () => {
      setHover({
        colorhover1: "#ff8100"
      }) 
    }
    const Out1 = () => {
      setHover({
        colorhover1: "black"
      })
    }

    const cancelSearch = () => {
      setHover({
        search:""
      })
    
        showHide(false)
      
    } 

    const onChange = e => {
      setHover({...Hover, [e.target.name]:e.target.value})

    } 

    const handleInput = () => {
      if(Hover.search!=="") {
        showHide(true)
      } 
      if(Hover.search==="") {
        showHide(false)
      } 
    }

    // Function search globale
    const onSearch = () => {
      localStorage.setItem('category', Hover.search ? Hover.search : '');
      window.location='/searchArticle';
    }

    

    const authLinks = (
      <Fragment>
        <Button style={{color:Hover.colorhover}} onMouseOver={()=> Over()} onMouseOut={()=> Out()}  id="devicePhone">
          <Link to="/administration">
                      <Usercheck height="20" width="20" fill={Hover.colorhover} style={{
                position: "absolute",
                width: "18px",
                top: "8.034px",
                left: "13px",
                opacity: "1",
                transition: "transform"
          }}/>
          </Link>
       </Button>
          <Button  style={{color:Hover.colorhover}} onMouseOver={()=> Over()} onMouseOut={()=> Out()} className="mainmenu">
            <li>
            <Down height="20" width="20" fill="black" style={{
                  position: "absolute",
                  width: "18px",
                  top: "8.034px",
                  left: "13px",
                  transition: "transform"
            }} className="hov"/>
            <Up height="20" width="20" fill="black" style={{
                  position: "absolute",
                  width: "18px",
                  top: "8.034px",
                  left: "13px",
                  transition: "transform"
            }} className="hov1"/>
                <Span>Bonjour, {user && user.cname}</Span>
                <ul className="submenu">
                <li><Link to="/administration/newProduct">Votre Compte</Link></li>
                <li><a href="!#">Vos Commandes</a></li>
                <li><a href="!#">Vos listes d'envies</a></li>
                <li><a href="/" onClick={logout} id="Deconnexion">Déconnexion</a></li>
              </ul>
            </li> 
        </Button>
      </Fragment>
    )

    const guestLinks = (
<Fragment>
<Button  style={{color:Hover.colorhover}} onMouseOver={()=> Over()} onMouseOut={()=> Out()} id="devicePhone">
  <Link to="/login">
          <User height="20" width="20" fill={Hover.colorhover} style={{
                position: "absolute",
                width: "18px",
                top: "8.034px",
                left: "13px",
                opacity: "1",
                transition: "transform"
          }}/>
  </Link>
</Button>

<Button className="mainmenu" style={{color:Hover.colorhover}} onMouseOver={()=> Over()} onMouseOut={()=> Out()}>
    <li>
    <User height="20" width="20" fill={Hover.colorhover} style={{
                  position: "absolute",
                  width: "18px",
                  top: "8.034px",
                  left: "13px",
                  opacity: "1",
                  transition: "transform"
            }} />
      <Span >Se connecter</Span>
      <ul className="submenu">
        <li><Link to="/login">Votre Compte</Link></li>
        <li><a href="!#">Vos Commandes</a></li>
        <li><a href="!#">Vos listes d'envies</a></li>
      </ul>
    </li>
  </Button>
</Fragment>
    )

    return ( 
<Fragment>
<Header id="idh">
  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
  
  <div href="#!" style={{float:"right", padding:"1em", fontWeight: "900", color:"black", textDecoration:"none"}}>
    {/* <input placeholder="serach..." /> */}
    <ContainerSearch position="absolute">
     <SearchIconDiv>
       <Search height="20" width="20" fill="#928f8f"/>
     </SearchIconDiv>
     <InputSearchDiv>
      <InputSearch placeholder="Cherchez sur 3DSTORE.." name="search" value={Hover.search} onChange={e=> onChange(e)} onKeyUp={()=> handleInput()}/>
     </InputSearchDiv>
     <InputClearDiv>
       <ButtonCancel  onClick={()=> cancelSearch()}>
         {show && <Cancel height="12" width="12" fill="#928f8f"/>}
       </ButtonCancel>
       <ButtonSearchMobile onClick={()=> onSearch()}>
         <Right height="12" width="12" fill="#928f8f"/>
       </ButtonSearchMobile>
     </InputClearDiv>
     <ButtonSearch onClick={()=> onSearch()}>
       RECHERCHER
     </ButtonSearch>
    </ContainerSearch>

    { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment> ) }

    <CartCounter>{isAuthenticated ? cartall.length : leng}</CartCounter>
    <Link to="/cart">
    <Button style={{color:Hover.colorhover1}} onMouseOver={()=> Over1()} onMouseOut={()=> Out1()}>
        <Shopping height="20" width="20" fill={Hover.colorhover1} style={{
              position: "absolute",
              width: "18px",
              top: "8.034px",
              left: "13px",
              opacity: "1",
              transition: "transform"
        }}/> 
        <Span>Panier</Span>
    </Button>
    </Link>
    
  </div>
 
  <Logo to='/' style={{textDecoration:"none"}}>3DSTOR<span style={{color:"#ff8100"}} >E</span></Logo>
  <SidbarToggle for="openSidebarMenu" className="sidebarIconToggle">
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </SidbarToggle>
  
     
  <SidbarMenu id="sidebarMenu">  
    <Ul className="sidebarMenuInner">
      <li><Link to="/login" style={{color:"#ff8100"}}>VOTRE COMPTE 3DSTORE</Link></li>
      { labels0.map((text) => (<li><a a href="#!">{text}</a></li>)) }
    </Ul>
    <Ul className="sidebarMenuInner">
      <li><a href="#!" style={{color:"#ff8100"}}>NOS CATEGORIES</a></li>
      { labels.map((text) => (<li><a a href="#!">{text}</a></li>)) }
    </Ul>
  </SidbarMenu>
</Header>
  </Fragment>
    )
}
// End SideBar and Navbar header


Sidebar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getTocartLocal: PropTypes.func.isRequired,
  getProduct: PropTypes.func.isRequired,
  getProductCartById: PropTypes.func.isRequired,
  getAllCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ 
  auth: state.auth,
  cart: state.cart,
  product: state.product
})

export default  connect(mapStateToProps, {getTocartLocal, getProductCartById, getAllCart, logout, getProduct}) (Sidebar)




