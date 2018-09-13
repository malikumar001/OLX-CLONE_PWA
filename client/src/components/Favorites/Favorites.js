import React, { Component } from 'react';
import axios from 'axios';

// import AdCard from '../AllAds/AdCard/AdCard';
import { connect } from 'react-redux';
import AdCard from '../Catagories/AllAds/AdCard/AdCard';
import RelatedAd from '../Detail/RelatedAds/RelatedAd/RelatedAd';


class Favorites extends Component {


    state = {
        data: [],
        favorites: [],
        adsArray: []
    }



    // handleFavorite = () => {

    // 	axios.post('/api/ad_id', {
    // 		ad_id: this.props.match.params._id,
    // 		uniqueId: this.state.favorites.googleId
    // 	})
    // 	.then(ad => console.log(ad))

    // }

    componentWillMount() {
        axios.get('/api/allads')
            .then(res => res.data.allads).then(data => {
                this.setState({ data })

            })

        axios.get('/api/user').then((user) => this.setState({ favorites: user.data.favoriteAds }))


    }

    componentDidMount() {
        setTimeout(() => {
            let newArray = []
            this.state.favorites.map((dat, index) => {
                return newArray[index] = dat.ad_id
            });



            const matchItems = newArray.map(adId => {

                const filteredArray = this.state.data.filter(item => {
                    return adId === item._id
                })

                return filteredArray;
            })


            let latest = []
            matchItems.map((item, index) => {
                latest[index] = item[0]
            })
            console.log(latest);

            this.setState({ adsArray: latest })
            console.log(this.state.adsArray);
        }, 3000)
    }

    // handleFavorites = () => {

    // //     let newArray = []
    // //     this.state.favorites.map((dat, index) => {
    // //     return newArray[index] = dat.ad_id
    // //     });



    // // const matchItems = newArray.map(adId => {

    // //     const filteredArray = this.state.data.filter(item => {
    // //           return adId === item._id
    // //       })

    // //       return filteredArray;
    // //   })


    // //   let latest = []
    // //   matchItems.map((item, index) => {
    // //     latest[index] = item[0]
    // //   })
    // //   console.log(latest);

    // //   this.setState({adsArray: latest})
    // //   console.log(this.state.adsArray);

    // }

    render() {


        return (

            <div style={{ marginTop: '80px', marginLeft: '30px', marginRight: '30px' }} className="ui link cards" >
                <h1>Hello</h1>


                {
                    this.state.adsArray.length === 0 ? <h1>You do not have any Favorites.</h1> : this.state.adsArray.map(cad => <RelatedAd key={cad._id} card={cad} />)
                }

                {/* <button onClick={this.handleFavorites}>dsfasdfa</button> */}


            </div>

        );
    }
}




const mapStateToProps = ({ fetchAd, auth }) => {
    return { fetchAd, auth }
}


export default connect(mapStateToProps)(Favorites);

