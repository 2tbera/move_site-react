import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/search?&q=',
    headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "6c486e6840msh24f792e5ee226d3p17e473jsn51960995c05b"
    }

});

export default instance;
