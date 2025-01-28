import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import DeleteData from './components/DeleteData'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path='/delete-data/:id' element={<DeleteData />} />
      </Routes>
    </Router>
  </StrictMode>,
)
