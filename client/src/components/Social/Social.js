import React from 'react';
import './Social.css';

const Social = () => {
    return (
        <div >

            <div className="social-container">
                <div>Follow Us</div>
                <div><button className="ui circular facebook icon button ">
                    <i id="facebook" className="facebook icon"></i>
                </button></div>
                <div><button className="ui circular twitter icon button">
                <i id="twitter" className="twitter icon"></i>
            </button></div>
                <div><button className="ui circular linkedin icon button">
                <i id="linkedin" className="linkedin icon"></i>
            </button></div>
                <div><button className="ui circular google plus icon button">
                <i id="google" className="google plus icon"></i>
            </button></div>
            </div>


            
            
            



        </div>
    );
}


export default Social;