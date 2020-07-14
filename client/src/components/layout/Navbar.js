import React, { Fragment, useEffect } from 'react'
import {useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Menu from '../dashboard/Menu'
import {getProductCartById} from '../../actions/cart'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Navbar = ({getProductCartById , auth: { isAuthenticated, loading, user}})  => {
  let location = useLocation();
  // useEffect(()=> {
   
  // }, [getProductCartById])
    return (
    <Fragment>
             {location.pathname==="/administration" ||
             location.pathname==="/products" ||
             location.pathname==="/administration/newProduct" ||
             location.pathname==="/administration/complet-product-adding" ||
             location.pathname==="/administration/updateProduct"
             ? <Menu/> : <Sidebar/>}
    </Fragment>
    )
}

Sidebar.propTypes = {
  getProductCartById: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ 
  auth: state.auth
})

export default connect(mapStateToProps, {getProductCartById}) (Navbar)

