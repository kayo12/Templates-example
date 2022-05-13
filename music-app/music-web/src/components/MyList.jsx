/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
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

  async getAuth() {
    const client_id = "c0fe3aacf5e3425cbbca4000d51f9255";
    const client_secret = "60bf9c88879641048338831a166227ca";
    const auth_token = Buffer.from(
      `${client_id}:${client_secret}`,
      "utf-8"
    ).toString("base64");

    try {
      const token_url = "https://accounts.spotify.com/api/token";
      const data = qs.stringify({ grant_type: "client_credentials" });

      const response = await axios.post(token_url, data, {
        headers: {
          Authorization: `Basic ${auth_token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      //return access token
      return response.data.access_token;
      //console.log(response.data.access_token);
    } catch (error) {
      //on fail, log the error in console
      console.log(error);
    }
  }

  async getAudioFeatures_Track(track_id) {
    //request token using getAuth() function
    const access_token = await this.getAuth();
    //console.log(access_token);

    const api_url = `https://api.spotify.com/v1/audio-features/${track_id}`;
    console.log(api_url);
    try {
      const response = await axios.get(api_url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      this.setState({ list: await response.data });
    } catch (error) {
      console.log(error);
    }
  }

  async getListAlbum(id_album) {
    //request token using getAuth() function
    const access_token = await this.getAuth();
    //console.log(access_token);

    const api_url = `https://api.spotify.com/v1/albums/${id_album}`;
    console.log(api_url);
    try {
      const response = await axios.get(api_url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      console.log(await response.data.images[0]);

      this.setState({ listAlbum: await response.data });
    } catch (error) {
      console.log(error);
    }
  }

  buscar(e) {
    let busc = document.getElementById("inputSearch").value;
    this.getListAlbum(busc);
    console.log(this.state.listAlbum.name);
  }

  render() {
    // AQUI EU PEGO O VALOR DA FUNÇÃO PRA VARIAVEL POSTS
    //this.getAudioFeatures_Track('07A0whlnYwfWfLQy4qh3Tq')
    return (
      <div className="info-musics">
        <div className="container-Search">
          <input
            type="text"
            name="search"
            id="inputSearch"
            placeholder="Digite o nome da Musicas, Albuns, artistas..."
          />
          <button onClick={(e) => this.buscar(e)}>Buscar</button>
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
        </div>

        <p>{JSON.stringify(this.state.listAlbum.images)}</p>
      </div>
    );
  }
}
