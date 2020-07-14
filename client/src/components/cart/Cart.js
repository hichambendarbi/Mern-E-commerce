import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { ContainerCart, NumProdCart, HeaderProduct, HeaderQuantity,
         Header, Price, SousTotal, FormCart, SectionCart, ContainerImg,
         LinkProduct, ImgPro, ItemInfo, Mark, ProductDes, QauntityDropDiv,
         ProductSize, PriceUni, PriceNow, SousTotalDiv,ContainerTotal,
         LabelTTC, TTC, PriceShipping, ContainerBtn, LinkCart, LinkCart1,Select } from './Assets'
import { updateCart } from '../../actions/cart'

const Cart = ({auth:{isAuthenticated, loading}, updateCart, cart:{cartall}}) => {
   const [formData, setFormData] = useState({
    idProduct:"5f09afd52aef5b17acc2b789",
    productBrand:"Fashion",
    productName:"Fashion Fashion men's casual sneakers-black",
    quantity:100,
    productPrice:199,
    quantityCart:1,
    imgProduct:"http://192.168.43.182:3000/public/7283f0a7-e30b-4412-8598-c37426df572b-spa.jpg"
   })

   const {
    idProduct,
    productBrand,
    productName,
    quantity,
    productPrice,
    quantityCart,
    imgProduct
   } = formData

   const Onsele = (e, test) =>{
    e.preventDefault() 
    var dropd = document.getElementById(test); 
    var options = dropd.options;
    var id = options[options.selectedIndex].id;
    if(id===test){
        var value = options[options.selectedIndex].value;
        var text = options[options.selectedIndex].text;
        console.log(id, ":TEST:", text)
        console.log("fromData",formData)
            setFormData({
                ...formData,
                quantityCart: text
              })
                updateCart(test, formData)

    }

    }; 

   const onChange = e => {setFormData({ ...formData, [e.target.name]: e.target.value })}
    // Amount All Product in Cart
       var amount = 0 
       for(var i=0; i<cartall.length; i++){
           amount= amount + ((cartall[i].productPrice)*(cartall[i].quantityCart))
       }
    return ( 
        <ContainerCart>
            <NumProdCart>Panier ({cartall.length} articles)</NumProdCart>
            <Header>
                <HeaderProduct>Article</HeaderProduct>
                <HeaderQuantity>QUANTITÉ</HeaderQuantity>
                <Price>PRIX UNITAIRE</Price>
                <SousTotal>Sous Total</SousTotal>
            </Header>
            {cartall.map(mycart=> (
            <FormCart key={mycart._id}>      
            <SectionCart>
                <ContainerImg>
                    <LinkProduct to='/pro' >
                        <ImgPro src={mycart.imgProduct} alt="test" />
                    </LinkProduct>
                </ContainerImg>
                {/* Info Product on Cart */}
                <ItemInfo>
                  <Mark>Marque: {mycart.productBrand}</Mark>
                  <ProductDes>{mycart.productName}</ProductDes>
                  <ProductSize>Taille: Size</ProductSize>
                </ItemInfo>
                {/* Quantity Container */} 
                <QauntityDropDiv>
                    <Select id={mycart._id} name="quantityCart" value={mycart.quantityCart} onChange={e=> Onsele(e, mycart._id)}>
                        <option value="1" id={mycart._id} >1</option> 
                        <option value="2" id={mycart._id} >2</option>
                        <option value="3" id={mycart._id} >3</option>
                        <option value="4" id={mycart._id} >4</option>
                    </Select>
                </QauntityDropDiv>
                <PriceUni>
                    <PriceNow>{mycart.productPrice} Dhs</PriceNow>
                </PriceUni>
                {/* Sous Total Product */}
            <SousTotalDiv>{mycart.productPrice*mycart.quantityCart} Dhs</SousTotalDiv>
            </SectionCart>
            </FormCart>
            ))}
            {/* Container Total panier */}
            <ContainerTotal>
               <LabelTTC>Total TTC: </LabelTTC>
               <TTC>{amount} Dhs</TTC>
            </ContainerTotal>
            <PriceShipping>Frais de livraison non inclus pour le moment</PriceShipping>
            {/* Buttons Cart */}
            <ContainerBtn>
                <LinkCart>Poursuivre vos achats</LinkCart>
                <LinkCart1>Poursuivre vos achats</LinkCart1>
            </ContainerBtn>
        </ContainerCart>
    )
}

Cart.propTypes = {
    updateCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    cart: state.cart,
    auth: state.auth
})

export default connect(mapStateToProps, {updateCart}) (Cart) 
