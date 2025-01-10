import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './componets/Home'
import About from './componets/About'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import './index.css'
// import Data from './Data.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Data /> */}
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </Router>
  </StrictMode>,
)
