/* eslint-disable jsx-a11y/alt-text */
import React, { Component, useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./MyList.css";
import album from "../assests/img/album-eminem.jpg";

const initial = {
  title: "Lista de musicas e generos",
  msg: "o que acha de escolher uma musica para alegrar seu dia",
  list: [],
  listAlbum: [],
};
export default class Mylist extends Component {
  state = { ...initial };

  getArtist(){
    SpotifyWebApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
      if (err) console.error(err);
      else console.log('Artist albums', data);
    }); 
  }
  render() {
    return (
      <div className="info-musics">
        <div className="container-Search">
          <input
            type="text"
            name="search"
            id="inputSearch"
            placeholder="Digite o nome da Musica, Albuns, artistas..."
          />
          <button onClick={() => this.getArtist()}>Buscar</button>
        </div>
        <div className="carousel">
          <div className="list-album">
            <img src={album} class="img-album" />
            <div className="item-album">
              <span>TITULO</span>
              <p>Lançamento: 2012</p>
              <button> Saiba mais</button>
            </div>
          </div>
          <div className="list-album">
            <img src={album} class="img-album" />
            <div className="item-album">
              <span>Lose Yourself</span>
              <p>Lançamento: 2012</p>
              <button> Saiba mais</button>
            </div>
          </div>
          <div className="list-album">
            <img src={album} class="img-album" />
            <div className="item-album">
              <span>TITULO</span>
              <p>Lançamento: 2012</p>
              <button> Saiba mais</button>
            </div>
          </div>
          <div className="list-album">
            <img src={album} class="img-album" />
            <div className="item-album">
              <span>TITULO</span>
              <p>Lançamento: 2012</p>
              <button> Saiba mais</button>
            </div>
          </div>
          <div className="list-album">
            <img src={album} class="img-album" />
            <div className="item-album">
              <span>TITULO</span>
              <p>Lançamento: 2012</p>
              <button> Saiba mais</button>
            </div>
          </div>
          <div className="list-album">
            <img src={album} class="img-album" />
            <div className="item-album">
              <span>TITULO</span>
              <p>Lançamento: 2012</p>
              <button> Saiba mais</button>
            </div>
          </div>
          <div className="list-album">
            <img src={album} class="img-album" />
            <div className="item-album">
              <span>TITULO</span>
              <p>Lançamento: 2012</p>
              <button> Saiba mais</button>
            </div>
          </div>
          <div className="list-album">
            <img src={album} class="img-album" />
            <div className="item-album">
              <span>TITULO</span>
              <p>Lançamento: 2012</p>
              <button> Saiba mais</button>
            </div>
          </div>
          <div className="list-album">
            <img src={album} class="img-album" />
            <div className="item-album">
              <span>TITULO</span>
              <p>Lançamento: 2012</p>
              <button> Saiba mais</button>
            </div>
          </div>
          <div className="list-album">
            <img src={album} class="img-album" />
            <div className="item-album">
              <span>TITULO</span>
              <p>Lançamento: 2012</p>
              <button> Saiba mais</button>
            </div>
          </div>
          <div className="list-album">
            <img src={album} class="img-album" />
            <div className="item-album">
              <span>TITULO</span>
              <p>Lançamento: 2012</p>
              <button> Saiba mais</button>
            </div>
          </div>
        </div>

        <p>{JSON.stringify(this.state.listAlbum.images)}</p>
      </div>
    );
  }
}
