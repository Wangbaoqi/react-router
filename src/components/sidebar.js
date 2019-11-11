
import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const routes = [
  { path: '/',
    exact: true,
    sidebar: () => <div>主页!</div>,
    main: () => <h2>主页</h2>
  },
  { path: '/aboutM',
    sidebar: () => <div>关于我们!</div>,
    main: () => <h2>关于我们</h2>
  },
  { path: '/contact',
    sidebar: () => <div>联系我们!</div>,
    main: () => <h2>联系我们</h2>
  }
]


const Siderbar = () => {
  return (
    <div style={{ display: 'flex'}}>
      <div style={{ width: '20rem', background: '#f0f0f0', padding: '5rem'}}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/aboutM'>aboutM</Link></li>
          <li><Link to='/contact'>contact</Link></li>
        </ul>
        {
          routes.map((r, i) => (
            <Route 
              key={i}
              path={r.path}
              exact={r.exact}
              component={r.sidebar}
            />
          ))
        }
      </div>
      <div style={{ flex: 1, fontSize: '2rem' }}>
        {
          routes.map((r, i) => (
            <Route 
              key={i}
              exact={r.exact}
              path={r.path}
              component={r.main}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Siderbar