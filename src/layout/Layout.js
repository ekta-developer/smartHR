import React, { useState, useEffect } from "react";
import Nav from "../components/navbars/Nav";
import Sidebar from "../components/sidebar/Sidebar";
import axios from "axios";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [sidebarData, setSidebarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = localStorage.getItem("userData");
        const input = JSON.parse(value);
        const ftoken = "Bearer " + input?.data?.token;

        const config = {
          method: "post",
          url: "http://192.168.23.6:9000/api/dashboard",
          headers: {
            Authorization: ftoken,
          },
        };

        const response = await axios.request(config);
        if (response.data?.status === "Success") {
          setSidebarData(response.data?.data?.sidebar);
          console.log("sidebar data", response.data?.data?.sidebar);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <Sidebar data={sidebarData} />
      <div class="page-wrapper">
        <div class="content container-fluid pb-0">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
