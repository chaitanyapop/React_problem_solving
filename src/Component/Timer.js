import { useState } from "react"
let interval
function Timer()
{
    let [time, setTime]=useState({seconds:null, minutes:null, hours:null})
    let[start, setStart]=useState(false)
    let[stop, setStop]=useState(false)
    
    function change_hrs(e)
    {
        if(e.target.value<100)
        {
            setTime({...time, hours:e.target.value})
        }
    }
    function change_min(e)
    {
        if(e.target.value<100)
        {
            setTime({...time, minutes:e.target.value})
        }
    }
    function change_sec(e)
    {
        if(e.target.value<100)
        {
            setTime({...time, seconds:e.target.value}) 
        }
    }
    function start_click()
    {
        setStart(!start)
        interval=setInterval(()=>{
            setTime((prevData)=>{
                if(prevData.seconds!=0 && prevData.seconds!==null && prevData.seconds!=="")
                {
                    if(prevData.seconds>60 && prevData.minutes<60)
                    {
                        return {...prevData,minutes:prevData.minutes+1,seconds:prevData.seconds-60}
                    }
                    else if(prevData.seconds>60 && prevData.minutes>60)
                    {
                        return {hours:prevData.hours+1,minutes:prevData.minutes-60, seconds:prevData.seconds-60}
                    }
                    else if(prevData.seconds<60 && prevData.minutes>60)
                    {
                        return {...prevData, hours:prevData.hours+1, minutes:prevData.minutes-60}
                    }
                    else
                    {
                        return {...prevData, seconds:prevData.seconds-1}
                    } 
                }
                else if(prevData.minutes!==0 && prevData.minutes!==null && prevData.minutes!=="") 
                {
                    if(prevData.minutes>60)
                    {
                        return {...prevData,hours:prevData.hours+1, minutes:prevData.minutes-60}
                    }
                    else
                    {
                        return {...prevData, minutes:prevData.minutes-1, seconds:59}
                    }   
                }
                else if(prevData.hours!==0 && prevData.hours!==null && prevData.hours!=="")
                {
                    return {hours:prevData.hours-1, minutes:59, seconds:59}   
                }
                else
                {
                    clearInterval(interval)
                    return {seconds:null, minutes:null, hours:null}
                }
            })
        },1000)
        

    }
    function reset_click()
    {
        setTime({seconds:"", minutes:"", hours:""})
    }
    function stop_click()
    {
        setStart(!start)
        clearInterval(interval)
        
    }
    /*These three functionaities can go under custom hook */
    return(
        <div>
            <p>Countdown timer</p>
            <section>
                <label>Hours</label>
                <input type="number" placeholder="00" value={time.hours} onChange={change_hrs}></input>
                <label>Minutes</label>
                <input type="number" placeholder="00" value={time.minutes} onChange={change_min}></input>
                <label>Seconds</label>
                <input type="number" placeholder="00" value={time.seconds} onChange={change_sec}></input>
            </section>
            <section>
                {start==false ? <button onClick={start_click}>Start</button> : <button onClick={stop_click}>Stop</button>}
                <button onClick={reset_click}>Reset</button>
            </section>
        </div>
    )
}
export default Timer