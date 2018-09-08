import React, { Component } from 'react';
import './Footer.css';
import logo from '../../assets/olx-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


class Footer extends Component {
    
    state = {
        showContent: false
    }
   
    handleContent = () => {
       this.setState({showContent: !this.state.showContent})
    }
   
    render() {

        return (

            <footer id="footer-container" className="footer">
                <div className="section group">
                    <div className="col span_1_of_3">
                        <Link to="/"><img src={logo} className="olx-logo" alt="olx-logo" /></Link>
                    </div>
                    <div className="col span_1_of_3 flexUse">
                        <div className="flex-container-link">
                            <div><Link to="">Locations Map</Link></div>
                            <div><Link to="">Popular Searches</Link></div>
                            <div><Link to="">Archive</Link></div>
                            <div><Link to="">SiteMap</Link></div>
                        </div>
    
                        <div className="flex-container-link">
                            <div><Link to="">Terms of Use</Link></div>
                            <div><Link to="">Help & Contact Us</Link></div>
                        </div>
    
                        <div className="flex-container-link">
                            <div><Link to="">Who we are</Link><button onClick={this.handleContent} className="who"><FontAwesomeIcon style={{ marginLeft: '4px' }} icon="chevron-down" /></button></div>
                            <div><Link to="">Join Olx</Link></div>
                            <div><Link to="">Happy Olxers</Link></div>
                        </div>
    
    
    
                    </div>
                    <div className="col span_1_of_3">
                        <h3>Contact Us</h3>
                        <div>
                            <div className="contact-us"><FontAwesomeIcon icon="envelope" /> <a id="email-link" href="mailto:help@olx.com.pk">help@olx.com.pk</a></div>
                            <div className="contact-us"><FontAwesomeIcon icon="phone" /> <Link  to="">080010101</Link></div>
                            <div className="contact-us"><FontAwesomeIcon icon="briefcase" /><Link to="">Business Packages</Link></div>
                        </div>
    
                    </div>
                </div>
    
                {
                    this.state.showContent ? (
                        <p className="who-we-are">
                    OLX.com.pk is a free local classifieds site.
                     Sell anything from used cars to mobiles, furniture,
                     laptops, clothing and more. Submit ads for free and
                     without creating an account. If you want to buy something
                      - here you will find interesting items, cheaper than in the store.
                      Start buying and selling in the most easy way on OLX.com.pk.
                </p>
                    ) : undefined
                }
    
            </footer>
    
    
        );

    }
} 



export default Footer;