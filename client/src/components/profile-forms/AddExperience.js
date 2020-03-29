import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addExperience } from '../../actions/profile'

const AddExperience = ({addExperience, history}) => {
const [formData, setFormData] = useState({
    equipe: '',
    location: '', 
    title: '',
    from: '',
    to: '',
    current: false,
    description: ''
});

const [toDAteDisabled, toggleDisabled] = useState(false);

const {equipe, title, from, to, current, description, location} = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
      <Fragment>
          <h1 className="large text-primary">
       Add An Experience
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => {
          e.preventDefault();
          addExperience(formData, history);
      } }>
        <div className="form-group">
          <input type="text"
          placeholder="* Post Title"
          name="title"
          value={title}
          onChange={e => onChange(e)}/>
        </div>
        <div className="form-group">
          <input type="text"
          placeholder="* Equipe"
          name="equipe"
          value={equipe}
          onChange={e => onChange(e)}
        />
        </div>
        <div className="form-group">
          <input type="text"
          placeholder="Location"
          name="location"
          value={location}
          onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date"
          name="from"
          value={from}
          onChange={e => onChange(e)}
          />
        </div>
         <div className="form-group">
          <p><input type="checkbox"
           name="current"
           checked={current}
          value={current}
          onChange={e => {setFormData({...formData, current: !current})
          toggleDisabled(!toDAteDisabled)
        }}
          /> {' '} Current Job</p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date"
          name="to"
          value={to}
          onChange={e => onChange(e)}
          disabled={toDAteDisabled ? 'disabled' : ''} 
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={e => onChange(e)}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/sport">Go Back</Link>
      </form>
      </Fragment>
    )
}

AddExperience.propTypes = {
addExperience: PropTypes.func.isRequired
}

export default connect(null, {addExperience})
 (withRouter(AddExperience))
