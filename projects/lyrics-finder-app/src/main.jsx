import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import LyricsApp from './LyricsApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LyricsApp />
  </StrictMode>,
)
