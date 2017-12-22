import {
    FETCH_USERS
} from './types';

import axios from 'axios';

export function fetchUsers(users){
    const request = axios.get('https://jsonplaceholder.typicode.com/users');
    // debugger;
    return { 
        type: FETCH_USERS,
        payload : request
    };
}