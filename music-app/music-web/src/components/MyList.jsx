/* eslint-disable jsx-a11y/alt-text */
import React, { Component} from "react";
import SpotifyApi from 'spotify-web-api-js'
import "./MyList.css";
import album from "../assests/img/album-eminem.jpg";

const initial = {
  title: "Lista de musicas e generos",
  msg: "o que acha de escolher uma musica para alegrar seu dia",
  list: {},
  listAlbum: [],
  image: {}
};

const SpotApi = new SpotifyApi() 
export default class Mylist extends Component {
  state = { ...initial };


  getArtist(){

    console.log(`TOKEN: ${this.props.token}`);
    SpotApi.setAccessToken(this.props.token);  
    SpotApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3').then(
      function (data) {
        console.log('Artist information',data.genres);
        this.setState({list: JSON.stringify(data)})
      },
      function (err) {
        console.error(err);
      }
    );
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
              <span>{this.state}</span>
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
