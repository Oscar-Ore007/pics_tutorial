import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID j4awG2c5pZd9iTWS85l98SZe1nvJ7oIBY_jFRsIG24k'
    }
});