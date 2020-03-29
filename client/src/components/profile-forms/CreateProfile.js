import React, { useState, Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createProfile } from '../../actions/profile'

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState ({
        equipe: '',
        location: '',
        status: '',
        autres: '',
        motivation: '',
        githubusername: '',
        youtube: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        instagram: ''
    });

    const [displaySocialInputs, toggleSocialInuts] = useState(false);

    const {
        equipe,
        location,
        status,
        autres,
        motivation,
        githubusername,
        youtube,
        twitter,
        facebook,
        linkedin,
        instagram
    } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
   const onSubmit = e => {
      e.preventDefault();
      createProfile(formData, history);
    }
    return (
        <Fragment>
        <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <select name="status" value={status} onChange={e => onChange(e)}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text"
            >Give us an idea of where you are at in your career</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Equipe" name="equipe" 
          value={equipe} onChange={e => onChange(e)}
          />
          <small className="form-text"
            >Could be your own equipe or one you work for</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location"
          value={location} onChange={e => onChange(e)}
          />
          <small className="form-text"
            >City & state suggested (eg. Boston, MA)</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Autres" name="autres" 
          value={autres} onChange={e => onChange(e)}
          />
          <small className="form-text"
            >Please use comma separated values (eg.
            HTML,CSS,JavaScript,PHP)</small
          >
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername} onChange={e => onChange(e)}
          />
          <small className="form-text"
            >If you want your latest repos and a Github link, include your
            username</small
          >
        </div>
        <div className="form-group">
          <textarea placeholder="A short motivation of yourself" name="motivation" 
          value={motivation} onChange={e => onChange(e)}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button onClick={() => toggleSocialInuts(!displaySocialInputs)} type="button" className="btn btn-light">
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInputs && <Fragment>
            <div className="form-group social-input">
          <i className="fab fa-twitter fa-2x"></i>
          <input type="text" placeholder="Twitter URL" name="twitter" 
          value={twitter} onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-facebook fa-2x"></i>
          <input type="text" placeholder="Facebook URL" name="facebook"
          value={facebook} onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-youtube fa-2x"></i>
          <input type="text" placeholder="YouTube URL" name="youtube" 
          value={youtube} onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-linkedin fa-2x"></i>
          <input type="text" placeholder="Linkedin URL" name="linkedin"
          value={linkedin} onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-instagram fa-2x"></i>
          <input type="text" placeholder="Instagram URL" name="instagram"
          value={instagram} onChange={e => onChange(e)}
          />
        </div>
            </Fragment>}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/sport">Go Back</Link>
      </form>
        </Fragment>
    )
}

CreateProfile.propTypes = {
createProfile: PropTypes.func.isRequired
}



export default connect(null, {createProfile}) (withRouter (CreateProfile))
