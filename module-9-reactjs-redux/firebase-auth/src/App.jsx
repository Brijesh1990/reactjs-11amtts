import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/Home'
import About from './components/About'
import Signup from './components/Register'
import Login from './components/Login'
import NotFound from './components/NotFound'
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
export default function App() {
  return (

    <UserAuthContextProvider>
       <Provider store={store}>
         <Router>
          <Routes>
            <Route path='/' element=<ProtectedRoute> <Home /> </ProtectedRoute>  />
            <Route path='/about' element=<About />></Route>
            <Route path='/register' element=<Signup />></Route>
            <Route path='/login' element=<Login />></Route>
            <Route path='/not-found' element=<NotFound />></Route>
            
          </Routes>
         </Router>
       </Provider>
       </UserAuthContextProvider>
  )
}
