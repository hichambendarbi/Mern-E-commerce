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

const DialogCart = (props) => { 
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState({
    sizeObj: {},
    DialgAction: false
  });

  const {
    sizeObj,
    DialgAction
  } = size 
useEffect(()=> getAllProduct(), [])
    console.log(products)

  const handleClickOpen = () => { 
    setOpen(true);
    if(props.size.length>0){
      setSize({
        DialgAction: true
      }) 
    }

    else
    console.log(props.product.Product)
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Select Size from product popup
  const selectSize = (id, obj) => {
    props.size.map(test=> test._id!==id ? document.getElementById(test._id).style.borderColor= "#ededed" :
    document.getElementById(test._id).style.borderColor= "orange"
    )
    props.size.map(test=> test._id!==id ? document.getElementById(test._id).style.color= "black" :
    document.getElementById(test._id).style.color= "orange"
    )
    console.log(obj)
  }

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
        <DialogTitle id="alert-dialog-slide-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           {props.name}
          </DialogContentText>
          {props.size.length>0 ? (
                                    <GroupOptions>
                                       {props.size.map(test=> (
                                            <InputOpt id={test._id} onClick={()=> selectSize(test._id,test)} >{test.sizename}</InputOpt>
                                       ))}
                                    </GroupOptions>
          ) : null}
        </DialogContent>
           {!DialgAction ? <Fragment>{dialgAction}</Fragment> : <Fragment>{btnToCart}</Fragment>} 
           {props.canConfirm && <BtnAddToCard  onClick={props.onConfirm}>Confirmer</BtnAddToCard>}
      </Dialog> 
    </div> 
  ); 
}
 


DialogCart.propTypes = {
  getAllProduct: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  product: state.product
})

export default  connect(mapStateToProps, {getAllProduct}) (DialogCart)