import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from './Layout'
import AddTask from './components/pages/AddTask'
import ManageTask from './components/pages/ManageTask'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
         <Route  path="/" element={<Layout />} />
         <Route  path="/add-task" element={<AddTask />} />
         <Route  path="/manage-task" element={<ManageTask />} />
      </Routes>
    </Router>
  </StrictMode>,
)
