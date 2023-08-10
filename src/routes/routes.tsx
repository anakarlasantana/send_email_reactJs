import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import CreateForm from '../components/Create';
import ForgotPasswordForm from '../components/ForgotPassword';
import Home from '../pages/Home';
import User from '../pages/User';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/cadastro" element={<CreateForm />} />
      <Route path="/esqueci-senha" element={<ForgotPasswordForm />} />    
      {localStorage.getItem("app_id") ? (
        <Route path="/inicio" element={<Home />} />
      ) : (
        <Route path="/login" element={<User />} />
      )}
      </Routes>
  );
}

export default AppRoutes;
