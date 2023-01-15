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
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./Component/pages/ForgotPassword";
import ResetPassword from "./Component/pages/Reset";
import { useDispatch, useSelector } from "react-redux";
import User from "./Component/pages/Profile/User";
import RequestOrder from "./Component/pages/Profile/RequestOrder";
import {
  CheckRoute,
  CheckUserData,
  ProtectedRoute,
  ProtectResetPassword,
} from "./Component/Export/ProtectedRoute";
import { UserDataThunk } from "./Component/Redux/Authentication/UserDataSlice";
import Loading from "./Component/Export/Icons/Loading";
import RequestList from "./Component/pages/Profile/RequestList/RequestList";
import NotComplete from "./Component/pages/Profile/RequestList/NotComplete";
import Complete from "./Component/pages/Profile/RequestList/Complete";
import { ToastContainer, cssTransition } from "react-toastify";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.auth);

  // const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(UserDataThunk({ token }));
    }
  }, [token]);

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
      <ToastContainer transition={bounce} className="z-50" />
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
            // <ProtectedRoute>
            <Profile />
            // </ProtectedRoute>
          }
          path="profile/"
        >
          <Route element={<User />} index path="user" />
          <Route element={<RequestOrder />} path="request-order-list">
            <Route element={<RequestList />} path="request-list"></Route>
            <Route element={<NotComplete />} path="not-complete"></Route>
            <Route element={<Complete />} path="complete"></Route>
          </Route>
        </Route>

        <Route element={<Request />} path="request" />
        <Route
          element={
            <ProtectedRoute>
              <CheckUserData>
                <RequestForm />
              </CheckUserData>
            </ProtectedRoute>
          }
          path="request-form"
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
        <Route
          path="/forgot-password"
          element={
            <CheckRoute>
              <ForgotPassword />
            </CheckRoute>
          }
        />
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
