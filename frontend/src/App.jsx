import Home from '../src/Pages/Home';
import About from '../src/Pages/About';
import Skills from '../src/Pages/Skills';
import Project from '../src/Pages/Project';
import Contact from '../src/Pages/Contact';
import Header from './Components/Header'
import {  Router, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {
  

  return (
    <>
      
      <div className="header-container">
      <Header />
    </div>
   
    </>
  )
}

export default App
