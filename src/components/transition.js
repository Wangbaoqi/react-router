import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'



const Transition = () => {
  <Route render={ ({ location }) => (
    <div style={style.fill}>
      <Route exact path='/' render={() => (
        <Redirect to='/10/9/5'/>
      )}/>

      <ul style={style.nav}>
        <NavLink to='/10/90/50'>red</NavLink>
        <NavLink to='/120/100/40'>green</NavLink>
        <NavLink to='/200/100/40'>blue</NavLink>
        <NavLink to='/310/100/50'>pink</NavLink>
      </ul>

      <div style={style.content}>
        <ReactCSSTransitionGroup 
          transitionName='fade'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={500}
        >
          <Route 
            location={location}
            key={location.key}
            path='/:h/:s/:l'
            component={HSL}
          />
        </ReactCSSTransitionGroup>
      </div>
    </div>
  )}/>
}


const NavLink = (props) => (
  <li style={style.navItem}>
    <Link {...props} />
  </li>
)

const HSL = ({ match: { params } }) => (
  <div style={{
    ...style.fill,
    ...style.hsl,
    background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
  }}>hsl({params.h}, {params.s}%, {params.l}%)</div>
)





const style = {}

style.fill = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
}

style.content = {
  ...style.fill,
  top: '40px',
  textAlign: 'center'
}

style.hsl  = {
  ...style.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
}

style.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
}

style.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}

export default Transition