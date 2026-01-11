import About from "./component/About"
import Contact from "./component/Contact"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Home from "./component/Home"
import Product from "./Product"
import logo from "/Flipkart-Logo.wine.png"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
    <Router>
    <Header logo={logo}/>
    <Product/>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </main>
    <Footer/>
    </Router>
    </>
  )
}

export default App