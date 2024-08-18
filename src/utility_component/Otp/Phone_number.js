import { useState } from "react"
import "../../CSS_desktop_designs/Otp/Phone_number.css"
function Phone_number(props)
{
    let [phoneError, setPhoneError]=useState("")
    let [disable,setDisable]=useState(true)
    function phone_number_enter(e)
    {
        props.setPhoneNumber(e.target.value)
        if(e.target.value.length<10 || e.target.value.length>10)
        {
            setDisable(true)
            setPhoneError("Incorrect phone number")
            
        }
        else
        {
            setPhoneError("")
            setDisable(false)
        }
    }
    return(
        <div>
            <section className="Phone_number_section">
                <p className="Header">Enter Mobile number</p>
                <input type="number" placeholder="Enter mobile number" value={props.phoneNumber} onChange={phone_number_enter}
                className="phone_input"></input>
                {phoneError!="" && <p className="error_dialog">{phoneError}</p>}
                <button disabled={disable} onClick={()=>{props.setOtpFlag(true)}} className="button_otp">Send OTP</button>
            </section>
        </div>
    )
}
export default Phone_number