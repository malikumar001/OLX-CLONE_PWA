import React, { Component } from 'react';
import AdCard from '../AllAds/AdCard/AdCard';
import { connect } from 'react-redux';


class Furniture extends Component {

    render() {
            
        const filt = [...this.props.fetchAd];
        
        return (

            <div style={{ marginTop: '80px', marginLeft: '30px', marginRight: '30px' }} className="ui link cards" >

             { filt.length === 0 ? (
               
               <div className="ui active centered inline loader"></div>
             
                ) : filt.filter(cards => cards.catagory === "6").map(cards => <AdCard key={cards._id} card={cards} />)}

            </div>

        );
    }
}




const mapStateToProps = ({ fetchAd }) => {
    return { fetchAd }
  }
  
  
  
  
  export default connect(mapStateToProps)(Furniture);
  
