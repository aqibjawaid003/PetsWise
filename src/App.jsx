import React from "react"
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Services from "./components/Services/Services"
import Collections from "./components/Collections/collections"
import About from "./components/About/About"


function App() {

  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Services/>
     <Collections/>
     <About/>
    </div>
  )
}

export default App
