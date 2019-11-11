import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'




const CustomRouter = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={ ({ match }) => (
      <div className={ match ? 'active' : ''}>
        {match ? '>': ''}<Link to={to}>{label} </Link>
      </div>
    )}/>

    
  )
}

export default CustomRouter


