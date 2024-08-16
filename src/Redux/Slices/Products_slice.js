import {createSlice} from '@reduxjs/toolkit'
let initialState=[]
let Product_slice=createSlice({
    name:'Products',
    initialState:initialState,
    reducers:{
        store_products_data(state, action)
        {
            return action.payload
        }
    }
})
export let {store_products_data}=Product_slice.actions
export default Product_slice.reducer