import React,{useState,useRef,useEffect} from 'react'
import NavbarApp from './Navbar'
import Footer from './Footer'
import { Container } from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
export default function Content() {
    // destructring of data
    // display each task
    const[data,setData]=useState(0);
    // fetch all data from task 
    useEffect(()=>{
        axios.get(`http://localhost:8000/tasks`).then((response)=>{
           setData(response.data);    
        })
    })
    // add task in api ......http://localhost:8000/tasks
    const taskname=useRef("");
    const taskdetail=useRef("");
    const navigate=useNavigate();
    // const {id}=useParams();
    // create a eventFormHandeler function for add task when we onsubmit on form
    const addTaskFormHandeler=(e)=>{
        e.preventDefault();
        var insert={
            taskname:taskname.current.value,
            taskdetail:taskdetail.current.value
        }
        // applied axios for post data to stored in db.json in tasks api
        axios.post(`http://localhost:8000/tasks`,insert).then(()=>{
            // pass a insert data or task message via Swal
            Swal.fire({
                title: "Good job!",
                text: "Thanks Your tasks successfully added!",
                icon: "success"
              });

              navigate('/');
              e.target.reset();
        })
    }

  return (
    <div>
      <NavbarApp />
      {/* content */}
      <Container className='w-50  p-3 mt-5 bg-white top-0'>
      <h1 className='fs-4'>Add New Task Here</h1>
      <hr />
      <form onSubmit={addTaskFormHandeler}>
      <div className="input-group mb-3">
      <span className="input-group-text bi bi-pencil" id="basic-addon1"></span>
      <input type="text" ref={taskname} className="form-control" placeholder="New Task" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div className="input-group mb-3">
      <span className="input-group-text bi bi-pencil" id="basic-addon1"></span>
      <textarea ref={taskdetail} className="form-control" placeholder="Details" aria-label="Details" aria-describedby="basic-addon1" />
      </div>

      <div className="input-group mb-3">
    
      <button type="submit" className="btn btn btn-md btn-warning text-dark">CREATE <span className='bi bi-caret-right-fill'></span></button>
      </div>
      </form>

      {/* task list display */}
      <h1 className='fs-3'>Totals Task count <span className='fs-5 badge badge-sm text-white bg-danger rounded-circle ms-4'>{data.length}</span></h1>
      <hr />
      <table className='table table-striped table-responsive table-bordered' style={{fontSize:"12px !important",fontWeight:"100"}}>
       {data && data.map((row)=>{
        return(
            <>
            <tr>
            <td><b className='ms-5'>{row.taskname}</b> <b className='ms-5'>{row.taskdetail}</b></td>

            <td><button type='button' onClick={()=>{navigate(`/delete-data/${row.id}`)}}><span className='bi bi-trash btn btn-sm rounded-circle p-2 btn-danger text-white border border-0'></span></button> | <button type='button' onClick={()=>{navigate(`/edit-data/${row.id}`)}}><span className='bi bi-pencil btn btn-sm rounded-circle p-2 btn-primary text-white border border-0'></span></button> </td>
           </tr>
            </>
        ) 
       })}
     
      </table>
      </Container>
      <Footer />
    </div>
  )
}
