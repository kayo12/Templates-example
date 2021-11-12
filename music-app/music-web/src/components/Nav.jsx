import React from 'react';
import './Nav.css' 
import { Link } from 'react-router-dom'
export default props => 
    <nav className="nav">
        <div >
            <img/>
        </div>
        <ul>
            <li><i className="fa fa-home" title="Home" ></i> </li>
            <li><i className="fa fa-music" title="Musicas" ></i></li>
            <li><i className="fa fa-list" title="Minha Lista"></i> </li>
            <li><i className="fa fa-user" title="Perfil" ></i></li>
        </ul>
    </nav>