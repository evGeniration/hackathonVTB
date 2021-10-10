import axios from "axios";
const makeUrlList= (listArr)=>listArr.map(el=>axios.get('http://localhost:5000/datahub/'+ el))
export const fetchDataSetTypes = async (datasetArr) => {
    const listUrl=makeUrlList(datasetArr)
    return Promise.all([...listUrl])
        .then(res=>res.map(field=>field.data))
        .then(res=> res.map(field=>convertToGoodData(field)))
        .then(res=>res)
}

function convertToGoodData(data){
    console.log("data",data)
    let obj={
        tableTitle:data.properties?.description || "No description",
        types:data.schemaMetadata.fields
    }
    return obj
}

