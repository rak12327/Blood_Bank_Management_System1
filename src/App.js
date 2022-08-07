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
import RequestForm from "./Component/pages/Request/RequestForm";
import DonateForm from "./Component/pages/Donor/DonateForm";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact-us" />
        <Route element={<Donor />} path="/donor" />
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/sign-in" />
        <Route element={<Request />} path="/request"></Route>
        <Route element={<RequestForm />} path="/requestForm" />
        <Route element={<DonateForm />} path="/donate-form" />
      </Routes>
    </div>
  );
};

export default App;
