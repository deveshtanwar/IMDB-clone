import axios from 'axios';

export const categoryMovies = async (apiURL) =>{
    try{
        let response = await axios.get(apiURL);
        return response.data;
    }
    catch(error){
        console.log("Problem in connection", error.message);
    }
}