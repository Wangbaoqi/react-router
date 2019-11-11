

import React, { Component, Fragment } from 'react'

import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // 模拟异步。
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({ history }) => {
  return fakeAuth.isAuthenticated ? <p>
    hello, you have logined <button onClick={() => fakeAuth.signout(() => history.push('/'))}>login out</button>
  </p> : <p>please login in</p>
})





const Auth = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


class Login extends Component {

  constructor() {
    super();
    this.state = {
      redirectToReferrer: false
    }
  }


  handleLogin = () => {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }

  render() {

    const { from } = this.props.location.state || { from: { pathname: '/'} }
    const { redirectToReferrer } = this.state;

    if(redirectToReferrer) {
      return <Redirect to={from.pathname} />
    }

    return (
      <div>
        <p>若想访问 {from.pathname} ，你需要先登录</p>
        <button onClick={this.handleLogin.bind(this)}>登录</button>
      </div>
    )
  }
}



export {
  Auth,
  AuthButton,
  Login
} 