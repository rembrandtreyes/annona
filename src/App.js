import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Footer from './components/Footer.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const App = (props) => {
  const [title, setTitle] = useState('No Crop Left Behind');

  const links = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
  ];

  const [headerLinks, setHeaderLinks] = useState(links);

  const home = {
    title: 'No Crop Left Behind',
    subTitle: 'Ending world hunger one crop at a time',
    description: 'OPTIONAL/FILLER STUFF',
  };

  const about = {
    title: 'About Us',
  };

  const contact = {
    title: 'Contact Us',
  };

  return (
    <Router>
      <div className="main-container">
        <div className="navbar-container">
          <h1 className="navbar-title">No Crop Left Behind </h1>
          <div className="navbar-links-container">
            <Link className="navbar-links" to="/">
              Home
            </Link>
            <Link className="navbar-links" to="/about">
              About
            </Link>
            <Link className="navbar-links" to="/contact">
              Contact
            </Link>
          </div>
        </div>

        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/about" render={() => <AboutPage />} />
        <Route path="/contact" render={() => <ContactPage />} />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
