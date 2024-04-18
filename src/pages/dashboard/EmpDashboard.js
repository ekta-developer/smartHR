import { React, useState, useEffect } from "react";
import Head from "../../layout/head/Head";
import AdminCard from "../../components/card/AdminCard";
import CardTop from "../../components/card/CardTop";
import LeaveCard from "../../components/card/LeaveCard";
import CardSetting from "../../components/card/CardSetting";
import Invoice_payments from "../../components/dataLists/Invoice_payments";
import Clients_recents from "../../components/dataLists/Clients_recents";
import ProjectCard from "../../components/card/ProjectCard";
import Month_PolicyCard from "../../components/card/Month_PolicyCard";
import axios from "axios";
import Tower_User from "../../components/dataLists/Tower_User";
import Layout from "../../layout/Layout";
import Header from "../../components/header/Header";

const EmpDashboard = () => {
  const [data, setData] = useState([]);
  const [towerData, setTowerData] = useState([]);
  const [userData, setUserData] = useState([]);
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
          setData(response.data?.data?.cardData);
          setTowerData(response.data?.data?.towerData);
          setUserData(response.data?.data?.userData);
          console.log("API data=>", response.data?.data?.cardData);
          console.log("Tower Data", response.data?.data?.towerData);
          console.log("userdata", response.data?.data?.userData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head title="Employee Dashboard" />
      
      <Header mainHeading={"Welcome Emplyee!"} subHeading={"Dashboard"} />
      <AdminCard data={data} />
      <Tower_User data={towerData} userdata={userData} />
      <LeaveCard />
      <Invoice_payments />
      <Clients_recents />x
      <CardSetting />
    </>
  );
};

export default EmpDashboard;
