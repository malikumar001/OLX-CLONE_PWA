import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../actions/index';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Notifier, { openSnackbar } from './Notifier/Notifier';

class Test extends Component {


    showNotifier = () => {
        openSnackbar({ message: 'Its running!' });
    }

    render() {
       return (
            <div>
              
               <h1>Test</h1> 
               <button onClick={this.showNotifier}>Message</button>
            </div>

        );
    }
}

export default Test;









