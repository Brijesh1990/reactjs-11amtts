import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import LoaderApp from './components/LoaderApp'
import FetchData from './components/FetchData'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LoaderApp /> */}
    <FetchData />
  </StrictMode>,
)
