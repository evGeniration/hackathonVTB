import axios from "axios";

const URL = 'localhost:5000'

const instance = axios.create({
    baseURL: URL,
})

export const postData = async (data) => {
    return await axios.post('localhost:5000/sampledata', data)
}