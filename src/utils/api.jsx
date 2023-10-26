
import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3"

// const TMDB_TOKEN = process.env.TMDB_TOKEN;
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjFhY2YxNzJlNmJlOTgxYWI1ZDg3ZjljNGI5N2RkZCIsInN1YiI6IjYzZjlhMGM0NTcxNzZmMDA4MWQ1ODg0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u9q4H3-_QgQxxdiVvy38h4P_GjrDjhTa38B6o_dEGMI"



const headers = {
    Authorization: "bearer " +
     TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params) => {
  try{
    const {data} = await axios.get(BASE_URL + url,{
     headers,
      params,
    }) 
      return data;
    } catch (err){
        console.log(err);
        return err;
    }
};



