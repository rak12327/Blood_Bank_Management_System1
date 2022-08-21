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

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact-us" />
        <Route element={<Donor />} path="/donor" />
        <Route element={<Register />} path="/sign-up" />
        <Route element={<Login />} path="/sign-in" />
        <Route element={<Request />} path="/request" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<RequestForm />} path="/request-form" />
        <Route element={<h1>Hello</h1>} path="/*" />
      </Routes>
    </div>
  );
};

export default App;
