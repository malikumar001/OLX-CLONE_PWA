import React from 'react';
import { Link } from 'react-router-dom';

import './AdCard.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdCard = ({card}) => {
    
    return (
        
        <div id="allAds" className="ui card">
        <div className="image">
        <span className="ui green ribbon label">Rs.{card.price}</span>

{
    card.featured ? (
        <Link to="" className="ui yellow right ribbon label">Featured</Link>
    ) : undefined
}

        <Link to={`/ad/${card._id}`}>
             <img width="100%"
                src={
                 card.image1 ?
                   `/${card.image1}`
                : 'https://semantic-ui.com/images/wireframe/image.png'
                } alt="game-img"/>    
            
            </Link>
        
     </div>
     
     <div className="content">
     
     <Link to={`/ad/${card._id}`}>My Game</Link>
     <div className="meta">
 <i className='icon user'/> {card.location}&nbsp;
 <i className='icon wait'/> 46 min
      <Link to={`/ad/${card._id}`} className="right floated">More details</Link>
</div>
</div></div>

    );
}



export default AdCard;