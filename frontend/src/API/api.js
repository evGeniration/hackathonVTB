import axios from "axios";

export const postData = async (data) => {
    return await axios.post('http://localhost:5000/sampledata', data)
}