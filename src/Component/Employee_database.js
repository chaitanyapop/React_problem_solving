import { useState } from "react"
import Add_user_form from "../utility_component/Add_user_form"
import { useSelector } from "react-redux"
import List_of_employee from "../utility_component/List_of_employee"
import Employee_detail from "../utility_component/Employee_detail"
import '../CSS_desktop_designs/Employee_DB/Employee_database.css'
import '../CSS_desktop_designs/Employee_DB/Main_container.css'
import '../CSS_desktop_designs/Employee_DB/form_container.css'
function Employee_database() {
    let [add_user_state, setAddUserState] = useState(false)
    let [clicked_user_state, setClickedUser] = useState(-1)
    let [delete_user_data, setDeleteUser] = useState(-1)
    let [update_user_data, setUpdateUser] = useState(-1)
    let [employe_data, setEmployeData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        imageUrl: "",
        age: "",
        dob: "",
        phone: ""
    })
    let employee_data = useSelector(state => state.Employee_reducer)
    function Add_user_form_state() {
        setAddUserState(!add_user_state)
    }
    function Clicked_user_state(phone) {
        setClickedUser(phone)
    }
    return (
        <div className="main_container">
            <div className="container">
                <section className="header">
                    <h2>Employee database</h2>
                    <button onClick={Add_user_form_state} className="button" id="Add_user_button">Add user</button>

                </section>
                <section className="aside1">
                    {/*Here we will display the data which we are adding */}
                    <List_of_employee Clicked_user_state={Clicked_user_state} employee_data={employee_data} />

                </section>
                <section className="aside2">
                    {/*Here we will display the detailed information of an employee */}
                    <Employee_detail employee_data={employee_data} clicked_user_state={clicked_user_state} Add_user_form_state={Add_user_form_state} setEmployeData={setEmployeData} />
                </section>

            </div>
            <div className={add_user_state===true?"form_container":"no_form"}>
                {add_user_state && <section>
                    <Add_user_form Add_user_form_state={Add_user_form_state} employe_data={employe_data} setEmployeData={setEmployeData} />
                </section>}
            </div>
        </div>

    )
}
export default Employee_database