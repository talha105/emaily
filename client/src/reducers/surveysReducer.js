import {FETCH_SURVEYS} from "../actions/types"
const inialState=[]
export default function (state=inialState,action){
    switch(action.type){
        case FETCH_SURVEYS:
            return action.payload;
        default:
            return state
    }
}