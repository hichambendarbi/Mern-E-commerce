import React, {useState} from 'react'
import { ContainerInputs, Button } from '../../../commons/Assets'
import FloatingLabelInput from '../../../commons/FloatingLabelInput'
import { addNewColor } from '../../../../actions/product'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


const NewColor = ({addNewColor, product:{product}}) => {
   
        const [formData, setFormData] = useState ({ 
            colorName:'',
            quantityColor:'',
            priceColor:''

        });
        
        const {
            colorName,
            quantityColor,
            priceColor
          } = formData;

    const onChangeAdd = e => setFormData({...formData, [e.target.name]:e.target.value})
    const onSubmit = (e) => {
          e.preventDefault()
          addNewColor(formData, product._id)
    }
    return (
        <ContainerInputs>
            <FloatingLabelInput placeholder="Coleur" name="colorName" value={colorName}  onChange={e => onChangeAdd(e)}/>
            <FloatingLabelInput placeholder="Quantite" name="quantityColor" value={quantityColor}  onChange={e => onChangeAdd(e)}/>
            <FloatingLabelInput placeholder="prix" name="priceColor" value={priceColor}  onChange={e => onChangeAdd(e)}/>
             <Button onClick={e=> onSubmit(e)}>Ajouter</Button>
       </ContainerInputs>
    )
}

NewColor.propTypes = {
    addNewColor: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    product: state.product
})

export default connect(mapStateToProps , {addNewColor})(NewColor)


