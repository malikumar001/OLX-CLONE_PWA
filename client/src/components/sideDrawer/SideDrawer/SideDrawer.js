import React from 'react';
import { connect } from 'react-redux';
import './SideDrawer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    
    if (props.show) {
    drawerClasses = 'side-drawer show';

    }
  
    return(
      <nav className={drawerClasses}>
      <ul className="sideDrawer-links">
         
        {props.auth ? (
            <li><a href="/api/logout">({props.auth.name}) Logout</a></li>

        ) : (
            
            <li><Link to="/login"><FontAwesomeIcon className="icon-sidebar" icon="user"/>My Account</Link></li>
        )}
        
         
         
          <li><Link to={props.auth ? "/submit-ad" : "/login" }><FontAwesomeIcon className="icon-sidebar"  icon="paper-plane"/>Submit an Ad</Link></li>

      </ul>
      </nav>
            
        
            
    );
}

// export default SideDrawer;
const mapStateToProps = ({ auth }) => {

    return { auth }
}

export default connect(mapStateToProps)(SideDrawer);


