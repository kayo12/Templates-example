import React from 'react';
import './Home.css';
import Nav from '../components/Nav'
import MyLyst from '../components/MyList'
import Footer from '../components/Footer'

export default props => 
    <div className="home">
        <Nav/>
        <MyLyst/>
        <Footer/>
    </div>