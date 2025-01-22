import React,{useState,useEffect} from 'react'
import axios from 'axios'
// axios : axios is a libraries i.e used to Post | get | put | delete | update data from any URL 
import imgLoader from '../loader.gif'
export default function FetchData() {
// destructring of data
const[name,setName]=useState("");
// loader destructruing od data
const[loader,setLoader]=useState(true);
// load loader
useEffect(()=>{
    setTimeout(()=>{
        setLoader(false);
    },2500)
})

// fetch data using axios 
useEffect(()=>{
   axios.get(`http://localhost:8000/employee`).then((response)=>{
    setName(response.data);
   })  

},[name])
  return (
    loader? 
    <>
    <img src={imgLoader} alt='img' className='img-fluid w-75' />
    </>
    :
    <div>
     <div className='container p-5 mt-5'>
       <h1> <button type='button' className='ms-0 btn btn-lg btn-primary'>Add Employee Data</button></h1>
        <h2>Display all employee Details <button type='button' className='ms-5 btn btn-sm btn-danger float-end'>Export Data</button></h2>
        <table className='table table-responsive border'>
            <tr>
                <th>#id</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Department</th>
                <th>Action</th>
            </tr>
            {/* fetch all data of api  */}
            {name && name.map((item)=>{
                return(
                <>
                  <tr>
                    <td>{item.id}</td>
                    <td><img src={item.photo} alt='photo' className='w-fluid w-50 rounded-circle' /></td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.salary}</td>
                    <td>{item.department}</td>
                    <td><a href='' className='btn btn-danger text-white bg-danger fs-6'>Delete</a> | <a href='' className='btn btn-danger text-white bg-primary fs-6'>Edit</a> </td>
                  </tr>
                </>
                )
            })}
            <tr>

            </tr>
        </table>
     </div> 
    </div>
  )
}
