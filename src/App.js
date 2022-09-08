import React from "react";
import {
  Home,
  Contact,
  Donor,
  Request,
  Register,
  Login,
  RequestForm,
  Profile,
} from "./Component/Export";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./Component/pages/ForgotPassword";
import ResetPassword from "./Component/pages/Reset";
import { useSelector } from "react-redux";
import Toster from "./Component/Export/Alert";
import User from "./Component/pages/Profile/User";
import RequestOrder from "./Component/pages/Profile/RequestOrder";
import { CheckRoute, ProtectedRoute } from "./Component/Export/ProtectedRoute";

const App = () => {
  const alert = useSelector((state) => state.alert);
  return (
    <div>
      {alert.alertOpen && (
        <div className="w-[100%] relative z-50">
          <Toster />
        </div>
      )}
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          path="/"
        />
        <Route element={<Contact />} path="/contact-us" />
        <Route element={<Donor />} path="/donor" />
        <Route element={<Register />} path="/sign-up" />
        <Route
          element={
            <CheckRoute>
              <Login />
            </CheckRoute>
          }
          path="/sign-in"
        />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route element={<ResetPassword />} path="/reset-password" />
        <Route
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
          path="/"
        >
          <Route element={<User />} path="/profile" />
          <Route element={<RequestOrder />} path="/request-oder-list" />
        </Route>

        <Route element={<Request />} path="/request/">
          <Route
            element={
              <ProtectedRoute>
                <RequestForm />
              </ProtectedRoute>
            }
            path="request-form"
          />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <RequestForm />
            </ProtectedRoute>
          }
          path="/request-form"
        />
        <Route element={<h1>Hello</h1>} path="/*" />
      </Routes>
    </div>
  );
};

export default App;
