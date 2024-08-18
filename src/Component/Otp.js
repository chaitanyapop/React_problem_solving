import { useState } from "react"
import { useSelector } from "react-redux"
import Phone_number from "../utility_component/Otp/Phone_number"
import Otp_module from "../utility_component/Otp/Otp_module"
function Otp()
{
    let[sendOtpFlag,setOtpFlag]=useState(false)
    let [phoneNumber, setPhoneNumber]=useState()
    let [otp_value, setOtpValue]=useState(["","","",""])
    return(
        <div>
            {/*Enter mobile number and submit otp button also built the mobile number validation */}
            {sendOtpFlag===false && <Phone_number setOtpFlag={setOtpFlag} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>}
            {sendOtpFlag===true && <Otp_module phoneNumber={phoneNumber} otp_value={otp_value} setOtpValue={setOtpValue}/>}
        </div>
    )
}
export default Otp