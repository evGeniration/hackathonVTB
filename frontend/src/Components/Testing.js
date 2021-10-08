import React, {useEffect} from 'react';
import axios from "axios";

const Testing = () => {
    useEffect(()=>{
        axios.get("http://localhost:5000/test").then(res=>console.log(res.data))
    },[])
    return (
        <div>

        </div>
    );
};

export default Testing;
