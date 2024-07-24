import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link, Form } from 'react-router-dom'
import Navbar from './Navbar'
import Contact from './Contact'
import Home from './Home'
import FormForm from './Form/Form'
import CounterCount from './Counter/Count'

function App() {
  return (

    <div className='Home'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/count' element={<CounterCount />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/form' element={<FormForm />} />
          <Route />
        </Routes>

      </Router>

    </div>
  )
}

export default App
