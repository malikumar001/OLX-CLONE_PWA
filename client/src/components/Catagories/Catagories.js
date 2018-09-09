import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import './Catagories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LatestAds from '../Latest/LatestAds';
import Social from '../Social/Social';


class Catagories extends Component {
    render() {
        

        const filt = [...this.props.fetchAd];
        const mobileLength = filt.filter(item => item.catagory === "1" ).length;
        const bikeLength = filt.filter(item => item.catagory === "2" ).length;
        const animalLength = filt.filter(item => item.catagory === "3" ).length;
        const laptopLength = filt.filter(item => item.catagory === "4" ).length;
        const homeLength = filt.filter(item => item.catagory === "5" ).length;
        const couchLength = filt.filter(item => item.catagory === "6" ).length;
        const bookLength = filt.filter(item => item.catagory === "7" ).length;
        
        return (
            <div>
            <div className="flex-container">
    
                <div><Link to="/catagories/mobiles"><FontAwesomeIcon className="mobile-icon" icon="mobile-alt" /><span className="icon-name">Mobiles ({mobileLength})</span></Link></div>
                <div><Link to="/catagories/motorcycles"><FontAwesomeIcon className="bike-icon" icon="motorcycle" /><span className="icon-name">Bikes ({bikeLength})</span></Link></div>
                <div><Link to="/catagories/animals"><FontAwesomeIcon className="animal-icon" icon="paw" /><span className="icon-name">Animals({animalLength})</span></Link> </div>
                <div><Link to="/catagories/laptops"><FontAwesomeIcon className="job-icon" icon="laptop" /><span className="icon-name">Laptops ({laptopLength})</span></Link></div>
                <div><Link to="/catagories/homes"><FontAwesomeIcon className="home-icon" icon="home" /><span className="icon-name">Homes ({homeLength})</span></Link></div>
                <div><Link to="/catagories/furniture"><FontAwesomeIcon className="furniture-icon" icon="couch" /><span className="icon-name">Furniture ({couchLength})</span></Link></div>
                <div><Link to="/catagories/books"><FontAwesomeIcon className="book-icon" icon="book" /><span className="icon-name">Books ({bookLength})</span></Link></div>
    
            </div>


<h1 className="heading">Latest Ads</h1>

            <LatestAds />
    

            <div className="button-container">
            
           <button> <Link to="/catagories/all-ads">Show all ads</Link></button>
           
            </div>

            <div>
                <Social />
            </div>
            
            </div>
            
        );
    }
}


const mapStateToProps = ({ fetchAd }) => {

    return { fetchAd }
}

export default connect(mapStateToProps)(Catagories);



// export default Catagories;