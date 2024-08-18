import { useEffect, useRef } from "react"
import "../../CSS_desktop_designs/Otp/Otp_page.css"
function Otp_module(props) {
    let { phoneNumber, otp_value, setOtpValue } = props
    let currentPosition = useRef([])
    console.log(otp_value)

    useEffect(() => {
        console.log(currentPosition.current)
        currentPosition.current[0].focus()
    }, [])

    function handle_change(e, i) {
        let value = e.target.value
        if (isNaN(value)) {
            return
        }
        else {
            let newOtp = [...otp_value]
            newOtp[i] = value.substring(value.length - 1) // it means start from value.length-1 that is why only last entered digit
            setOtpValue(newOtp)
            if (otp_value && i < 4 && currentPosition.current[i+1]) {
                console.log("in change")
                currentPosition.current[i + 1].focus()
            }

        }
    }
    function handle_click(i) {
        // currentPosition.current[i].setSelectionRange(1, 1)
    }
    function handle_keypress(e, i) {
        if (e.key === "Backspace") {
            let newOtpValue = [...otp_value];
            if (newOtpValue[i]) {
                console.log("inisde if")
                // Clear the current input box value
                newOtpValue[i] = '';
                setOtpValue(newOtpValue);
            } else if (i > 0 && !otp_value[i]) {
                // Move focus to the previous input box and clear its value
                console.log("here in else if")
                
                // newOtpValue[i - 1] = '';
                // setOtpValue(newOtpValue);
                currentPosition.current[i - 1].focus();
                e.preventDefault()
                
                // 
            }
        }
    }

    return (
        <div className="Otp_page">
            <p className="Header">Sent OTP on number {phoneNumber}</p>
            <div className="otp_input_container">
            {otp_value.map((data, i) => {
                return (
                        <input
                            type="text"
                            value={data}
                            onChange={(e) => { handle_change(e, i) }}
                            onKeyDown={(e) => { handle_keypress(e, i) }}
                            ref={(element) => currentPosition.current[i] = element}
                            className="otp_input"

                        ></input>
                )
            })}
            </div>
            <button className="button_otp">Submit OTP</button>
        </div>
    )
}
export default Otp_module

/*ok so summary is, 
If I just move the focus back to the previous text field then by considering default behavior of a backspace button it removes the number present in the previous text box and triggers onChange event. 
On the other hand, if I use newOtpValue[i-1]="" and then update the state which triggers the re-render with the updated state value and in the useRef we have already changed the focus value to the previous one which persists in the consecutive re-render as well and focus shifts back to the previous text box which neglects the default behavior of the backspace 
and last option is to use e.preventDefault() to prevent the default behavior of the backspace button which helps us to not to call the onChange event */