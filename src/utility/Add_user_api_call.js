import axios from "axios"
import { add_employee_details } from "../Redux/Slices/Employee_slice"
function Add_user_api(data) {
    // console.log(data)
    return async function (dispatch) {
        try
        {
            let api_data = await axios.post('https://dummyjson.com/users/add',
                {
                    phone:data.phone,
                    firstName:data.firstName,
                    lastName:data.lastName,
                    email:data.email,
                    image:data.imageUrl,
                    age:data.age,
                    birthDate:data.dob
                }
            )
            console.log(api_data.data)
            dispatch(add_employee_details(api_data.data))
        }
        catch(e)
        {
            console.error(e)
        }
        
    }
}
// firstName:"",
//         lastName:"",
//         email:"",
//         imageUrl:"",
//         age:"",
//         dob:"",
export default Add_user_api