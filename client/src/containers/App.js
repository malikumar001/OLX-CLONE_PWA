import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// ================= Components Imports ====================
import NavBar from '../components/Navbar/NavBar';
import SideDrawer from '../components/sideDrawer/SideDrawer/SideDrawer';
import BackDrop from '../components/sideDrawer/BackDrop/BackDrop';
import HomePage from '../components/HomePage';
import Login from './Login/Login';
import SubmitAd from './SubmitAd/SubmitAd';
import Detail from '../components/Detail/Detail';
import Animal from '../components/Catagories/Animal/Animal';
import Footer from '../components/Footer/Footer';
import Mobile from '../components/Catagories/Mobile/Mobile';
import NotFound from '../components/NotFound/NotFound';
import AllAds from '../components/Catagories/AllAds/AllAds';
//================= Fontawesome =======================
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faStroopwafel, faUser, faMobileAlt, faHome,
    faPaw, faBriefcase, faMotorcycle, faEnvelope,
    faPhone, faLaptop, faExclamationTriangle,
    faChevronDown, faPaperPlane, faMapMarkerAlt,
    faCalendarAlt, faCouch, faBook

} from '@fortawesome/free-solid-svg-icons'
import Laptop from '../components/Catagories/Laptop/Laptop';
import Home from '../components/Catagories/Home/Home';
import Bike from '../components/Catagories/Bike/Bike';
import Furniture from '../components/Catagories/Furniture/Furniture';
import Book from '../components/Catagories/Book/Book';

library.add(faStroopwafel, faUser, faMobileAlt,
    faHome, faPaw, faMotorcycle,
    faBriefcase, faEnvelope,
    faPhone, faLaptop, faPaperPlane, faExclamationTriangle,
    faChevronDown, faMapMarkerAlt, faCalendarAlt, faCouch, faBook );


class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchAds();
    }
    state = {
        sideDrawerOpen: false
    }

    sideDrawerToggleHandler = () => {
        this.setState((preState) => {
            return {
                sideDrawerOpen: !preState.sideDrawerOpen
            }
        })
    }

    closeDrawer = () => {
        this.setState({ sideDrawerOpen: false });
    }

    render() {
            
        let backDrop;

        if (this.state.sideDrawerOpen) {


            backDrop = <BackDrop closeDrawer={this.closeDrawer} />;
        }

        return (
            <div style={{ height: '100%' }}>
                <BrowserRouter>
                    <div>
                        <NavBar toggleButton={this.sideDrawerToggleHandler} />
                        <SideDrawer show={this.state.sideDrawerOpen} />
                        {backDrop}
                        <Switch>
                            <Route path='/' exact component={HomePage} />
                            <Route path='/login' exact component={Login} />
                            <Route path='/submit-ad' exact component={SubmitAd} />
                            <Route path='/catagories/all-ads' exact component={AllAds} />
                            <Route path='/catagories/mobiles' exact component={Mobile} />
                            <Route path='/catagories/animals' exact component={Animal} />
                            <Route path='/catagories/laptops' exact component={Laptop} />
                            <Route path='/catagories/homes' exact component={Home} />
                            <Route path='/catagories/motorcycles' exact component={Bike} />
                            <Route path='/catagories/furniture' exact component={Furniture} />
                            <Route path='/catagories/books' exact component={Book} />
                            <Route path='/ad/:_id' exact component={Detail} />
                            <Route component={NotFound} />
                        </Switch>
                        <Footer />
                    </div>
                </BrowserRouter>

            </div>

        );
    }
}

export default connect(null, actions)(App);







