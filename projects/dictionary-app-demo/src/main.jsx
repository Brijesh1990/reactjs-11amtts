import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import DictionaryApp from './components/DictionaryApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DictionaryApp />
  </StrictMode>,
)
