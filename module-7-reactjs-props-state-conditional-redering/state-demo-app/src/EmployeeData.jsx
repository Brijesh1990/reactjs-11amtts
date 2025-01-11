import React,{useState} from "react";

// function EmployeeApp()
// {
//     // intialised state 
//     const[data,setData]=useState("sushil kumar");
//     // data is a current variables of state
//     // setData is a function where we can update data inside of state

//     return (
//         <>
//             <h1>My name is : {data}</h1>
//         </>
//     )
// }


// update data inside of state...
// function EmployeeApp()
// {
//     // intialised state 
//     // destructuring od state data
//     const[data,setData]=useState("sushil kumar");
//     // useState("") any type of data type can be passed ex: boolean | string | object | bigInt etc 
//     // data is a current variables of state
//     // setData is a function where we can update data inside of state

//     return (
//         <>
//             <h1>My name is : {data}</h1>
//             <button type="button" onClick={()=>{setData("Brijesh Kumar Pandey")}}>Update Name</button>
//         </>
//     )
// }



function EmployeeApp()
{
// intialised state 
// destructuring od state data
const[data,setData]=useState({

id:1,
name:"brijesh",
age:35,
salary:89500
});
// useState("") any type of data type can be passed ex: boolean | string | object | bigInt etc 
// data is a current variables of state
// setData is a function where we can update data inside of state

// update all objects data 

const UpdateData=()=>{

setData({   
id:1,
name:"sushil",
age:25,
salary:19500
})
}

return (
<>
<h1>Employees id is : {data.id}  <br /> <b style={{fontSize:"16px"}}>employees name is : {data.name}</b> <br />  <b style={{fontSize:"16px"}}>employees  age : {data.age}  <br /> <b style={{fontSize:"16px"}}>employees salary is : {data.salary}</b> <br /></b> <br /></h1>
<button type="button" onClick={ UpdateData}>Update Name</button>
</>
)
}

export default EmployeeApp