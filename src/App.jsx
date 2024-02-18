import React from 'react'
import Header from './components/Header'
import './App.css'
import Greet from './pages/Greet'
import Button from './components/Button'
import About from './pages/About'
import Experience from './components/Experience'
const App = () => {
  return (
    <div>
      <Header />
      <Greet />
      <About />
      <Experience />
    </div>
  )
}

export default App