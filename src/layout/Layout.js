
import React, {useState, useEffect } from "react";
import Nav from "../components/navbars/Nav";
import Sidebar from "../components/sidebar/Sidebar";
import axios from "axios";

const Layout = () => {
    const [sidebarData, setSidebarData]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const value = localStorage.getItem("userData");
            const input = JSON.parse(value);
            const ftoken = "Bearer " + input?.data?.token;
    
            const config = {
              method: "post",
              url: "http://pg.demoquaeretech.in/api/dashboard",
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
     <div class="main-wrapper">
        <div class="content container-fluid pb-0">
          <Nav/>
          <Sidebar data={sidebarData} />
          </div>
          </div>
    </>
  )
}

export default Layout;