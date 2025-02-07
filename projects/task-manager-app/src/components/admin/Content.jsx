import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Container,Row } from 'react-bootstrap'
import { Chart } from "react-google-charts";
import CountData from './CountData';
export default function Content() {
  // destructured of data
 

    const data = [
        ["Task", "Hours per Day"],
        ["Work", 9],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ];
    
      const options = {
        title: "My Daily Activities",
      };


  
    return (
    <Container className='p-3'>
     <Row>
     <h3>Task Manage App Dashboard</h3>   
     <hr />
     <div className='col-md-4 bg-secondary p-4'>
        <h3 className='text-white text-center'>Total Employee</h3>
        <h5 className='text-center'><button type="button" className="btn bg-white btn-sm w-50">
        Total <span className="badge bg-danger">4</span>
        </button></h5>
     </div>

     <div className='col-md-4 bg-warning p-3'>
        <h3 className='text-white text-center'>Total Users</h3>
        <h5 className='text-center'><button type="button" className="btn bg-white btn-sm w-50">
        Total <span className="badge bg-danger">4</span>
        </button></h5>
     </div>

     <div className='col-md-4 bg-primary p-4'>
        <h3 className='text-white text-center'>Total Contact</h3>
        <h5 className='text-center'><Link to="/admin-login/manage-contact"><button type="button" className="btn bg-white btn-sm w-50">
        Total <span className="badge bg-danger"><CountData /></span>
        </button></Link></h5>
     </div>

     <h2 className='mt-2'>Manage Users Charts</h2>   
     <hr className='w-25' />

     <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
     </Row>   
    </Container>
  )
}
