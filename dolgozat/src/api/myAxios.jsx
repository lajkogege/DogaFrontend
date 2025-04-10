import axios from "axios";

const MyAxios = axios.create({
    baseURL:"http://localhost:8000",
    withCredentials:true
})

export default MyAxios