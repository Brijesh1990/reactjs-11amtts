import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
export default function CountryList() {
    // destructured the data 
    const[data,setData]=useState("");
    // fetch country from https://country.io/names.json
    useEffect(()=>{
        // axios.get(`https://xc-countries-api.fly.dev/api/countries/`).then((response)=>{
        //     setData(response.data);


        // gallery api

     axios.get(`https://jsonplaceholder.typicode.com/userss`).then((response)=>{
            setData(response.data);

        })
    })
  return (
    <div>
      <Container className='mt-5'>
        {/* <h2>Fetch all Country list via api</h2>
        <select name='country' className='form-control w-50 p-2'>
            <option value="">-select country</option>
            {data && data.map((item)=>{
                return(
                    <>
                    <option value={item.name}>{item.name}</option>
                    </>
                )
            })}
          
        </select> */}


        <h2>Fetch Galley photo</h2>
        <div className='row shadow p-5'>
            {data && data.map((item)=>{
                return(
                    <>
                   
                  
                        <div className='col-md-6 shadow p-5'>
                             <h3>Id : {item.id}</h3>
                             <h3>username : {item.name}</h3>
                            <h3>Name : {item.name}</h3>
                            <h5>Email :{item.email}</h5>
                        </div>
                  

                    </>
                )
            })}
          
            </div>

       
      </Container>
    </div>
  )
}
