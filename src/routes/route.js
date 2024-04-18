import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import EmpDashboard from "../pages/dashboard/EmpDashboard";
import UserData from "../pages/master/UserData";
import Department from "../pages/master/Department";
import Designation from "../pages/master/Designation";
import Layout from "../layout/Layout";
// import '../css/bootstrap.min.css'
// import '../css/owl.carousel.min.css'
// import '../css/style.css'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />{" "}
        <Route path="" element={<Layout />}>
          <Route path="/dashboard" element={<EmpDashboard />}></Route>
          <Route path="master/user" element={<UserData />}></Route>
          <Route path="master/department" element={<Department />}></Route>
          <Route path="master/designation" element={<Designation />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
