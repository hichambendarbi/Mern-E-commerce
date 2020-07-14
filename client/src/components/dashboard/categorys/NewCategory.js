import React, {Fragment, useState, useEffect} from 'react'
import PopUp from '../../commons/PopUp'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addNewCategory,getCategorys } from '../../../actions/category'
import { Input } from '../Assets'

const NewCategory = ({addNewCategory, getCategorys,category:{categorys}, close}) => {
    const [formData, setFormData] = useState({
        categoryName: ''
    })
    useEffect(()=> {
        getCategorys()
    },[getCategorys])  
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const submitAdd = e => {
    addNewCategory(formData)
    getCategorys();
    }
    return ( 
            <Fragment>
                    <PopUp title="Ajout de noveau categorie" canCancel onCancel={close} canConfirm onConfirm={e =>submitAdd(e)}>
                      <Input placeholder="Nom categorie" name="categoryName" value={formData.categoryName} onChange={e=> onChange(e)}/>
                    </PopUp>
            </Fragment>   
    )
}
NewCategory.propTypes = {
    addNewCategory: PropTypes.func.isRequired,
    getCategorys: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    category: state.category
})

export default connect(mapStateToProps, {addNewCategory, getCategorys}) (NewCategory) 
