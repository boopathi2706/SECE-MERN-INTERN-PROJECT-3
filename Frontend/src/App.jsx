import React from 'react'
import './App.css'
import Login from './Templates/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Templates/Signup';
import Main from './Templates/Main';
import Donate from './Templates/Donate';

function App() {
  return(
    <> 
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
              <Route path='/main' element={<Main/>}></Route>
              <Route path='/donate' element={<Donate />}></Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
