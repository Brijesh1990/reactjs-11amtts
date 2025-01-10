import React,{useState} from "react";
// function App()
// {
//     //const name="Brijesh";
//     // destructuring of data
//     const[name,setName]=useState("Brijesh kumar pandey");
//     return (
//         <>
//             <div className="app">
//                 <h1>My name is :{name}</h1>
//                 <button type="button" onClick={()=>{setName("sushil kumar pandey")}}>Update Name </button>
//             </div>
//         </>
//     )
// }

function App()
{
//const name="Brijesh";
// destructuring of data
const[data,setName]=useState({
id:100,
name:"brijesh",
age:35
}

);
return (
<>
<div className="app">
<h1>My name is :{data.name}  <br /> and our age is :{data.age}  <br /> and my unique id  :{data.id} </h1>

<button type="button" onClick={()=>{setName("sushil kumar pandey")}}>Update Name </button>
</div>
</>
)
}

export default App