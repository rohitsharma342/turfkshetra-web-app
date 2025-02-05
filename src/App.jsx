
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Sidebar from './layouts/Sidebar/sidebar';
import { Home } from './pages/Home';
import { MainLayout } from './layouts/MainLayout';
import { NavLayout } from './layouts/MainLayout/NavLayout';
import ContactForm from './pages/ContactUs/contact';
import { Navbar } from './layouts/Navbar/navbar';
import { Footer } from './components/Footer/footer';
import AboutUs from './pages/About/about';

function App() {
 

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>

          <Route
          path={"/"}
          element={<Home/>}>
          </Route>
          <Route
          path={"conatct-us"}
          element={<ContactForm/>}>
          </Route>
          <Route
          path={"about-us"}
          element={<AboutUs/>}>
          </Route>
        </Routes>
       
      </Router>
    </>
  )
}

export default App
