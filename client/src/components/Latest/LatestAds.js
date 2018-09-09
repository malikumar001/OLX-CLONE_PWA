import React, { Component } from 'react';
import AdCard from '../Catagories/AllAds/AdCard/AdCard';
import axios from 'axios';
import { connect } from 'react-redux';

class LatestAds extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        axios.get('/api/allads')
    .then(res => res.data.allads).then(ads => {

        const data = ads.reverse().splice(0, 12);
        this.setState({data})
    }); 
    }


    render() {
       
        console.log(this.state.data);
        return (
            <div style={{ marginTop: '80px', marginLeft: '30px', marginRight: '30px' }} className="ui link cards" >

                {this.state.data.length === 0 ? (
                    <div className="ui massive text indeterminate active centered inline loader">Loading</div>


                ) : this.state.data.map((card) => <AdCard key={card._id} card={card} />)}

            </div>

        );
    }
}


const mapStateToProps = ({ fetchAd }) => {
    return { fetchAd }
}


export default connect(mapStateToProps)(LatestAds);
