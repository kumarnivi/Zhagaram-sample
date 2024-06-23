import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './components/Home/home'
import Login from './components/Authentications/login'
import Register from './components/Authentications/Register'

function App() {
  const [] = useState(0)
  
  return (
    <BrowserRouter>
  <Routes>
  <Route path='/'  Component={Home} />
    <Route path='/login'  Component={Login} />
    <Route path='/register'  Component={Register} />
  </Routes>
    </BrowserRouter>
  )
}

export default App;