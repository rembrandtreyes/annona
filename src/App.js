import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import HomePage from "./pages/HomePage.jsx"
import Footer from "./components/Footer.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import Navbar from "./components/Navbar"

import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Navbar />

        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/about" render={() => <AboutPage />} />
        <Route path="/contact" render={() => <ContactPage />} />

        <Footer />
      </div>
    </Router>
  )
}

export default App
