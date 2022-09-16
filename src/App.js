import React, { useEffect } from "react";
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
import { Route, Routes, useNavigate } from "react-router-dom";
import ForgotPassword from "./Component/pages/ForgotPassword";
import ResetPassword from "./Component/pages/Reset";
import { useDispatch, useSelector } from "react-redux";
import Toster from "./Component/Export/Alert";
import User from "./Component/pages/Profile/User";
import RequestOrder from "./Component/pages/Profile/RequestOrder";
import {
  CheckRoute,
  ProtectedRoute,
  ProtectResetPassword,
} from "./Component/Export/ProtectedRoute";
import { UserDataThunk } from "./Component/Redux/UserDataSlice";
import Loading from "./Component/Export/Loading";

const App = () => {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // If Error Something is server Then, I have tih show something on screen;
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    if (token) {
      dispatch(UserDataThunk({ token, dispatch, navigate }));
    }
  }, [dispatch, token, navigate]);

  const user = useSelector((state) => state.user);

  if (user.loading) {
    return (
      <div className="h-screen w-screen bg-black flex items-center justify-center flex-col">
        <Loading width={"10rem"} height={"10rem"} />
        <h1 className="text-white text-lg mt-[1rem]">Loading...</h1>
      </div>
    );
  }

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
            // <ProtectedRoute>
            <Home />
            // </ProtectedRoute>
          }
          path="/"
        />
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

        <Route
          element={
            <CheckRoute>
              <Login />
            </CheckRoute>
          }
          path="/sign-in"
        />

        <Route
          element={
            <CheckRoute>
              <Register />
            </CheckRoute>
          }
          path="/sign-up"
        />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route
          path="/reset-password/:token"
          element={
            <ProtectResetPassword>
              <ResetPassword />
            </ProtectResetPassword>
          }
        />
        <Route element={<Contact />} path="/contact-us" />
        <Route element={<Donor />} path="/donor" />

        <Route element={<h1>Hello</h1>} path="/*" />
      </Routes>
    </div>
  );
};

export default App;
