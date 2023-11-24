import './App.css';
import React, { Component } from 'react';

import logo from './Components/assets/Logo.svg'
import Home from './Components/Home'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Default from './Components/Default';
import Signup from './Components/Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className='nav'>
            <li className='image'>
              <Link to="/Home"><img src={logo} /></Link>
            </li>
            <li className='home'>
              <Link to="/Home" className='home1'>Home</Link>
            </li>
            <li className='about'>
              <Link to="/Home" className='about1'>About</Link>
            </li>
            <li className='contact'>
              <Link to="/Home" className='contact1'>Contact</Link>
            </li>
            {/* <li className='login'>
              <Link to="/Login"><button className='login1'>Log in</button></Link>
            </li>
            <li className='signup'>
              <button className="signup1">Sign up</button>
            </li> */}
          </ul>
          <Routes>
          <Route exact path='/' element={< Default />}></Route>
            <Route exact path='/Home' element={< Home />}></Route>
            <Route exact path='/Dashboard' element={< Dashboard />}></Route>
            <Route exact path='/Login' element={< Login />}></Route>
            <Route exact path='/Signup' element={< Signup />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }

}

export default App;
