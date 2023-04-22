import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Services from "./components/Services/Services"
import Collections from "./components/Collections/collections"


function App() {

  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Services/>
     <Collections/>
    </div>
  )
}

export default App
