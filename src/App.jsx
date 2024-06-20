import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hospital from './pages/hospitals/Hospital';
import Login from './pages/login/Login';

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/hospitals" element={<Hospital />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
