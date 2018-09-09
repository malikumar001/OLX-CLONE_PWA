import React from 'react';
import { Link } from 'react-router-dom';

import './AdCard.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdCard = ({card}) => {
    
    const milliSeconds = (new Date().getTime() - card.milliSeconds);
    const timeInSeconds = Math.floor(milliSeconds / 1000);
    const timeInMinutes = Math.floor(milliSeconds / 1000 / 60) ;
    const timeInHours = Math.floor(timeInMinutes / 60);
    const timeInDays = Math.floor(timeInHours / 24);
    
   let time;
   if ( timeInSeconds <= 60 ) {
            time = `${timeInSeconds} sec ago`
   }else if ( timeInMinutes <= 60 ) {
        time = `${timeInMinutes} min ago`;
   }else if (timeInHours <= 24) {
        time = `${timeInHours} hours ago`;
   }else{
    time = `${timeInDays} days ago`;
   }

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
     
     <Link to={`/ad/${card._id}`}>{card.product.substring(0, 40)}</Link>
     <div className="meta">
 <i className='icon user'/> {card.name}&nbsp;
 <i className='icon wait'/> {time}
      <Link to={`/ad/${card._id}`} className="right floated">More details</Link>
</div>
</div></div>

    );
}



export default AdCard;