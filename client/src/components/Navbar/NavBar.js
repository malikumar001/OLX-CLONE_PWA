import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../../assets/olx-logo.svg';
import './NavBar.css';

import DrawerToggleButton from '../sideDrawer/DrawerToggleButton/DrawerToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class NavBar extends Component {


    renderContent() {
        switch (this.props.auth) {
            case null:
                return (
                    <div className="ui active inline loader"></div>
                );
            case false:
                return (
                    <ul>
                        <li><Link to="/login" className="my-user">
                            <FontAwesomeIcon icon="user" />
                            <span style={{ marginLeft: '5px' }}>My Account</span></Link></li>
                        <li><Link 
                                to={this.props.auth ? "/submit-ad" : "/login" } 
                                className="submit-ad">Submit an Ad</Link></li>
                    </ul>
                );
            default:

                return (
                    <ul>
                        <img alt="avatar" className="ui avatar image" src={this.props.auth.profilePhoto} />
                        <span style={{color: '#fff', fontWeight: '20px', paddingTop: '3px'}}>{this.props.auth.name}</span>
                        <li className="logout"><a href="/api/logout">Logout</a></li>
                        <li><Link to="/submit-ad" className="submit-ad">Submit an Ad</Link></li>

                    </ul>
                )
        }
    }
    render() {   
        return (
            <div>
                <header className="toolbar">
                    <nav className="toolbar-navigation">
                        <div>
                            <DrawerToggleButton toggleButton={this.props.toggleButton} />
                        </div>
                        <div className="toolbar-logo"><Link
                            to="/"
                            title="OLX Pakistan - Sell and Buy on OLX.com.pk"
                        ><img src={logo} alt="olx-logo" /></Link></div>
                        <div className="flexer"></div>
                        <div className="toolbar-navigation-items">

                            {this.renderContent()}

                        </div>
                    </nav>
                </header>
            </div>

        );
    }
}


const mapStateToProps = ({ auth }) => {

    return { auth }
}

export default connect(mapStateToProps)(NavBar);

