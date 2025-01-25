import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import AddData from './components/AddData'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/add-employee' element={<AddData />} />
    </Routes>
   </Router> 
  </StrictMode>,
)
