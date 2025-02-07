import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import QrCodeApp from './QrCodeApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QrCodeApp />
  </StrictMode>,
)
