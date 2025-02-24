import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import LiveApp from './LiveApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LiveApp />
  </StrictMode>,
)
