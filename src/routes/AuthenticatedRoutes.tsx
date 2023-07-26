import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
//import AuthContext from "../contexts/AuthContext";

const AuthenticatedRoutes = () => {
    // auth context
    // const { accessToken } = useContext("AuthContext");
    const accessToken = "123456"

    if (accessToken) {
        return <Outlet />;
    }

    return (
        <>
            <Navigate to="/" />
        </>
    );
};

export default AuthenticatedRoutes;
