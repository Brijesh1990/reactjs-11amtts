import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import CountData from './CountData';
export default function Sidebar() {
   // destructured of data
  return (
    <div className='bg-dark text-white p-3'>
    <ul className='sidebar'>
    <li><Link to=""><img src='https://static.vecteezy.com/system/resources/thumbnails/002/002/332/small/ablack-man-avatar-character-isolated-icon-free-vector.jpg' className='img-fluid w-25 rounded-circle' /></Link>  <b><span className='bi bi-dot text-success ms-1 fs-3'></span>Online</b></li>

    <li><div className='input-group mt-3'>
        <input type="text" placeholder='search' className='form-control' />
    </div>
    </li>
    <li><Link to="/admin-login/dashboard">Dashboard</Link></li>
    <li><Link to="">Manage Employee <span className="top-0 start-100 ms-4 translate-middle badge rounded-pill bg-danger">20<span className="visually-hidden">unread messages</span>
  </span></Link></li>
    <li><Link to="">Systems Managements <span className="top-0 start-100 ms-4 translate-middle badge rounded-pill bg-danger">20<span className="visually-hidden">unread messages</span>
    </span></Link></li>
    <li><Link to="">User Management <span className="top-0 start-100 ms-4 translate-middle badge rounded-pill bg-danger">20<span className="visually-hidden">unread messages</span>
    </span></Link></li>
    <li><Link to="">Manage Feedback <span className="top-0 start-100 ms-4 translate-middle badge rounded-pill bg-danger">5<span className="visually-hidden">unread messages</span>
    </span></Link></li>
    <li><Link to="/admin-login/manage-contact">Manage Contact  <span className="top-0 start-100 ms-4 translate-middle badge rounded-pill bg-danger"><CountData /><span className="visually-hidden">unread messages</span>
    </span></Link></li>
    <li><Link to="" className='btn btn-sm btn-danger text-white'>Logout</Link></li>
    </ul>
    </div>
  )
}
