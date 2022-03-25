import React, {Component} from 'react'
import {Redirect, Route} from 'react-router-dom'
import {UsersService} from '../local/UsersService';


const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    UsersService.isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
    )
  )}/>
);

export default PrivateRoute