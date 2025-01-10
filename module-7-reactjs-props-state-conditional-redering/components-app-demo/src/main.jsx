import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
// function components reused here
// import PetHouse from './components/FunctionAppComponents'
//import App from './components/ClassAppComponents'
// import PetHouse from './components/ClassAppComponents'
import App from './components/NameApp'
createRoot(document.getElementById('root')).render(
<StrictMode>
{/* <PetHouse /> */}
{/* <App /> */}
<App />
</StrictMode>,
)
