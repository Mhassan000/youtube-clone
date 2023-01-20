import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: 50,
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY, //save REACT_RAPID_API_KEY(your Api key) in .env file 
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromApi = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    // console.log(data);
    return data;
    
}

