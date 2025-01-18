import React,{useState} from 'react'
//useState : useState is a type of hooks
//useState is used to stored all type of data ex: number | boolean | bigIntger | array | objects
//useState is used to inisilised data in form of array const[data,setData]=useState(0)
//useState is destructured of data  const[data,setData]=useState(0)
//useState is used to update data one components to another components
//useState is provides immutable data 
//useState is stored data in objects 
export default function CountApp() {
//destructured of useState
const[count,setCount]=useState(0); 
return (
<div className='app'>
<h1 className=''>The initial values of Count is : {count}</h1>
<h2 className=''><button type='button' onClick={()=>setCount(count+1)}>+</button>
&nbsp;
<button type='button' onClick={()=>setCount(count-1)}>-</button></h2>
</div>
)
}
