import React, { Component } from 'react';
// import GetDate from './Date/Date';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from 'react-router-dom';
import axios from 'axios';

// import { connect } from 'react-redux';

import './Detail.css';
// import mobile from '../../assets/mobile.jpg';
import ShowImages from './ShowImages/ShowImages';
import RelatedAds from './RelatedAds/Relatedads';

class Detail extends Component {

	state = {
		showAllImages: false,
		data: [],
		favorites: [],
		favoriteAds: []
	}

	handleImageShow = () => {
		this.setState({ showAllImages: !this.state.showAllImages })
	}

	handleFavorite = () => {

		axios.post('/api/ad_id', {
			ad_id: this.props.match.params._id,
			uniqueId: this.state.favorites.googleId
		})
		.then(ad => console.log(ad))
		
	}

	componentDidMount() {
		axios.get('/api/allads')
			.then(res => res.data.allads).then(data => {
				const ad = data.filter(ad => ad._id === this.props.match.params._id);
				this.setState({ data: ad[0] })
			})


			axios.get('/api/user').then((user) => {
				this.setState({favorites: user.data})
				this.setState({favoriteAds: user.data.favoriteAds})
			})

			

			
		}
		
		render() {
 
		const {data, favorites} = this.state;
		
		const newArray = this.state.favoriteAds.filter(item => item.ad_id === this.state.data._id)
		
		return (
<div>
			<div className="main-container" >


				{/* ===================================================================
								   LEFT SIDE 
		  ========================================================================*/}
				<div className="left-container">

					<div className="left-container-child">
						<div className="upper-border">
						<div className="favorite-container">
							<div className="product-title">{this.state.data.product}</div>
							<div className="flexer"></div>
							<div><a onClick={this.handleFavorite} href="#"><FontAwesomeIcon 
							className="favorite-icon"
							style={{color: newArray.length !== 0 ? "red" : "#E0E0E0"}}
							icon="bookmark"/></a></div>
							</div>
							
							<div className="detail-container">
								<div>
								<p className="date-location"><FontAwesomeIcon className="calender-icon" icon="calendar-alt"/><span style={{marginLeft: '8px'}}>Added on: {this.state.data.date} </span></p>
									  </div>
								<div>
									<p>
										<FontAwesomeIcon
											style={{ color: 'red', fontSize: '25px' }}
											icon="map-marker-alt" />
										<span style={{ marginLeft: '8px' }}>{this.state.data.location}</span>
									</p>
								</div>
								<div className="flexer"></div>
								<div><p>Ad ID: {this.state.data._id}</p></div>
							</div>
						</div>

						<div className="image-container">
							{
								this.state.showAllImages ? (
									<ShowImages data={data} />
								) : (
										//<div></div> */}
										<img src={`/${this.state.data.image1}`} width="100%" alt="asdf" />

									)
							}

						</div>

						<div className="button-container">

							<button
								style={{ marginTop: '40px', marginLeft: '40%', marginRight: '30%' }}
								className={
									this.state.showAllImages ? "negative ui button" : "positive ui button"
								}
								onClick={this.handleImageShow}
							>{this.state.showAllImages ? "Hide All images" : "Show All images"}</button>

						</div>

						<h1>Details:</h1>
						<p style={{fontSize: '18px', fontWeight: 'bold'}}>
						{this.state.data.detail}
</p>

					</div>



				</div>


				{/* ==========================================================
									RIGHT SIDE
				============================================================*/}
				<div className="right-container">


					<div className="left-side-container">
						<div className="price-container">
							<span className="left-triangle"></span>
							<span className="price">Rs. {this.state.data.price}</span>
						</div>
						<div className="below-price-container">
							<div className="userDataBox">
							<h4>Posted By:</h4>
								<div>
									<img className="ui avatar image" alt="img"
										src=
										{this.state.data.length === 0 ?
											"https://semantic-ui.com/images/wireframe/square-image.png" : this.state.data.profilePic} />
									<span>{this.state.data.name}</span>
								</div>
								<div className="user-status"><span>Away</span></div>
								<div>
									<p>Active on site since 5 Years & 5 Months </p>
								</div>


							</div>
							<div className="user-phone userDataBox">
							<div><FontAwesomeIcon style={{ marginRight: '5px', color: '#e91e63' }} icon="phone" />

								0{this.state.data.phone}
								<span>(Verified)</span></div>
							<div>
							<FontAwesomeIcon  style={{ marginRight: '5px', color: '#8e24aa' }} icon="envelope" />
							{this.state.data.email}</div>
							</div>

							<div className="userDataBox">
								<p>Safety Tips for Buyers</p>
								<ol>
									<li>Meet seller at a safe location</li>
									<li>Check the item before you buy</li>
									<li>Pay only after collecting item</li>
								</ol>

							</div>
						</div>


					</div>
				</div>

			</div>
			
			<RelatedAds card={data}/>


			</div>




		);
	}
}






export default Detail;