import axios from "axios" 
import getConfiAuth from "../utils/getConfigAuth"
import { useState } from "react"
import getConfigAuth from "../utils/getConfigAuth"
import {useDispatch} from "react-redux"
import { setCartG } from "../store/slices/Cart.slice"

const usePurchases = () => {

const [purchases, setPurchases] = useState()
const dispatch = useDispatch()

  const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
  
  const getAllPurchases = () => {
    axios.get(url, getConfiAuth())
    .then(res => setPurchases(res.data))
    .catch(err => console.log(err))
  }

  const makePurchases = () => {
    axios.post(url, null, getConfigAuth())
     .then(res =>{
       console.log(res.data)
       dispatch(setCartG([]))
      })
     .catch(err => console.log(err))
  }

  return { purchases, getAllPurchases, makePurchases }
}

export default usePurchases