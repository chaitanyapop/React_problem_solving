import '../CSS_desktop_designs/Employee_DB/Employee_details.css'
function Employee_detail(props) {
    // function update_details(data)
    // {
    //     props.Add_user_form_state()
    //     props.setEmployeData(data)
    // }
    return (
        <div>
            <p className='employee_detail_header'>Details of an Employee</p>
            {
                props.employee_data.map((data, i) => {
                    return (
                        <span className=''>
                            {data.phone == props.clicked_user_state &&
                                <div className='employee_details_section'>
                                    <img src={data.imageUrl} alt='Employee image'id='employee_image'></img>
                                    <p>First Name: {data.firstName}</p>
                                    <p>Last Name: {data.lastName}</p>
                                    <p>Email: {data.email}</p>
                                    <p>Phone number: {data.phone}</p>
                                    <p>DOB: {data.dob}</p>
                                    {/* <button onClick={()=>{update_details(data)}}>Update Details</button> */}
                                </div>
                            }
                        </span>
                    )
                })
            }
        </div>
    )
}
export default Employee_detail