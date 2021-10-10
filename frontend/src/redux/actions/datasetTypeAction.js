import axios from "axios";
import {FETCH_USERS} from "../constants/userСonstants";


export const fetchUsers = () =>{
    return async dispatch => {
        const response = await axios.get('http://jsonplaceholder.typicode.com/users')
        console.log(response)
        return dispatch({type:FETCH_USERS,payload:response.data})
    }
}
