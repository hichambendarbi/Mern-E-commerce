import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeAlert } from '../../actions/alert'


const Alert = ({ alerts, removeAlert })  => alerts !== null && alerts.length > 0 && 
    alerts.map(alert => (
    alert.id !==1 ? <div key={alert.id} className={`alert alert-${alert.alertType}`}><input type="submit" value="X" onClick={() =>removeAlert() }/>{alert.msg}</div> :  console.log("its work")    
));




Alert.propTypes = {
alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps, {removeAlert}) (Alert); 