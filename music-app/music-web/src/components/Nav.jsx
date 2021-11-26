import React from 'react';
import './Nav.css' 
import { Link } from 'react-router-dom'
import Logo from '../assests/img/logo-dimond.png'
export default props => 
    <nav className="nav">
        <div className="nav-logo">
            <span id="logo">Dimond music</span>
            <img src={Logo} alt="" />
        </div>
        <div className="nav-itens">
            <Link to='/'>
                
                <i className="fa fa-home" title="Home" ></i>
            </Link>
            <Link to="/player">
                <i className="fa fa-music" title="Musicas" ></i>
            </Link>
            <Link to="/myslist">
                <i className="fa fa-list" title="Minha Lista"></i>
            </Link>
            <Link to="/profile">
                <i className="fa fa-user" title="Perfil" ></i>
            </Link>
        </div>    
    </nav>