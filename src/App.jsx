import React from "react"
import Header from "./components/header/Header"
import Products from "./components/products/Products"
import  Carousel from "./components/carousel/DemoCarousel"
import Services from "./components/services/Services"
import styles from './App.css'
// import ControlledCarousel from './components/carousel/ControlledCarousel'
// import BasicModal from "./Modal"


function App() {
  return (
    <div className="App">
      <div className="intro-box">
      <Header/>
      <Carousel/>
      </div>
      <Products/>
      <Services/>
    </div>
  )
}

export default App
