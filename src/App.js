import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom';
import Public from './Navigation/Public';
import Home from './Navigation/Home';
import Login from './Navigation/Login';
import './App.css';
// import Datashow from './components/Datashow';
// import Fetchval from './components/Fetchval';
// import Menu from './components/Menu';
// import Passobj from './components/Passobj';
// import Test from './components/Test';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Route path='/' component={Menu} />
        <Route path='/test' component={Test} />
        <Route path='/fetchval/:userid' component={Fetchval} />
        <Route path='/datashow' component={Datashow}/>
        <Route path='/passobj' component={Passobj} /> */}

        <ul>
          <li><Link to='/'>Public</Link></li>
          <li>
            <NavLink to='/login' activeStyle={{fontWeight:'bold',color:'green'}}>Login</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard' activeStyle={{fontWeight:'bold',color:'red'}}>Dashboard</NavLink>
          </li>
          <Route exact path='/' component={Public} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Home} />
        </ul>
      </BrowserRouter>
    </>
  );
}

export default App;
