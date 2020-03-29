import React, { Fragment } from 'react'

const NotFound = () => {
    return (
        <Fragment>
            <h1 className="x-large text-primary"></h1>
            <i className="fas fa-exclamation-triangle"></i> Page Not Found
            <p className="large">Sorry, this page does not exist</p>
        </Fragment>
    )
}

export default NotFound