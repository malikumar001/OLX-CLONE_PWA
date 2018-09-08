import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import './NotFound.css';



const NotFound = props => (
    <div className="error-contents" style={{ marginTop: '130px' }}>
       
        <div className="row"><FontAwesomeIcon className="icon" icon="exclamation-triangle" /></div>
        <div className="row"><h1 className="error-code">404 Not Found </h1></div>
        <div className="row">Go to <Link to="/">Home Page</Link></div>







    </div>
);

export default NotFound;