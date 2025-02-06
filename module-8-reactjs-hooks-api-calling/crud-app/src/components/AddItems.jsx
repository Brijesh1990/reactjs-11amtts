import React,{useState,useRef} from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export default function AddItems() {
    // destructured of data
    const[data,setData]=useState("");
    // stored each input data in variables
    const name=useRef("");
    const photo=useRef("");
    const price=useRef("");
    const qty=useRef("");
    const desc=useRef("");
    const navigate=useNavigate();
    // create a eventHandeler function 
    const addItemsData=(e)=>{
      e.preventDefault();
      var insert={
        name:name.current.value,
        photo:photo.current.value,
        price:price.current.value,
        qty:qty.current.value,
        desc:desc.current.value
      }
    //call api via axios
    axios.post(`http://localhost:4000/add-items`,insert).then(()=>{
        // pass data stored messages via sweetalert2
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });

          navigate('/');
          e.target.reset();
    })
    }
  return (
    <>
    <Navbar />
    <div className='mt-5 w-75 mx-auto'>
      <h2>Add Items Here</h2>
      <hr />
      <form onSubmit={addItemsData}>
        <div className='mt-2'>
            <input type='text' ref={name} placeholder='Items Name *' className='form-control' />
        </div>
        
        <div className='mt-2'>
            <input type='text' ref={photo} placeholder='Items Photo URL *' className='form-control' />
        </div>
        
        <div className='mt-2'>
            <input type='text' ref={price} placeholder='Items Price *' className='form-control' />
        </div>
        
        <div className='mt-2'>
            <input type='number' ref={qty} placeholder='Items Qty *' className='form-control' />
        </div>
        
        <div className='mt-2'>
            <textarea  ref={desc} placeholder='Items Descriptions *' className='form-control'></textarea>
        </div>
        
        <div className='mt-2'>
            <input type='submit' value="Add Items"  className='btn btn-sm btn-primary' />
        </div>

      </form>
    </div>
    </>
  )
}
