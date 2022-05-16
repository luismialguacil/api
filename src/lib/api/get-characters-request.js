import axios from 'axios';

export const getCharactersRequest = () => {
    const initialURL = "https://rickandmortyapi.com/api/character"
    return axios(initialURL, {
        method: 'GET'
    });
}