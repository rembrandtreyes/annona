import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import MissionPage from "./pages/MissionPage"
import ResearchPage from "./pages/ResearchPage"
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
        <Route path="/mission" render={() => <MissionPage />} />
        <Route path="/research" render={() => <ResearchPage />} />
        <Route path="/donors" render={() => <DonatePage />} />
        <Route path="/distributors" render={() => <DistributorPage />} />

        <Footer />
      </div>
    </Router>
  )
}

export default App
