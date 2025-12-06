// src/App.jsx
import React from 'react';
import LandingPage from './components/LandingPage';
import ProjectsPage from './components/AllProject';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetailPage from './components/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';
import ContactSection from './components/ContactUs';
import AboutPage from './components/AboutUsPage';
import ServicePage from './components/ServiceDetail';
const App = () => {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/all-project' element={<ProjectsPage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/contact-us' element={<ContactSection />} />
        <Route path='/about-us' element={<AboutPage />} />
      </Routes>
    </Router>
  )
};

export default App;
