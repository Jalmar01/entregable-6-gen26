import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const productsSlice = createSlice({
    name:'name',
    initialState: null,
    reducers: {
        setProductsG: (state, action) => action.payload
    }
})

export const {setProductsG} = productsSlice.actions

export default productsSlice.reducer

const defaultBaseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1/products' 
export const getAllProductsThunk = (url= defaultBaseUrl) => (dispatch) => {
   axios.get(url)
   .then(res => dispatch(setProductsG(res.data)))
   .catch(err => console.log(err))
}

