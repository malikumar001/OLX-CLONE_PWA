import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdCard from '../AllAds/AdCard/AdCard';
import './Home.css';


class Home extends Component {

    render() {
        const filt = [...this.props.fetchAd];
        return (

            <div style={{ marginTop: '80px', marginLeft: '30px', marginRight: '30px' }} className="ui link cards" >

                {filt.filter(cards => cards.catagory === "5").map(cards => <AdCard card={cards} />)}

            </div>

        );
    }
}

const mapStateToProps = ({ fetchAd }) => {
    return { fetchAd }
  }

export default connect(mapStateToProps)(Home);

