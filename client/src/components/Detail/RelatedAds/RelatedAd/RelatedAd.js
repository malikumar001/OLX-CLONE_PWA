import React from 'react';
import { Link } from 'react-router-dom';

const RelatedAd = ({ card }) => {

    return (

        <div id="allAds" className="ui card">
            <div className="image">
                <span className="ui green ribbon label">Rs.{card.price}</span>

                {
                    card.featured ? (
                        <Link to="" className="ui yellow right ribbon label">Featured</Link>
                    ) : undefined
                }

                <a href={`/ad/related/${card._id}`}>
                    <img width="100%"
                        src={
                            card.image1 ?
                                `/${card.image1}`
                                : 'https://semantic-ui.com/images/wireframe/image.png'
                        } alt="game-img" />

                </a>

            </div>

            <div className="content">

                <a href={`/ad/related/${card._id}`}>My Game</a>
                <div className="meta">
                    <i className='icon user' /> {card.location}&nbsp;
 <i className='icon wait' /> 46 min
      <Link to={`/ad/${card._id}`} className="right floated">More details</Link>
                </div>
            </div></div>

    );
}


export default RelatedAd;


