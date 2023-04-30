import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Footer from './components/Footer'
import Live from './screens/Live'
import { initializeApp } from "firebase/app";

function App() {

  // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmazhCEPzKMoAWtIvbitqLr03u8lSVswE",
  authDomain: "site-igreja-3bd18.firebaseapp.com",
  projectId: "site-igreja-3bd18",
  storageBucket: "site-igreja-3bd18.appspot.com",
  messagingSenderId: "120260479257",
  appId: "1:120260479257:web:02141504b8ffd07c8d5d88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 

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
