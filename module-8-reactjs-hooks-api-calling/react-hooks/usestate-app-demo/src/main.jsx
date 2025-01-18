import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Department from './components/CounterApp'
// import CountApp from './components/CountApp'
import EmployeeApp from './components/EmployeeApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Department /> */}
    {/* <CountApp /> */}
    <EmployeeApp />
  </StrictMode>,
)
