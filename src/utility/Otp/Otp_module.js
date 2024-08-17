function Otp_module(props)
{
    let {phoneNumber,otp_value, setOtpValue}=props
    return(
        <div>
            <p>Sent OTP on number {phoneNumber}</p>
            {otp_value.map((data,i)=>{
                return(
                    <div>
                        <input 
                        type="text"
                        ></input>
                    </div>
                )
            })}
        </div>
    )
}
export default Otp_module