import { configureStore } from "@reduxjs/toolkit";
import Products_slice from "./Slices/Products_slice";
import { product_slice_middleware } from "./Middleware/Products_slice_middleware";
import Employee_slice from "./Slices/Employee_slice";
import { employee_slice_middleware } from "./Middleware/Employee_slice_middleware";
let store=configureStore({
    reducer:{
        Products_reducer:Products_slice,
        Employee_reducer:Employee_slice
    },
    middleware:()=>{
        return [employee_slice_middleware]
    }
})
export default store