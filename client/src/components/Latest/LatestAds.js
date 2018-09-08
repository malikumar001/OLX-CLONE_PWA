import React, { Component } from 'react';
import AdCard from '../Catagories/AllAds/AdCard/AdCard';
import { connect } from 'react-redux';

class LatestAds extends Component {

    render() {
        const data = this.props.fetchAd.reverse().splice(0, 12);

        return (
            <div style={{ marginTop: '80px', marginLeft: '30px', marginRight: '30px' }} className="ui link cards" >

                {data.length === 0 ? (
                    <div className="ui massive text indeterminate active centered inline loader">Loading</div>


                ) : data.map((card) => <AdCard key={card._id} card={card} />)}

            </div>

        );
    }
}


const mapStateToProps = ({ fetchAd }) => {
    return { fetchAd }
}


export default connect(mapStateToProps)(LatestAds);
