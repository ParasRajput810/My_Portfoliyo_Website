// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Homepage/Homepage";
import Skills from "../Pages/Skills/Skills"; ``
import Experience from "../Pages/Experience/Experience";
import ProjectsPage from "../Pages/Projects/Projects";
import CertificationsPage from "../Pages/certification/certification";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience></Experience>} />
            <Route path="/projects" element={<ProjectsPage></ProjectsPage>} />
            <Route path="/certification" element={<CertificationsPage></CertificationsPage>} />
        </Routes>
    );
};

export default AppRoutes;