import React, {Fragment, useState, useEffect} from 'react'
import { Container,
    HeaderNewProduct,
    FormNewProduct,
    StepperContainer,
    StepperButton,
    Line,
    SpanNavigation
   } from '../Assets'
import  PopUp  from '../../commons/PopUp'
import DropBackAll from '../../commons/DropBackAll'
import NewColor from './detailsProduct/NewColor'
import NewSize from './detailsProduct/NewSize'
import NewPhotos from './detailsProduct/NewPhotos'

//Redux import
import {getProduct} from '../../../actions/product'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'



const CompletProduct = ({ product:{product,loading}, getProduct }) => {

    // Get product by Id in localeStorage
    const idProduct = localStorage.getItem('idProduct')
    console.log(idProduct)
    useEffect(() => {
     getProduct(idProduct)
    }, [getProduct]) 
    
    console.log(product)
    const [isOpen, setIsOpen] = useState(false)
    const [popUpActive, setPopUp] = useState({
        active:"Ajouter photos"
    })

   const PopUpColor = (
    <PopUp title="Ajouter tailles" canCancel onCancel={()=> OpenClosePopUp()}>
       <NewColor/>
    </PopUp>
   )
   const PopUpSize = ( 
    <PopUp title="Détails produits" canCancel onCancel={()=> OpenClosePopUp()}>
      <NewSize/>
    </PopUp>
   )
   const PopUpPhotos = (
    <PopUp title="Ajouter photos" canCancel onCancel={()=> OpenClosePopUp()}>
       <NewPhotos/>
    </PopUp>
   )
   
   
  // Display All size from product 
   const TableSize = (
    <table className="fl-table">
    <thead>
    <tr>
        <th>Labele</th>
        <th>Unite</th>
        <th>Quantite</th>
        <th>Prix</th>
        <th>Operations</th>
    </tr>
    </thead>

{product===null ? <tbody>null</tbody> : (
                      <tbody>
                        {product.size.length > 0 ? (<Fragment> 
                          {product.size.map(test => (
                <tr key={test._id}>
                <td>{test.sizename}</td>
                <td>{test.unite}</td>
                <td>{test.quantitySize}</td> 
                <td>{test.priceSize}</td> 
                <td style={{
                               display: "flex",
                               justifyContent: "space-evenly"
                       }}>
                           <button style={{
                               border: "none",
                               color: "#28a745",
                               background: "transparent",
                               fontWeight:700,
                               cursor: "pointer"
                               }}>Modifier</button>

                           <button style={{
                               border: "none",
                               color: "#dc3545",
                               background: "transparent",
                               fontWeight:700,
                               cursor: "pointer"
                           }}>Supprimer</button>
                       </td>
                </tr>
                          ))}
                      </Fragment>) : (<h4>Ajouter des tailles</h4> )}
                      </tbody>)}
</table>
   )

   const TableColor = (
    <table className="fl-table">
    <thead>
    <tr>
        <th>Coleur</th>
        <th>Quantite</th>
        <th>Prix</th>
        <th>Operations</th> 
    </tr>
    </thead>

{product===null ? <tbody>null</tbody> : (
                      <tbody>
                        {product.color.length > 0 ? (<Fragment> 
                          {product.color.map(test => (
                <tr key={test._id}>
                <td>{test.colorName}</td>
                <td>{test.quantityColor}</td>
                <td>{test.priceColor}</td> 
                <td style={{
                               display: "flex",
                               justifyContent: "space-evenly"
                       }}>
                           <button style={{
                               border: "none",
                               color: "#28a745",
                               background: "transparent",
                               fontWeight:700,
                               cursor: "pointer"
                               }}>Modifier</button>

                           <button style={{
                               border: "none",
                               color: "#dc3545",
                               background: "transparent",
                               fontWeight:700,
                               cursor: "pointer"
                           }}>Supprimer</button>
                       </td>
                </tr>
                          ))}
                      </Fragment>) : (<h4>Ajouter des coleurs</h4> )}
                      </tbody>
)}
  </table>
   )

   // Display All images from product
   const TablePhotos = (
    <table className="fl-table">
    <thead>
    <tr>
        <th>Image</th>
        <th>Coleur</th> 
        <th>Quantite</th> 
        <th>Prix</th>

    </tr>
    </thead>
{product===null ? <tbody>null</tbody> : (
                <tbody>
                    {product.image.length > 0 ? (<Fragment>
                        {product.image.map(img=> (
                            <tr key={img._id}>
                                <td>{img.productImg}</td>
                                <td>{img.colorr}</td>
                                <td>{img.quantityColor}</td>
                                <td>{img.priceColor}</td>
                            </tr>
                        ))}
                    </Fragment>) : <h1>Ajouter des images</h1> }
                </tbody>
      )}
</table>
   )

    const OpenClosePopUp = (idPopUp) => {
        setIsOpen(!isOpen)
        if(idPopUp==="Détails produits") {
            setPopUp({
                active: "Détails produits"
            })
        } 

        if(idPopUp==="Ajouter photos") {
            setPopUp({
                active: "Ajouter photos"
            })
        }
        
        if(idPopUp==="Ajouter tailles") {
            setPopUp({
                active: "Ajouter tailles"
            })
        }
    }     
    const NavigateTable = (idTable) => {
        if(idTable==="Détails produits") {
            setPopUp({
                active: "Détails produits"
            })
        } 

        if(idTable==="Ajouter photos") {
            setPopUp({
                active: "Ajouter photos"
            })
        }
        
        if(idTable==="Ajouter tailles") {
            setPopUp({
                active: "Ajouter tailles"
            })
        }
    } 



    return (
        <Fragment>
            {isOpen && <DropBackAll/>}
            {isOpen && popUpActive.active==="Détails produits" &&  PopUpColor }
            {isOpen && popUpActive.active==="Ajouter photos" &&  PopUpPhotos }
            {isOpen && popUpActive.active==="Ajouter tailles" &&  PopUpSize }

        <Container>
            <HeaderNewProduct>Completer la procedure d'ajout</HeaderNewProduct>
            <FormNewProduct>
                <StepperContainer>
                    <StepperButton onClick={(idPopUp)=> OpenClosePopUp("Détails produits")}>+</StepperButton>
                    <SpanNavigation onClick={idTable=> NavigateTable("Détails produits")}>Ajouter des details</SpanNavigation>
                    <Line/>
                    <StepperButton onClick={(idPopUp)=> OpenClosePopUp("Ajouter photos")}>+</StepperButton>
                    <SpanNavigation onClick={idTable=> NavigateTable("Ajouter photos")}>Ajouter des photos</SpanNavigation>
                    <Line/>
                    <StepperButton onClick={(idPopUp)=> OpenClosePopUp("Ajouter tailles")}>+</StepperButton>
                    <SpanNavigation onClick={(idTable)=> NavigateTable("Ajouter tailles")}>Ajouter des tails</SpanNavigation>
                </StepperContainer>
                {popUpActive.active==="Ajouter tailles" && TableSize}
                {popUpActive.active==="Détails produits" && TableColor}
                {popUpActive.active==="Ajouter photos" && TablePhotos}
            </FormNewProduct>

        </Container>
        </Fragment>
    )
}

CompletProduct.propTypes  = {
    getProduct:PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    product : state.product
})

export default connect( mapStateToProps, {getProduct} ) (CompletProduct)
