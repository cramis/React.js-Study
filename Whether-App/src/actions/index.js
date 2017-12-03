import axios from 'axios';

import { myConfig } from '../app-config';

const API_KEY = myConfig.API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WHETHER = 'FETCH_WHETHER';

export function fetchWhether(city){
    const url = `${ROOT_URL}&q=${city},kr`;
    const request = axios.get(url);

    return {
        type : FETCH_WHETHER,
        payload : request
    };
}