import React, { Component } from 'react';
import AdCard from '../AllAds/AdCard/AdCard';
import './Mobile.css';
import { connect } from 'react-redux';


class Mobile extends Component {

    render() {
            
        const filt = [...this.props.fetchAd];
        
        return (


            <div style={{ marginTop: '80px', marginLeft: '30px', marginRight: '30px' }} className="ui link cards" >

            <h1 className="head">Mobile Ads</h1>


             { filt.length === 0 ? (
               
               <div className="ui active centered inline loader"></div>
             
                ) : filt.filter(cards => cards.catagory === "1").map(cards => <AdCard key={cards._id} card={cards} />)}

            </div>

        );
    }
}




const mapStateToProps = ({ fetchAd }) => {
    return { fetchAd }
  }
  
  
  
  
  export default connect(mapStateToProps)(Mobile);
  
