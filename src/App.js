import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Error from './pages/error';
import './App.css';
import About from './pages/About';
import Services from './pages/Services';
import  {AnimatePresence} from 'framer-motion'
import GlobalStyle from './globalStlyes';
//import React, { useState } from 'react';
import View from './pages/View';
import Buyerorseller from './pages/BorS';
import Buyerlogin from './pages/Buyerlogin';
import Payment from './pages/Payment';
import Userlogin from './pages/Userlogin';
import Upload from './pages/Upload';
import Register from './pages/Register';
import Ourteam from './pages/Ourteam';
//import { render } from '@testing-library/react';
class App extends React.Component {
  //let location = useLocation();
  state={
    isLog : false
  }
  handleLogin = (isLog) => this.setState({isLog})
  render(){
    //const {isLog} = this.state;
    return (
      <div>
        <Router>
          <GlobalStyle />
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/services' element={<Services/>} />
              <Route exact path='/view' element={<View/>}/>
              <Route exact path='/BorS' element={<Buyerorseller/>}/>
              <Route exact path='/buyerlogin' element={<Buyerlogin/>}/>
              <Route exact path='/payment' element={<Payment/>}/>
              <Route exact path='/Userlogin' element={<Userlogin/>}/>
              <Route exact path='/Upload' element={<Upload/>}/>
              <Route exact path='/Ourteam' element={<Ourteam/>}/>
              <Route exact path='Register' element={<Register/>}/>
              <Route path='*' component={Error}/>
            </Routes>
          </AnimatePresence>
        </Router>
      </div>
    );
  }
}

export default App;
