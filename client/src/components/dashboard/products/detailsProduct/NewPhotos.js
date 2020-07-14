import React, {useState} from 'react'
import { ContainerInputs, Button} from '../../../commons/Assets'
import FloatingLabelInput from '../../../commons/FloatingLabelInput'
import { addNewPhoto } from '../../../../actions/product'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


const NewPhotos = ({addNewPhoto}) => {
    const idProduct = localStorage.getItem('idProduct')
    
  
    const [formData, setFormData] = useState({
        productImg: '',
        colorr: '',
        quantityColor: '',
        priceColor: ''
    })
   
    const {colorr, quantityColor, priceColor} = formData

    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})
 
    const onSubmit = (e) => {
          e.preventDefault()
           // Create an object of formData  
           var data = new FormData();
    	const selectedFile = e.target.input.files[0];
        var data = new FormData();
        data.append('productImg', selectedFile); 
        data.append('colorr', colorr);
        data.append('quantityColor', quantityColor);
        data.append('priceColor', priceColor);
        addNewPhoto(data, idProduct);
    } 
    return (
        <ContainerInputs>
        <form onSubmit={e=> onSubmit(e)}>
            <input placeholder="Lebele" id="file" type="file" name="input"/>
            <FloatingLabelInput placeholder="Coleur.." name="colorr" value={colorr} onChange={e=> onChange(e)}/>
            <FloatingLabelInput placeholder="Quantite.." name="quantityColor" value={quantityColor} onChange={e=> onChange(e)}/>
            <FloatingLabelInput placeholder="Prix de coleur.." name="priceColor" value={priceColor} onChange={e=> onChange(e)}/>
            <Button type="submit">Ajouter</Button>
       </form>
       </ContainerInputs>
    ) 
}

NewPhotos.propTypes = {
    addNewPhoto: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    product: state.product
})

export default connect(mapStateToProps , {addNewPhoto})(NewPhotos)

