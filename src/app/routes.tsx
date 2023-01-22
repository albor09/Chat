import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "../pages/Auth";
import LogIn from "../pages/LogIn";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn></LogIn>}></Route>
      <Route path="/auth" element={<Auth></Auth>}></Route>
    </Routes>
  );
};
