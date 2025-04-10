import MyAxios from './myAxios'

const fetchData = async (url, callBack)=>{
    const response = await MyAxios.get(url);
    callBack(response.data);
    return response.data
}

export default fetchData;