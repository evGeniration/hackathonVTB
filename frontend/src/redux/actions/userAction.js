
import {FETCH_USERS} from "../constants/userСonstants";
import axios from "axios";
export const fetchUsers = () =>{
    return async dispatch => {
        const response = await axios.get('http://jsonplaceholder.typicode.com/users')
        console.log(response)
        return dispatch({type:FETCH_USERS,payload:response.data})
    }
}

export const addUser = (data) =>{
    return async dispatch => 
    {
        console.log(data)
        const response = await axios.post('http://localhost:5000/user', data)
        console.log(response.data)
        return dispatch({})
    }
}

