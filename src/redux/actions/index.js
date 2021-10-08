import axios from "axios";

export const fetchUsers = () =>{
    return async dispatch => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data)
    }
}