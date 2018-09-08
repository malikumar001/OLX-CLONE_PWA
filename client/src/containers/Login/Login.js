import React, { Component } from 'react';
import { connect } from 'react-redux';


import './Login.css';
import ico from '../../assets/icon.ico';
// import { connect } from 'react-redux';
// import * as actions from '../actions/index';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Message from '../../components/Messege/Message';

class Login extends Component {

        state = {
            showMessage : true
        }

    render() {
        
// ============= Showing Message =================

// setTimeout(() => {
//         this.setState({showMessage: false});
// }, 1000);

// ==============================


        return (
          this.props.auth ? (
            <div style={{marginTop: '80px'}}><p>you have signed in </p></div>
          ) : ( 
            <div>
                
            <div className="login-container" style={{ marginTop: '100px', textAlign: 'center' }}>
                
            <div style={{ textAlign: 'center' }}>
                  {
                      this.state.showMessage ? <Message /> : undefined
                  }

                  </div>

                <div style={{marginTop: '30px'}}>

                <a href="/auth/google"  className="google-button btn">
                
                 <img style={{marginTop: '5px'}} alt="google-icon" src={ico}/>
                 <span style={{marginLeft: '15px', marginTop: '10px'}}>Login with Google</span>
                
                </a>

                </div>
            </div>


            <p style={{ textAlign: 'center', marginTop: '5%' }}>By logging in, you accept our <Link to="/term-of-use">Terms of Use</Link></p>
                
                
        </div>
          )
        );
    }
}

const mapStateToProps = ({ auth }) => {

    return { auth }
}

export default connect(mapStateToProps)(Login);
// export default connect(null, actions)(Login);







