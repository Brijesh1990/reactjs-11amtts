import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Paragraph from './components/Paragraph'
import Animations from './components/Animations'
import './index.css'
import './style.css'
import Layout from './Layout'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Paragraph /> */}
    {/* <Animations /> */}
    <Layout />
  </StrictMode>,
)
