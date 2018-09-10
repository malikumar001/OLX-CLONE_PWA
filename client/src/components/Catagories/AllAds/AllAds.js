import React, { Component } from 'react';
import AdCard from './AdCard/AdCard';
import { connect } from 'react-redux';

import './AllAds.css';


class AllAds extends Component {

    state = {
        search: ''
    }

    render() {
        const data = this.props.fetchAd.reverse();
        console.log(data)

        return (

            <div>
                
                    <div style={{ marginTop: '80px', marginLeft: '20px', marginRight: '30px' }} className="ui link cards" >

                        <h1 className="head">Ads Of all Catagories</h1>

                        {data.length === 0 ? (
                            <div className="ui massive text indeterminate active centered inline loader">Loading</div>


                        ) : data.map((card) => <AdCard key={card._id} card={card} />)}

                    </div>
                </div>
                );
            }
        }
        
        
        
        
        
const mapStateToProps = ({fetchAd}) => {
    return {fetchAd}
                }
                
              
              export default connect(mapStateToProps)(AllAds);
  