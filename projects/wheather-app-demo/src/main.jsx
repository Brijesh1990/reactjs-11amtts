import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import WeatherApp from './components/WeatherApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherApp />
  </StrictMode>,
)
