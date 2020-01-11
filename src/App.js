import React, { Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {withRouter, Route} from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer';

import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/Preloader/preloader';
import store from './redux/redux-store';
import {withSuspense} from './components/Hoc/withSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render(){
    if(!this.props.initialized){
      return <Preloader/>
    }
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/Dialogs' render={withSuspense(DialogsContainer)}/> 
        <Route path='/Profile/:userId?' render={withSuspense(ProfileContainer)} />
        <Route path='/Users' render={withSuspense(UsersContainer)} />
        <Route path='/login' render={withSuspense(LoginPage)} />
      </div >
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, {initializeApp})) (App);
