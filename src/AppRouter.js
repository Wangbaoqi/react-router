import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


import Home from './Home'
import List from './List'
import Protect from './components/protect'
import { Auth, AuthButton, Login} from './components/auth'
import CustomRouter from './components/custom'
import Recursive from './components/recursive'
import Siderbar from './components/sidebar'
// import Transition from './components/transition'
import RouterConf from './components/routerConf'

function AppRouter() {
  return (
    <Router basename='/nate'>



      <AuthButton />
      <ul>

        <li><CustomRouter to='/' activeOnlyWhenExact={true} label='Home'/></li>
        <li><CustomRouter to='/list'  label='List'/></li>
        <li><CustomRouter to='/auth'  label='Auth'/></li>

        {/* 路径递归 */}
        <Recursive />
        {/* 侧边栏 */}
        <Siderbar/>

        <RouterConf/>
      </ul>
      
      <Switch>
        <Route path='/list'>
          <List/>
        </Route>
        <Route path='/login' component={Login} />
         
        <Auth path='/auth' component={Protect}/>
         
        
        <Route path='/' exact component={Home} />

      </Switch>
    </Router>
  )
}


export default AppRouter