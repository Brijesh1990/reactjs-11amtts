import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import ContainerApp from './container/ContainerApp'
import CardApp from './card/CardApp';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ContainerApp /> */}
    <CardApp />
  </StrictMode>,
)
