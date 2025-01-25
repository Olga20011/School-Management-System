import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import StudentAdmission from "../Pages/Student/StudentAdmission";
import PerfomanceAnaysis from "../Pages/Student/PerfomanceAnalysis";
import StudentProfile from "../Pages/Student/StudentProfilePage";
import ClassList from "../Pages/Student/ClassList"; 
import StudentAdmissionForm from "../components/Student/StudentAdmissionForm";
import LoginPage from "../Pages/Welcome/LoginPage";
import RegisterPage from "../Pages/Welcome/RegisterPage";
import SettingsPage from "../Pages/Settings/SettingsPage";
import Allteachers from "../Pages/Teachers/Allteachers";
import EnrollTeacher from "../Pages/Teachers/EnrollTeacher";
 develop

const SystemRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/school-admission" element={<StudentAdmission />} />
        <Route path="/performance-analysis" element={<PerfomanceAnaysis />} />
        <Route path="/school-profile" element={<StudentProfile />} />
        <Route path="/class-list" element={<ClassList />} />ft-student
        <Route path="/enroll-student" element={<StudentAdmissionForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/all-teachers" element={<Allteachers />} />
        <Route path="/enroll-teacher" element={<EnrollTeacher />} /> develop

        {/* <Route component={NotFound} /> */}
      </Routes>
    </Router>
  );
};

export default SystemRoutes;
