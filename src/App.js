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
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact-us" />
        <Route element={<Donor />} path="/donor" />
        <Route element={<Register />} path="/sign-up" />
        <Route element={<Login />} path="/sign-in" />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route element={<ResetPassword />} path="/reset-password" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Request />} path="/request/">
          <Route element={<RequestForm />} path="request-form" />
        </Route>
        <Route element={<RequestForm />} path="/request-form" />
        <Route element={<h1>Hello</h1>} path="/*" />
      </Routes>
    </div>
  );
};

export default App;
