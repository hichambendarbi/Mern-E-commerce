import React, {useState} from 'react'
import { ContainerInputs, Button } from '../../../commons/Assets'
import FloatingLabelInput from '../../../commons/FloatingLabelInput'
import { addNewSize } from '../../../../actions/product'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


const NewSize = ({addNewSize}) => {
    const idProduct = localStorage.getItem('idProduct')
    const [formData, setFormData] = useState ({ 
        sizename:'',
        unite:'',
        quantitySize:'',
        priceSize:''
    });
    
    const {
        sizename,
        unite,
        quantitySize,
        priceSize
      } = formData;

    const onChangeAdd = e => setFormData({...formData, [e.target.name]:e.target.value})
    const onSubmit = (e) => {
          e.preventDefault()
          addNewSize(formData, idProduct)
    }
    return (
        <ContainerInputs>
             <form onSubmit={e=> onSubmit(e)}>
            <FloatingLabelInput placeholder="Lebele" name="sizename" value={sizename}  onChange={e => onChangeAdd(e)}/>
            <FloatingLabelInput placeholder="Unite" name="unite" value={unite}  onChange={e => onChangeAdd(e)}/>
            <FloatingLabelInput placeholder="Quantite" name="quantitySize" value={quantitySize}  onChange={e => onChangeAdd(e)}/>
            <FloatingLabelInput placeholder="Prix" name="priceSize" value={priceSize}  onChange={e => onChangeAdd(e)}/>
             <Button type="submit">Ajouter</Button>
             </form>
       </ContainerInputs>
    )
}

NewSize.propTypes = {
    addNewSize: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    product: state.product
})

export default connect(mapStateToProps , {addNewSize})(NewSize)

