import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

// ✅ Pages
import Home from "../pages/Home";
import Chatbot from "../pages/Chatbot";
import SOS from "../pages/SOS";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";   // (example auth page)
import Register from "../pages/Register"; // (example auth page)

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public/Main Layout Routes */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/chatbot"
        element={
          <MainLayout>
            <Chatbot />
          </MainLayout>
        }
      />
      <Route
        path="/sos"
        element={
          <MainLayout>
            <SOS />
          </MainLayout>
        }
      />

      {/* Auth Layout Routes */}
      <Route
        path="/login"
        element={
          <AuthLayout title="Login to NaariKavach">
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/register"
        element={
          <AuthLayout title="Create your NaariKavach account">
            <Register />
          </AuthLayout>
        }
      />

      {/* 404 Page */}
      <Route
        path="*"
        element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
