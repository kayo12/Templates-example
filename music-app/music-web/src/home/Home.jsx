import React from 'react';
import './Home.css';
import 'font-awesome/css/font-awesome.min.css';
import Nav from '../components/Nav';
import Player from '../components/Player'
import Music from '../components/Music';
import Footer from '../components/Footer';

export default props => 
    <div className="home">
        <Nav/>
        <Player/>
        <Footer/>
    </div>


