import axios from 'axios';
import {FETCH_USER,FETCH_SURVEYS} from "./types"
export const  fetchUser= ()=>{
    
    return async function(dispatch){
        const res= await axios.get('/api/currentUser')
        dispatch({
            type:FETCH_USER,
            payload:res.data
        })
    }
    
}
export const handlePayment=(token)=>{
    return async function(dispatch){
        const res= await axios.post('/api/stripe', token)
        dispatch({
            type:FETCH_USER,
            payload:res.data
        })
    }
}
export const sendSurvey=(survey,history)=> async dispatch=>{
    const res= await axios.post('/api/surveys',survey);
    dispatch({
        type:FETCH_USER,
        payload:res.data
    })
    history.push('/survey')
}
export const fetchSurveys=()=>async dispatch=>{
    const res=await axios.get('/api/surveys')
    dispatch({
        type:FETCH_SURVEYS,
        payload:res.data
    })
}