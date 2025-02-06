import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// crud app module
import Layout from './Layout'
import AddItems from './components/AddItems'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/add-items' element={<AddItems />} />
    </Routes>
    </Router>
  </StrictMode>,
)
