import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const userData = useSelector((state) => state.user);
  return userData.user ? (
    children
  ) : (
    <Navigate to="/sign-in" replace state={{ path: location?.pathname }} />
  );
};

export const CheckRoute = ({ children }) => {
  const { state } = useLocation();
  const userData = useSelector((state) => state.user);

  return userData.user ? (
    <Navigate to={state?.path || "/"} replace />
  ) : (
    children
  );
};

export const ProtectResetPassword = ({ children }) => {
  const params = useParams();

  return params.token.length > 10 ? children : <Navigate to={"/"} />;
};

export const CheckUserData = ({ children }) => {
  const data = useSelector((state) => state.user?.user);
  const { requestData } = useSelector((state) => state.requestModel);

  let userData = false;

  if (
    data?.phoneNumber &&
    data?.adhaarNumber &&
    data?.age &&
    data?.address &&
    data?.pinCode &&
    data?.gender
  ) {
    userData = true;
  }

  useEffect(() => {
    if (!userData) {
      toast("Your profile is not updated. Please Update your profile page.", {
        type: "warning",
        theme: "colored",
      });
    }
  }, []);

  return userData ? (
    !requestData?.componentName ? (
      <Navigate to={"/Request"} />
    ) : (
      children
    )
  ) : (
    <Navigate to={"/profile/user"} />
  );
};
