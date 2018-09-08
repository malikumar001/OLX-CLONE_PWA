import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Catagories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LatestAds from '../Latest/LatestAds';


class Catagories extends Component {
    render() {
        return (
        
        <div>
            <div className="flex-container">
    
                <div><Link to="/catagories/mobiles"><FontAwesomeIcon className="mobile-icon" icon="mobile-alt" /><span className="icon-name">Mobiles</span></Link></div>
                <div><Link to="/catagories/motorcycles"><FontAwesomeIcon className="bike-icon" icon="motorcycle" /><span className="icon-name">Bikes</span></Link></div>
                <div><Link to="/catagories/animals"><FontAwesomeIcon className="animal-icon" icon="paw" /><span className="icon-name">Animals</span></Link> </div>
                <div><Link to="/catagories/laptops"><FontAwesomeIcon className="job-icon" icon="laptop" /><span className="icon-name">Laptops</span></Link></div>
                <div><Link to="/catagories/homes"><FontAwesomeIcon className="home-icon" icon="home" /><span className="icon-name">Homes</span></Link></div>
    
            </div>

            <LatestAds />
    
            

            <div className="button-container">
            
           <button> <Link to="/catagories/all-ads">Show all Posts</Link></button>
            </div>

            
            </div>
        );
    }
}


export default Catagories;