import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import PropsFunctionApp from './components/PropsFunctionApp'
// import PropsApp from './components/MyApp'
// import GarageApp from './components/OurData'
import Employee from './components/Employee'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PropsFunctionApp name="brijesh" /> */}
    {/* <PropsApp /> */}
    {/* <GarageApp /> */}
    <Employee />
  </StrictMode>,
)
