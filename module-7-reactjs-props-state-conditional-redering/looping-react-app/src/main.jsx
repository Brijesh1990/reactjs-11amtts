import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ForeachApp from './components/ForeachApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import GetEmployee from './components/GetEmployee'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <ForeachApp /> */}
  <GetEmployee />
  </StrictMode>,
)
