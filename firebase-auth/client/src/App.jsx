import React from "react"
import SignUpForm from "./SignupForm"
import Login from './Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUpForm/>} />
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
