import {FETCH_USER} from "../actions/types"
const inialState=null


export default function(state=inialState,action){
    switch(action.type){
        case FETCH_USER:
            return state=action.payload || false
        default:
            return state
    }
}