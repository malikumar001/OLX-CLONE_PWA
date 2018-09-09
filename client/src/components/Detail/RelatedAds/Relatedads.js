import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import './RelatedAds.css';
import AdCard from '../../Catagories/AllAds/AdCard/AdCard';
import RelatedAd from './RelatedAd/RelatedAd';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RelatedAds = ({ card, fetchAd }) => {

    // console.log(card);
    // console.log(fetchAd);
    const ad = fetchAd.filter(ad => ad.uniqueId === card.uniqueId);
    return (
        <div>
            <div className="related-container">
           {
               ad.length === 0 ?  <h1 className="notfound-ads">No Ads Available Related to this User!</h1> :
               <h1 className='submit-ads'>Recently Submitted Ads By this User:</h1>
           }
     
     </div>
        <div id="related-card-container" className="ui link cards">
        
        {
        
        ad.map(cad => <RelatedAd key={cad._id} card={cad}/>) 
        // ad.map(cad => <AdCard key={cad._id} card={cad}/>) 
        }

        </div>
        </div>
    );
}





const mapStateToProps = ({ fetchAd }) => {
  
    return { fetchAd }
  }
  
  
  export default connect(mapStateToProps)(RelatedAds);
  
