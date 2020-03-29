import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { deleteExperience } from '../../actions/profile'
import { connect } from 'react-redux'

const Experience = ({ experience, deleteExperience }) => {
    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.equipe}</td>
            <td className="hide-sm">{exp.title}</td>
            <td>
                <Moment format='YYYY/MM/DD'>
                 {exp.from}
               </Moment> - {' '} {
                    exp.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>
                         {exp.to} 
                         </Moment>)
                }
            </td>
            <td>
                <button className='btn btn-danger' onClick={() => 
                deleteExperience(exp._id)
                }>Delete</button>
            </td>
        </tr>
    ));
    return (
        <Fragment>
            <h2 className="my-2">Experience Credentilas</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className="hide-sm">Title</th>
                        <th className="hide-sm">Years</th>
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>    
            </table>
        </Fragment>
    )
}

Experience.propTypes = {
experience : PropTypes.array.isRequired,
deleteExperience: PropTypes.func.isRequired
}

export default connect(null, { deleteExperience }) (Experience)