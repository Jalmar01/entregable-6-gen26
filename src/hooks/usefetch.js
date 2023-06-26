import axios from "axios"
import { useState } from "react"


const usefetch = (baseUrl) => {

const [infoApi, setInfoApi] = useState()
const [hasError, setHasError] = useState(false)
const [isloading, setIsloading] = useState(true)

const getApi = (path) => {
    const url = `${baseUrl}${path}`
    setIsloading(true)
    axios.get(url)
    .then(res => {
        setInfoApi(res.data)
        setHasError(false)
        })
    .catch(err => {
        console.log(err)
        setHasError(true)
    })
    .finally( () => {
        setIsloading(false)
    })
}
   //post

   const postApi = (path, data) => {
    const url = `${baseUrl}${path}`
    axios.post(url, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
   }
 return [ infoApi, getApi, hasError, isloading, postApi ]
}

export default usefetch