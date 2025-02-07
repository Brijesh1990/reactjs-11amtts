import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import MemeApp from './MemeApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemeApp />
  </StrictMode>,
)
