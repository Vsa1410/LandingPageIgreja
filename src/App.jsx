import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Footer from './components/Footer'
import Live from './screens/Home/Live'

function App() {
 

  return (
    <div className='app'>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/live' element={<Live/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
