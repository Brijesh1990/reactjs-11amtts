import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import DeleteData from './components/DeleteData'
import EditData from './components/EditData'
import ContactApp from './components/ContactApp'
// admin components
import AdminLayout from './AdminLayout'
import Dashboard from './components/admin/Dashboard'
import ManageContact from './components/admin/ManageContact'
import DeleteContact from './components/admin/DeleteData'
import './admin.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path='/delete-data/:id' element={<DeleteData />} />
        <Route path='/edit-data/:id' element={<EditData />} />
        <Route path='/contact-us' element={<ContactApp />} />
        <Route path='/admin-login' element={<AdminLayout />} />
        <Route path='/admin-login/dashboard' element={<Dashboard />} />
        <Route path='/admin-login/manage-contact' element={<ManageContact />} />
        <Route path='/admin-login/delete-contact/:id' element={<DeleteContact />} />
      </Routes>
    </Router>
  </StrictMode>,
)
