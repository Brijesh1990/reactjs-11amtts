import React from 'react'
import NewTask from './pages/NewTask'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='bg-white p-3'>
      <Link to="" data-bs-toggle="modal" data-bs-target="#newtask" className='text-dark text-decoration-none add-task-anim'><h1 className='text-center'><span className='bi bi-plus-circle'></span> Create New Task</h1></Link>
      {/* mew task reused here */}
      <NewTask />
    </div>
  )
}
