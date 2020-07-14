import React, {useEffect, Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {BtnAddToCard, InputOpt, GroupOptions} from '../dashboard/Assets'
import { getAllProduct } from '../../actions/product'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TEST = ({product:{products, loading}}) => { 
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState({
    sizeObj: {},
    DialgAction: false
  });

  const {
    sizeObj,
    DialgAction
  } = size 
useEffect(()=> {getAllProduct()}, [])
    console.log(products)

  const handleClickOpen = () => { 
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  // Action dialog buttons 
  const dialgAction = (
    <DialogActions>
    <Button onClick={handleClose} color="primary" id="prs">
    Poursuivre vos achats
    </Button>
    <Button onClick={handleClose} color="primary">
    Finaliser la commande
    </Button>
  </DialogActions>
  )

  // Button Add to cart
  const btnToCart = (
    <DialogActions>
    <Button onClick={handleClose} color="primary" style={{width: "100%"}}>
     AJOUTER AU PANIER
    </Button>
  </DialogActions>
  )



  return (
    <div>
      <BtnAddToCard variant="outlined" color="primary" onClick={handleClickOpen}>
        Ajouter au panier
      </BtnAddToCard>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
          TEST
      </Dialog> 
    </div> 
  ); 
}
 


TEST.propTypes = {
  getAllProduct: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  product: state.product
})

export default  connect(mapStateToProps, {getAllProduct}) (TEST)