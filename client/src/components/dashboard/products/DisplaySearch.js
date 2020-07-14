import React, { useEffect, useState, Fragment} from 'react'
import {ContainerArticle,
       ContainerProd,
       ContainerFilter,
       TitlAndFilter,
       Title,
       Tri,
       ResutlatNumb,
       ContainerProduits,
       ProductCard,
       DivImage,
       LinkToProd,
       ImgProd,
       DivInfo, 
       ExporInfo,
       DescriptionProd,
       Prc,
       DiscountPrc, 
       Old,
       Pourc,
       DivFeedback, 
       DivStars, 
       DivBtn,
       BtnAddToCard,
       ButtonT,
       SpanT,
       Mark,
      InputOpt,
      GroupOptions
        } from '../Assets' 

import DropBackAll from '../../commons/DropBackAll'
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import PopUp from '../../commons/PopUp'
        // import { Stars, Down, Up, Filter } from "../../img";
import { ReactComponent as Down } from "../../img/icons/arrow-down-sign-to-navigate.svg"; 
import { ReactComponent as Up } from "../../img/icons/navigate-up-arrow.svg"; 
import { ReactComponent as Stars } from "../../img/icons/star.svg"; 
import { ReactComponent as Filter } from '../../img/icons/filter.svg';
// import { ReactComponent as Spinner } from '../../img/icons/animation.gif'
// import  Spinner  from '../../img/icons/spinner'
import { addTocartLocal, getTocartLocal, getProductCartById, addToCart, getAllCart } from '../../../actions/cart' 
// Redux importation
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getAllProduct, getId } from '../../../actions/product'

const cartSize = localStorage.getItem('ProductCart')
? JSON.parse(localStorage.getItem('ProductCart'))
: []

const DisplaySearch = ({auth:{isAuthenticated, loading}, getAllProduct, product:{products},
                        getId, getTocartLocal, addTocartLocal, getProductCartById, getAllCart,
                        addToCart, cart:{cart, leng, tocart}}) => {
          const [open, setOpen] = useState(false)
          const [title, setTitle] = useState('')
          const [size, setSize] = useState(false)
          const [dataform, setProduct] = useState({
            product: {}
          })
          // const [dataSize, setDataSize] = useState({ 
          //   sizeobj: {}
          // })
          const [pI, setNameProduct] = useState('')
          const [sI, setNameSize] = useState('')
          const [dataCart, setTableCart] = useState(cartSize)

          const {
            product
          } = dataform
         
           const showHide = () => {
            setOpen(!open)
            handleClose()
           }

           const hide = () => {
            setOpen(!open)
           }

          // Popup Product cart operations
          const handleOpen = (id, pro) => {
            setOpen(!open)
            setProduct({
              product: pro
            })
            
            Prods.map(prod=> prod._id===id && (
              setTitle(prod.productName) 
            ))
            if(pro.size.length> 0) {
              setSize(true)
            } else {
              setSize(false)
              // pro.size.map(test=> test._id===id && setNameSize(test._id)) 
              setNameProduct(pro._id) 
              setNameSize("")
            }
          }

          const handleClose = async () => { 
            setOpen(!open)
            const size = { sI, pI }
            setTableCart([...dataCart, size])
            if(isAuthenticated) {
             await addToCart(size)
              getAllCart()
            }
            // getTocartLocal()
          }
                    // get all product with search
                    useEffect(()=> {
                      getAllProduct()
                      if(!isAuthenticated){
                        addTocartLocal(dataCart)
                      }
                      getTocartLocal()
                      }, [getAllProduct, dataCart, getAllCart])

            // Select Size from product popup
  const selectSize = (id) => {
    product.size.map(test=> test._id!==id ? document.getElementById(test._id).style.borderColor= "#ededed" :
    document.getElementById(test._id).style.borderColor= "orange")
    
    product.size.map(test=> test._id!==id ? document.getElementById(test._id).style.color= "black" :
    document.getElementById(test._id).style.color= "orange"
    )
    // product.size.map(test=> test._id===id &&  setDataSize({sizeobj: test}))
    product.size.map(test=> test._id===id && setNameSize(test._id))
    setNameProduct(product._id)
  }
    // Action dialog buttons 
  const dialgAction = (
  <DialogActions>
    <Button onClick={()=> showHide()} color="primary" id="prs">
     Poursuivre vos achats
    </Button>
    <Button onClick={()=> handleOpen()} color="primary">
     Finaliser la commande
    </Button>
  </DialogActions>
  )

  // Button Add to cart
  const btnToCart = (
    <DialogActions>
    <Button onClick={()=> handleClose()} color="primary" style={{width: "100%"}}>
     AJOUTER AU PANIER
    </Button>
  </DialogActions>
  )
            // Search State Props
            const test = localStorage.getItem('category');
            const [dataSearch, setdataSearch] = useState ({
                categoryName: test ? test : ''
               })
               const [data, setData]= useState({
                name: "hicham bendarbi"
                })
    
    let Prods=[];
    if (products === null || loading) {
      console.log("Spinner")
    }else{
      Prods = products.filter(
    (ProdF) => {
      const query1 = dataSearch.categoryName.toLowerCase();
     return ProdF.categoryName.toLowerCase().indexOf(query1)>=0 
    }
      );
    }

    const [Hover, setHover] = useState({
        colorhover: "black",
        colorhover1: "black"
      })

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
    return (
        <ContainerArticle>
            <ContainerFilter></ContainerFilter>
            {open ? <PopUp title={title} canCancel onCancel={()=> hide()}> 
             Veuillez sélectionner une option
             {product.size.length>0 ? (
                                    <GroupOptions>
                                       {product.size.map(test=> (
                                            <InputOpt id={test._id} onClick={()=> selectSize(test._id)} >{test.sizename}</InputOpt>
                                       ))}
                                    </GroupOptions>
          ) : null}
             {!size ? <Fragment>{dialgAction}</Fragment> : <Fragment>{btnToCart}</Fragment>} 
            </PopUp> : null }
            <ContainerProd>
                <TitlAndFilter>
                    <Title>Téléphone & Tablette</Title>
                    <Tri>
                    <ButtonT  style={{color:Hover.colorhover}}
                   onMouseOver={()=> Over()} onMouseOut={()=> Out()} className="mainmenu" >
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
                <SpanT><Filter width="16px" height="16px" fill="black"/> Les plus demandés</SpanT>
                <ul className="submenu">
                <li><Link to="/administration/newProduct">Nouvel arrivage</Link></li> 
                <li><a href="!#">Prix croissant</a></li>
                <li><a href="!#">Prix décroissant</a></li>
                <li><a href="!#" id="Deconnexion">Les mieux notés</a></li>
              </ul>
            </li>
        </ButtonT>
                    </Tri>
                </TitlAndFilter>
                <TitlAndFilter>
                    <ResutlatNumb>1502034 résultats</ResutlatNumb>
                </TitlAndFilter>
                {/* Display all Product searching */}
                <ContainerProduits> 
                    {loading ? "Spinner" : (
                        Prods.map(prod=> (
                            <ProductCard>  
                            <LinkToProd to="/displayproduct" onClick={()=> getId(prod)}>
                              <DivImage>
                                  {prod.image.length>0 ? <ImgProd src={prod.image[0].productImg} alt="test"/> : <ImgProd src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/968392/1.jpg?9434" alt="test"/>}
                              </DivImage>
                              <DivInfo>
                                  <ExporInfo>
                                     Expédié depuis l'étranger
                                  </ExporInfo>
                                  <DescriptionProd>
                                     {prod.productName}
                                  </DescriptionProd>
                                  <Prc>
                                      {prod.priceS} Dhs
                                  </Prc>
                                  <DiscountPrc>
                                      <Old>{prod.old ? prod.old : ''} Dhs</Old>
                                       <Pourc>{-`${parseInt(prod.discount) ? parseInt(prod.discount) : 0}`}%</Pourc>
                                  </DiscountPrc>
                                  <DivFeedback>
                                      <DivStars>
                                          <Stars height="12" width="12" fill='#f68b1e'/>
                                          <Stars height="12" width="12" fill='#f68b1e'/>
                                          <Stars height="12" width="12" fill='#f68b1e'/>
                                          <Stars height="12" width="12" fill='#f68b1e'/>
                                          <Stars height="12" width="12" fill='#f68b1e'/>
                                      </DivStars> <Mark> {`(0 avis)`}</Mark>
                                  </DivFeedback>
                                  </DivInfo>
                                  </LinkToProd> 
                                  <DivBtn>
                                    <BtnAddToCard onClick={()=> handleOpen(prod._id, prod)}>Ajouter au panier</BtnAddToCard>
                                  </DivBtn>
                        </ProductCard> 
                        )) 
                    )
 }
                </ContainerProduits>
            </ContainerProd>
        </ContainerArticle>
       
    )
}

DisplaySearch.propTypes = {
    getAllProduct: PropTypes.func.isRequired,
    getId: PropTypes.func.isRequired,
    addTocartLocal: PropTypes.func.isRequired,
    getTocartLocal: PropTypes.func.isRequired,
    getProductCartById: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    getAllCart: PropTypes.func.isRequired
}
 
const mapStateToProps = state => ({
    product: state.product, 
    cart: state.cart,
    auth: state.auth
})

export default  connect(mapStateToProps, {getAllProduct, getId, addTocartLocal,
                       getTocartLocal, getProductCartById, addToCart, getAllCart}) (DisplaySearch)
