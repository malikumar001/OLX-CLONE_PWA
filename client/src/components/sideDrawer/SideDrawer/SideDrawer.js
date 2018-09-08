import React from 'react';
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
      <ul>
         
          <li><Link to="/login"><FontAwesomeIcon style={{marginRight: '2px'}} icon="user"/>My Account</Link></li>
          <li><Link to="/submit-ad"><FontAwesomeIcon style={{marginRight: '2px'}} icon="paper-plane"/>Submit an Ad</Link></li>

      </ul>
      </nav>
            
        
            
    );
}

export default SideDrawer;