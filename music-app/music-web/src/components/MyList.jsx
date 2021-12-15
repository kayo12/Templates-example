import React ,{Component} from 'react';
import buffer from 'buffer';
import axios from 'axios';
import qs from 'qs';
import './MyList.css';

const initial = {
    title: 'Lista de musicas e generos',
    msg: 'o que acha de escolher uma musica para alegrar seu dia'
} 

const getAuth = async () => {
    const BASE64_ENCODED_AUTH_CODE = Buffer.from("c0fe3aacf5e3425cbbca4000d51f9255:60bf9c88879641048338831a166227ca", 'utf-8').toString('base64');
    const headers = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${BASE64_ENCODED_AUTH_CODE}`
      }
    };
    const data = {
      grant_type: 'client_credentials',
    };
    try {
      const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        qs.stringify(data),
        headers
      );
      console.log("token: ", response.data.access_token);
      return response.data.access_token;
    } catch (error) {
      console.log(error);
    }
  };
 

  const getAudioFeatures_Track = async (track_id) => {
    //request token using getAuth() function
    const access_token = await getAuth();
    //console.log(access_token);
  
    const api_url = `https://api.spotify.com/v1/artists/${track_id}`;
    //console.log(api_url);
    try{
      const response = await axios.get(api_url, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      });
      //console.log(response.data);
      const dados = response.data
      return dados
    }catch(error){
      console.log(error);
    }  
  };
    
export default class Mylist extends Component {

    state = {...initial}
    render(){
      var obj = getAudioFeatures_Track('0TnOYISbd1XYRBk9myaseg');
      console.log('DADOS: ', obj)
      console.log("token: ", getAuth());
        return(
                <div className="teste">
                     <span>{this.state.title}</span>
                     <p>{this.state.msg}</p>
                </div>
        )
    }

} 

