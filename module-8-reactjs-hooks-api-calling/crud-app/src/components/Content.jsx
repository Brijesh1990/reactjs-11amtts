import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function Content() {
    // destructured of data
    // display the data
    const[data,setData]=useState("");
    // display via useEffect
    useEffect(()=>{
        // call api 
        axios.get(`http://localhost:4000/add-items`).then((response)=>{
            setData(response.data);
        })

    })


  return (
    <div className='mt-5 w-75 mx-auto'>
    <table className='table table-responsive'>
        <tr>
            <th>Item</th>
            <th>Photo</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Descriptions</th>
            <th>Action</th>
        </tr>
        {data && data.map((row)=>{
            return(
                <>
                <tr>
            <td>{row.name}</td>
            <td><img src={row.photo} alt='photo' style={{width:"85px",height:"85px"}} /></td>
            <td>{row.price}</td>
            <td>{row.qty}</td>
            <td>{row.desc}</td>
            <td><button type='button' className='btn btn-sm bg-primary btn-primary text-white'><span className='bi bi-pencil'></span></button> | <button type='button' className='btn btn-sm btn-danger text-white bg-danger'><span className='bi bi-trash'></span></button> </td>
        </tr>
                </>
            )
        })}

        <tr>
            <td colSpan="6"><h3 className='bg-dark text-white p-3 text-end'>Subtotals of Rs. 3500</h3></td>
        </tr>
    </table> 
      
    </div>
  )
}
