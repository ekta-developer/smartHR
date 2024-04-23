import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import EmpDashboard from "../pages/dashboard/EmpDashboard";
import UserData from "../pages/master/UserData";
import Department from "../pages/master/Department";
import Designation from "../pages/master/Designation";
import Layout from "../layout/Layout";
import HOD from "../pages/master/HOD";
import Tower from "../pages/master/Tower";
import Room from "../pages/master/Room";
import ChargeType from "../pages/master/ChargeType";
import HouseAllote from "../pages/master/HouseAllote";
import DepositBill from "../pages/master/DepositBill";
import Transaction from "../pages/master/Transaction";
import Support from "../pages/Support";
import Reading from "../pages/report/Reading";
import UserInfo from "../pages/report/UserInfo";
import Generatebills from "../pages/master/Generatebills";
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
          <Route path="master/head-of-department" element={<HOD/>}></Route>
          <Route path="master/tower" element={<Tower/>}></Route>
          <Route path="master/room" element={<Room/>}></Route>
          <Route path="master/charge-type" element={<ChargeType/>}></Route>
          <Route path="master/house-allotment" element={<HouseAllote/>}></Route>
          <Route path="master/generate-bill" element={<Generatebills/>}></Route>
          <Route path="master/deposit-bill" element={<DepositBill/>}></Route>
          <Route path="master/transactions"element={<Transaction/>}></Route>
          <Route path="/support" element={<Support/>}></Route>
          <Route path="report/reading" element={<Reading/>}></Route>
          <Route path="report/user-information" element={<UserInfo/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
