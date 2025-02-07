import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function CountData() {
   // destructured of data
   const[count,setCount]=useState(0);
   useEffect(()=>{
 
     axios.get(`http://localhost:8000/contact-us`).then((response)=>{
       setCount(response.data);
     })
 
   },[count]);
 
  return (
    <>
    <span>{count.length}</span>
    </>
  )
}