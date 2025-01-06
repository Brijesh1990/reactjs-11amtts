import React from 'react'
import Data from './Data'
export default function DynamicEmployeeFilter() {
  return (
       <div className='w-10/12 mx-auto mt-14 bg-black text-white p-5'>
       <h1 className='text-3xl'>Get all employee Data whose age is less than 35<button type='button' className='w-52 p-2 text-white bg-red-400 float-end text-xl'>Export Data</button></h1>  

       <table className='w-full mt-9'>
       <tr>
        <th>#id</th>
        <th>Photo</th>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Action</th>
       </tr>    

       {/* display dynamic list */}
       {/* {Data && Data.map((item)=>{ */}

       {Data.filter((key,items)=>key.age <= 35).map((item)=>{ 
        return(
            <>
             <tr className='text-center'>
                <td>{item.id}</td>
                <td><img src={item.photo} className='w-36 rounded-full' /></td>
                
                <td>{item.name}</td>
                
                <td>{item.email}</td>
                
                <td>{item.age}</td>
                <td><a href='' className='text-red-500'>Delete</a> | <a href='' className='text-blue-600'>Edit</a></td>
             </tr>
            </>
        )
       })}
       </table>  

       </div>
  )
}
