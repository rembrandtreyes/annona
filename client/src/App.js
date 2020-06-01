import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import DonatePage from "./pages/DonatePage"
import DistributorPage from "./pages/DistributorPage"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Navbar />

        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/about" render={() => <AboutPage />} />
        <Route path="/donate" render={() => <DonatePage />} />
        <Route path="/distributor" render={() => <DistributorPage />} />
        <Route path="/contact" render={() => <ContactPage />} />

        <Footer />
      </div>
    </Router>
  )
}

export default App
