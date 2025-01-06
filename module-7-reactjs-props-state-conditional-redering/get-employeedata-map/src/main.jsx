import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
// import GetEmployee from './components/GetEmployee'
// import DynamicEmployeeFilter from './components/DynamicList'
import Products from './components/Products'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <GetEmployee /> */}
    {/* <DynamicEmployeeFilter /> */}
    <Products />
  </StrictMode>,
)
