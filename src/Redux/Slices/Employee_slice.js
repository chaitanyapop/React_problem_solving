import { createSlice } from "@reduxjs/toolkit";

let initialState=[]
let Employee_slice=createSlice({
    name:"Employee_slice",
    initialState:initialState,
    reducers:{
        add_employee_details(state,action)
        {
            return [...state,{
                id:action.payload.id,
                imageUrl:action.payload.image,
                firstName:action.payload.firstName,
                lastName:action.payload.lastName,
                email:action.payload.email,
                age:action.payload.age,
                dob:action.payload.birthDate,
                phone:action.payload.phone
            }]
        },
        delete_employee_details(state,action)
        {
            /*eidt and delete happens at backend level but we do not have an api for that therefore we are doing it at frontend level */
            return state.filter((data)=>{
                return data.phone!=action.payload
            })
        },
        edit_employee_details(state,action)
        {

        }
    }
})
export let {add_employee_details,delete_employee_details,edit_employee_details}=Employee_slice.actions
export default Employee_slice.reducer