/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Music.css'
import Listen_Music from '../assests/img/home-listen-music.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <div className="music"> 
        <div className="Info-music">
            <div class="description-music">
                <span >Dimond Music</span>
                <p>Praesent finibus scelerisque orci at tempor. Suspendisse maximus ipsum nisl,
                     convallis maximus metus efficitur a. Sed quis est feugiat nunc ultricies iaculis
                      nec eget elit. Duis metus quam, placerat in purus et, porttitor sodales ante. 
                      Curabitur consequat, felis quis feugiat venenatis, augue diam posuere augue,
                       eu molestie augue velit ornare tellus. Duis sit amet iaculis justo, quis volutpat elit.
                        Fusce pellentesque fermentum justo id tempus. Praesent luctus sem sit amet lacus pellentesque 
                        congue. Vestibulum imperdiet tortor nisi, sit amet posuere dui accumsan et. In vel est luctus tortor aliquet venenatis sit amet id mauris. Aenean viverra turpis at erat pellentesque varius. Proin scelerisque blandit condimentum. Fusce maximus nunc urna, id tincidunt orci tristique 
                    eu. Ut mattis porttitor purus, vel mollis mi pulvinar eget. Praesent sagittis sollicitudin bibendum.
                    </p>
            </div>
            <div className="img-music">
                <img src={Listen_Music}/>
            </div>
        </div>  
    </div>
    
