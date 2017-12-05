import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=DSfdgdfg45dfgfd34gf39dfbxs6d454gdsbn33x';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';


export function fetchPosts(){

    const url = `${ROOT_URL}/posts${API_KEY}`;
    const request = axios.get(url);
    return {
        type : FETCH_POSTS,
        payload : request
    };
}

export function createPosts(props){

    const url = `${ROOT_URL}/posts${API_KEY}`;
    const request = axios.post(url, props);

    return {
        type: CREATE_POSTS,
        payload : request
    };

}