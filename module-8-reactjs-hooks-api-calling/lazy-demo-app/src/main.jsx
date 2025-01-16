import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoaderApp from './components/LoaderApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoaderApp />
  </StrictMode>,
)
