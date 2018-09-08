import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from 'react-router-dom';
import './Date.css';

const date = new Date()
const monthDate =  date.getDate();

var months = ["January", "February", "March",
               "April", "May", "June", "July",
               "August", "September", "October",
                "November", "December"];
const monthName = months[date.getMonth()];
const year = date.getFullYear()

const GetDate = props => {
    
    return (

        <p className="date-location"><FontAwesomeIcon className="calender-icon" icon="calendar-alt"/><span style={{marginLeft: '8px'}}>Added on:  {monthDate} {monthName}, {year}</span></p>
    )

}


export default GetDate;