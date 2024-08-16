import { useState, useEffect} from "react"
import products_api_call from "../utility/Products_api_call"
import {useDispatch, useSelector} from "react-redux"
import { ReducerType } from "@reduxjs/toolkit"
function Pagination()
{
    let dispatch=useDispatch()
    let products_data=useSelector(state => state.Products_reducer)
    let [page,setPage]=useState(1)
    useEffect(()=>{
        function api_call()
        {
            dispatch(products_api_call(page));
        }
        api_call()
    },[page])
    function pageChange(i)
    {
        // console.log(e.target.innerText)
        // setPage(e.target.innerText) when it comes to p tag then we use innerText
        console.log(i)
        setPage(i)
    }
    function Previous()
    {
        setPage((data)=> {
            if(data>1)
            {
                return data-1
            }
            else
            {
                return data
            }
        })
    }
    function Next()
    {
        setPage((data)=>{
            if(data<products_data.length)
            {
                return data+1
            }
            else
            {
                return data
            }
        })
    }
    return(
        <div>
            <p className="font-mono">This is all about pagination</p>
            <div className="grid grid-cols-3">
                {products_data.map((data) => {
                    return (
                        <span key={Math.random()} className="m-3 border-2 border-solid border-grey bg-gray-100 h-80">
                            <img src={data.images[0]} alt={data.title} className=" w-5/12 h-5/6 mx-auto" ></img>
                            <p className="text-center">{data.title}</p>
                        </span>
                    )
                })}
            </div>
            <div className="w-6/12 mx-auto">
                <button className=" h-16 w-16 bg-gray-400" onClick={Previous}>Previous</button>
                {products_data.map((data,i)=>{
                    return(
                        <p className={i==page-1 ?"inline border border-solid border-black p-6 py-5 bg-gray-300" :"inline border border-solid border-black p-6 py-5"}
                        onClick={(e)=>{pageChange(i+1)}}>{i+1}</p>
                    )
                })}
                <button className=" h-16 w-12 bg-gray-400" onClick={Next}>Next</button>
            </div>
            
        </div>
    )
}
export default Pagination