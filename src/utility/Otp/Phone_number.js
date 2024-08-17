import { useState } from "react"
function Phone_number(props)
{
    // let [phoneNumber, setPhoneNumber]=useState()
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
            <section>
                <p>Enter Mobile number</p>
                <input type="number" placeholder="Enter mobile number" value={props.phoneNumber} onChange={phone_number_enter}></input>
                {phoneError!="" && <p>{phoneError}</p>}
                <button disabled={disable} onClick={()=>{props.setOtpFlag(true)}}>Send OTP</button>
            </section>
        </div>
    )
}
export default Phone_number