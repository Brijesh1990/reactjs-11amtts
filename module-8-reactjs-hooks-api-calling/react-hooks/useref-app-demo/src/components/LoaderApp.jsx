import React,{useState,useEffect} from 'react'
// useEffect(): useEffect is a types of hook
// this hook is used to add some effects in our react js applications 
// this hook is add to fetch data | timers | add effects etc
// useEffect(()=>{},[dependency])
// dependency is pass in useEffect for ...
// a) no dependency b) pass dependency [] c) [props,state]
// a) no dependency : render data again and again
// b) [] blank array render a data one times
// c) [props,state] render data one times and we can even update data also 
import loaderImg from '../loader.gif'
export default function LoaderApp() {
//destructuring of data
const[loader,setLoader]=useState(true);
useEffect(()=>{
setTimeout(()=>{
setLoader(false);
},2500)    
},[loader])

return (
loader ? 
<>
<img src={loaderImg} alt='img'  />
</>
: 
<>
<div>
<h1 align='center'>Great we are comming Soon!</h1>
</div>
</>
)
}
