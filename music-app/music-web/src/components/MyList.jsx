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
    const BASE64_ENCODED_AUTH_CODE = Buffer.from("c0fe3aacf5e3425cbbca4000d51f9255:60bf9c88879641048338831a166227ca").toString('base64');
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
      console.log(response.data.access_token);
      return response.data.access_token;
    } catch (error) {
      console.log(error);
    }
  };
 

  var list =  axios.get(
                'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg', {
                    params: { limit: 50, offset: 0 },
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + getAuth,
                        'Content-Type': 'application/json',
          },

      });
    

export default class Mylist extends Component {

    state = {...initial}
    render(){
        console.log('lista de valores', list)
        return(
                <div className="teste">
                     <span>{this.state.title}</span>
                     <p>{this.state.msg}</p>
                    
                     
                </div>
        )
    }

} 

