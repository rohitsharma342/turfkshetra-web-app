
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Sidebar from './layouts/Sidebar/sidebar';
import { Home } from './pages/Home';
import { MainLayout } from './layouts/MainLayout';
import { NavLayout } from './layouts/MainLayout/NavLayout';

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route
          path={"/"}
          element={<Home/>}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
