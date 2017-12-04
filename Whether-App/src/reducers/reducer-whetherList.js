import {FETCH_WHETHER} from '../actions/index';

export default function(state = [], action){

    switch(action.type){
        case FETCH_WHETHER :
            return [action.payload.data, ...state];
    }

    return state;
}