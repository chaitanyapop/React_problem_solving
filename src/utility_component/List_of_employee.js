import { useDispatch } from "react-redux"
import { delete_employee_details } from "../Redux/Slices/Employee_slice"
import '../CSS_desktop_designs/Employee_DB/List_of_employee.css'
function List_of_employee(props) {
    let dispatch=useDispatch()
    function Delete_employee(phone)
    {
        dispatch(delete_employee_details(phone))
    }
    return (
        <div className="list_of_employee_container">
            <p className="header_list_of_employee">List of employees</p>
            <section className="emp_list_section">
            {
                props.employee_data.map((data, i) => {
                    return (
                        <div key={data.phone} className="employee_list">
                            <p className="emp_name" onClick={() => { props.Clicked_user_state(data.phone) }}>{data.firstName + " " + data.lastName}</p>
                            <button onClick={()=>{Delete_employee(data.phone)}}className="button">Delete</button>
                        </div>
                    )
                })
            }
            </section>
        </div>
    )
}
export default List_of_employee