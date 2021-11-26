import React from 'react';
import './Home.css';
import 'font-awesome/css/font-awesome.min.css';
import { HashRouter } from 'react-router-dom'
import Nav from '../components/Nav';
import Routes from './Routes'
import Footer from '../components/Footer';

export default props => 
  <HashRouter>  
    <div className="home">
        <Nav/>
        <Routes/>
        <Footer/>      
    </div>
 </HashRouter>   


