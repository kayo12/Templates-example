import React from 'react'
import './Player.css'
import imgPlayer from '../assests/img/music-song.png'
export default props => 
    <div className="player">
       <div className="control-music">
                <img src={imgPlayer} alt="img-songs"/>
                
            <div class="settings-music">    
               <span>Orochi - Balão</span>
               <div className="progress-bar">
                   <div></div>
               </div>
               <div className="setup-music">
                    <button><i class="fa fa-undo"></i></button>
                    <button><i class="fa fa-backward"></i></button>
                    <button><i class="fa fa-play"></i></button>
                    <button><i class="fa fa-forward"></i></button>
                    <button><i class="fa fa-volume-up"></i></button>     
                </div>
           </div>
       </div>
       <div className="list-music">
            
            <ul>
                <li>1Lista de musicas</li>
                <li>2Lista de musicas</li>
                <li>3Lista de musicas</li>
                <li>3Lista de musicas</li>
                <li>4Lista de musicas</li>
            </ul>
       </div>
    </div>