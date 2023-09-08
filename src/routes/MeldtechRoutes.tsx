
import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import ApplicationForm from "../pages/ApplicationForm";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import RegistrationForm from "../pages/Registration";


const ctrlSchoolRoute = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/apply" element={<ApplicationForm />} />

                {/* Routes only accessible by signed-in users */}
                <Route element={<AuthenticatedRoutes />}>

                </Route>

                {/* Route for page not found */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default ctrlSchoolRoute;
