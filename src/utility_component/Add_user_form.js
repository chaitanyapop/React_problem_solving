import { useState } from "react"
import Add_user_api from "../utility/Add_user_api_call"
import { useDispatch } from "react-redux"
import "../CSS_desktop_designs/Employee_DB/Add_user_form.css"
function Add_user_form(props) {
    
    let dispatch=useDispatch()
    function Form_submit(e)
    {
        e.preventDefault()
        props.Add_user_form_state()
        dispatch(Add_user_api(props.employe_data))
    }
    function Close_form()
    {
        props.Add_user_form_state()
    }
    return (
        <div >
            <form onSubmit={Form_submit} className="user_form">
                <label className="labels">First name:</label>
                <input type="text" placeholder="Enter firstname" value={props.employe_data.firstName} onChange={(e)=>{
                    props.setEmployeData({...props.employe_data, firstName:e.target.value})
                }} className="user_input"></input>
                <label className="labels">Last name:</label>
                <input type="text" placeholder="Enter lastname" value={props.employe_data.lastName} onChange={(e)=>{
                    props.setEmployeData({...props.employe_data, lastName:e.target.value})
                }} className="user_input"></input>
                <label className="labels">Email:</label>
                <input type="text" placeholder="Enter email" value={props.employe_data.email} onChange={(e)=>{
                    props.setEmployeData({...props.employe_data, email:e.target.value})
                }} className="user_input"></input>
                <label className="labels">Image URL:</label>
                <input type="text" placeholder="Enter image URL (optional)" value={props.employe_data.imageUrl} onChange={(e)=>{
                    props.setEmployeData({...props.employe_data, imageUrl:e.target.value})
                }} className="user_input"></input>
                <label className="labels">Enter Phone number:</label>
                <input type="text" placeholder="Enter Phone number" value={props.employe_data.phone} onChange={(e)=>{
                    props.setEmployeData({...props.employe_data, phone:e.target.value})
                }} className="user_input"></input>
                <label className="labels">Enter age:</label>
                <input type="text" placeholder="Enter age" value={props.employe_data.age} onChange={(e)=>{
                    props.setEmployeData({...props.employe_data, age:e.target.value})
                }} className="user_input"></input>
                <label className="labels">Enter DOB:</label>
                <input type="date" value={props.employe_data.dob} onChange={(e)=>{
                    props.setEmployeData({...props.employe_data, dob:e.target.value})
                }} className="user_input"></input>
                <button className="button" id="submit_button">Submit</button>
                <button onClick={Close_form} className="button" id="close_button">Close</button>
            </form>
        </div>
    )
}
export default Add_user_form

//https://hancockogundiyapartners.com/wp-content/uploads/2019/07/dummy-profile-pic-300x300.jpg