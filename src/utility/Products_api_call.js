import axios from "axios"
import {store_products_data} from '../Redux/Slices/Products_slice'
// async function products_api_call(dispatch,page)
// {
//     //let data= await axios("https://dummyjson.com/products?limit=10")
    
// }

export let products_api_call= (page)=> async(dispatch)=>{
    console.log(page)
    let data= await axios(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`)
    dispatch(store_products_data(data.data.products))
}

//console.log(products_api_call)
export default products_api_call