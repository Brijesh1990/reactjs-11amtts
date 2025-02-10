import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CountryList from './CountryList'
import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountryList />
  </StrictMode>,
)
