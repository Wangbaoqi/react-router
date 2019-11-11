import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  useRouteMatch,
  useParams,
  Redirect,
  useLocation,
  useHistory
} from 'react-router-dom'



import './App.css';




const Home = () => <div>Home</div>


const Users = ({ match, history, location }) => {
  const routeMatch = useRouteMatch()
  const routeLocation = useLocation()
  const routeHistory = useHistory()

  console.log(match, 'matchUser');
  console.log(history, 'historyUser');
  console.log(location, 'locationUser');

  // console.log(routeMatch, 'routeMatchUser');
  // console.log(routeHistory, 'routeHistoryUser');
  // console.log(routeLocation, 'routeLocationUser');
  
  return (
    <div>User</div>
  )
}
const Login = () => <div>Login</div>

const Nav = () => {
  const { top } = useParams();
  return (
    <div>this is {top}</div>
  )
}
const About = () => {
  // 获取参数
  const routeMatch = useRouteMatch()
  const routeParam = useParams()
  console.log(routeMatch, 'routeMatch');

  console.log(routeParam, 'useParams');
  
  return (
    <div>About</div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Router
      </header>
      <Router>
        <div>
          <div className='router-nav'>
            <span style={{marginRight: '5px'}}>
              <Link to="/">Home</Link>
            </span>
            <span style={{marginRight: '5px'}}>
              <Link to="/about/3?name=44">About</Link>
            </span>
            <span style={{marginRight: '5px'}}>
              <Link to="/users">Users</Link>
            </span>
            <span style={{marginRight: '5px'}}>
              <Link to="/users?name=wang">UsersName</Link>
            </span>
            <span style={{marginRight: '5px'}}>
              <Link to={{
                pathname: '/users',
                search: '?sort=name',
                state: { fromHome: '1'}
              }} replace>UserObj</Link>
            </span>
            <span style={{marginRight: '5px'}}>
              <NavLink to='/navtop/gg' activeClassName="hurray">NavTop</NavLink>
            </span>
            



            




            {/* 直接重定向到login */}
            {/* <Redirect to='/login' /> */}
          </div>
          


          <Route path="/about" render={() => <div>about new</div>}/>
          <Route path="/users" component={Users}/>
          <Route path="/navtop" component={Nav}/>
          <Route path="/" component={Home}/>


          <Switch>
            <Route path="/about/:id">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/navtop/:top">
              <Nav />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
