import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import Hospital from './pages/hospitals/Hospital';
import Login from './pages/login/Login';

const App = () => {
  const form = useForm();

  return (
    <div>
      <FormProvider {...form}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/hospitals" element={<Hospital />} />
          </Routes>
        </Router>
      </FormProvider>
    </div>
  );
};

export default App;
