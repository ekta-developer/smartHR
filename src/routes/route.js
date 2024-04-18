import React from "react";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Login from "../pages/Login";
import EmpDashboard from "../pages/dashboard/EmpDashboard";
import UserData from "../pages/master/UserData";
import Department from "../pages/master/Department";
import Designation from "../pages/master/Designation";
// import '../css/bootstrap.min.css'
// import '../css/owl.carousel.min.css'
// import '../css/style.css'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />{" "}
      <Route path="/dashboard" element={<EmpDashboard />}></Route>
      <Route path="master">
      <Route path="user" element={<UserData/>}></Route>
      <Route path="department" element={<Department/>}></Route>
      <Route path="designation" element={<Designation/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
};
export default Router;
