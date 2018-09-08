import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import './RelatedAds.css';
import AdCard from '../../Catagories/AllAds/AdCard/AdCard';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RelatedAds = ({ card, fetchAd }) => {

    // console.log(card);
    // console.log(fetchAd);
    const ad = fetchAd.filter(ad => ad.uniqueId === card.uniqueId)
    return (
        <div>
<div className="heading-container">
           {
               ad.length !== 0 ?  <h1>This user submit only one ad</h1> :
               <span className='submit-ads'>Recently Submitted Ads By User:</span>
           }
     
     </div>
        <div class="ui link cards">
        
        {
        
    ad.map(card => <AdCard key={card._id} card={card}/>) 
        }

        </div>
        </div>
    );
}





const mapStateToProps = ({ fetchAd }) => {
  
    return { fetchAd }
  }
  
  
  export default connect(mapStateToProps)(RelatedAds);
  
