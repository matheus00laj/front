import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'localhost:3000'
})

axiosInstance.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`

        return config
    }
},
    (error)=>{
        return Promise.reject(error)
    }
)

export default axiosInstance