import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import School from './school/School';
import Dashboard from './school/Dashbard';

function App() {
  return (
    <>
    
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<School />} ></Route>
            <Route exact path="/collections" element={<School />} ></Route>
            <Route exact path="/dashboard" element={<Dashboard />} ></Route>
            
          </Routes>
        </BrowserRouter>
    
    </>
  );
}

export default App;
