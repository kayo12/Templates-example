import React from "react";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import { HashRouter } from "react-router-dom";
import Nav from "../components/Nav";
import Routes from "./Routes";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import SpotifyApi from 'spotify-web-api-js'

const Home = (props) => {
  const [token, setToken] = useState("");

  function getTokenUrl() {
    return decodeURIComponent(
      window.location.hash.substring(1).split("&")[0].split("=")[1]
    );
  }

  useEffect(() => {
    console.log(`URL ${getTokenUrl()}`);
    const _spotify = getTokenUrl();

    if(_spotify){
      setToken(_spotify)  
    }
  }, []);

  return (
    <HashRouter>
      <div className="home">
        <Nav />
        <Routes token={token}/>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default Home;
