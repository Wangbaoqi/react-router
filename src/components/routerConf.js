

import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



const Redbull = () => <div>红牛</div>
const Spicy = () => <div>巨辣</div>
const Chips = () => <div>甜品</div>



// const Snacks = ({ routes }) => {

//   console.log(routes, 'routes');
  

//   return (

//     <div>
//       <p>小吃</p>
//       <ul>
//         <li><Link to='/snacks/spicy'>辣条</Link></li>
//         <li><Link to='/snacks/chips'>甜品</Link></li>
//       </ul>

//       {
//         routes.map((route, i) => (
//           <RouteWithSubRoutes {...route} key={i}/>
//         ))
//       }

//     </div>
//   )
// }


const Snacks = ({ routes }) => (
  <div>
    <h2>小吃</h2>
    <ul>
      <li><Link to="/snacks/spicy">辣条</Link></li>
      <li><Link to="/snacks/chips">薯片</Link></li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)


// 这里是路由的配置。
const routes = [
  { path: '/redbull',
    component: Redbull
  },
  { path: '/snacks',
    component: Snacks,
    routes: [
      { path: '/snacks/spicy',
        component: Spicy
      },
      { path: '/snacks/chips',
        component: Chips
      }
    ]
  }
]


const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // 把自路由向下传递来达到嵌套。
    <route.component {...props} routes={route.routes}/>
  )}/>
)


const RouterConf = () => {


  return (
    <div>
      <ul>
        <li><Link to='/snacks'>小吃</Link></li>
        <li><Link to='/redbull'>红牛</Link></li>
      </ul>

      {
        routes.map((route, i) => (
          <RouteWithSubRoutes {...route} key={i}/>
        ))
      }
    </div>
  )
}

export default RouterConf