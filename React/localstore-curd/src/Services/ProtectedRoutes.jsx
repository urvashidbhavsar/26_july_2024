import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const auth = localStorage.getItem("loginadmin");
    return auth ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes
