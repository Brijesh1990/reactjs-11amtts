import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import IfApp from './compnents/IfApp'
// import IfElseIfApp from './compnents/IfEleseIf'
import TernaryApp from './compnents/TernaryApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <IfApp /> */}
    {/* <IfElseIfApp /> */}
    <TernaryApp />
  </StrictMode>,
)
