import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../contextapi/Context";
const RequireAuth = () => {
  const { auth } = useContext(AppContext);
  const location = useLocation();
  return auth?.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
