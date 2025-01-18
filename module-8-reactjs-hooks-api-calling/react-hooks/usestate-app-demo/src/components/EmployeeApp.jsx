import React,{useState} from 'react'

export default function EmployeeApp() {
//destructures of data via useState
  const[data,setData]=useState({
    id:1,
    name:"brijesh",
    age:35,
    pin:233223,
    salary:89500
  })
//   update employee data create a function 
const EmpData=()=>{

    setData({
    id:1,
    name:"sushil",
    age:25,
    pin:360005,
    salary:29500 
    })

}
    return (
    <div className='app'>
      <h1>Id of employee is :{data.id}</h1>
      <h2>Name of employee is :{data.name}</h2>
      <h3>Age of employee is :{data.age}</h3>
      <h4>Pincode of employee is :{data.pin}</h4>
      <h5>Salary of employee is :{data.salary}</h5>
      <h1><button type='button' onClick={EmpData}>Click To Update Employees Data</button></h1>
    </div>
  )
}
