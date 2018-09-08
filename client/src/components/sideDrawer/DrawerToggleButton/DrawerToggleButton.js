import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = props => {
    return(
        
        <button className="toggle-button" onClick={props.toggleButton}>
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
        </button>
            
        
            
    );
}

export default DrawerToggleButton;