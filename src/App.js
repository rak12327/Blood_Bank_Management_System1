import React from "react";
import {
  Home,
  Contact,
  Donor,
  Request,
  Register,
  Login,
} from "./Component/Export";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact-us" />
        <Route element={<Donor />} path="/donor" />
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<Request />} path="/request" />
      </Routes>
    </div>
  );
};

export default App;
