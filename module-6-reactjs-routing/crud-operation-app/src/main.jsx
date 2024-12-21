import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'
import './style.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import ForgetPassword from './components/pages/ForgetPassword'
import Dashboard from './components/pages/Dashboard'
import PageNotFound from './components/pages/PageNotFound'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element=<Layout /> />
        <Route path='/register' element=<Register /> />
        <Route path='/login' element=<Login /> />
        <Route path='/forgetpassword' element=<ForgetPassword /> />
        <Route path='/dashboard' element=<Dashboard /> />
        <Route path='*' element=<PageNotFound /> />
      </Routes>
    </Router>
  </StrictMode>,
)
