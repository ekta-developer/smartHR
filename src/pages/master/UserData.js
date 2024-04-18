import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import Head from "../../layout/head/Head";
import UserTable from "../../components/dataLists/UserTable";
import Header from "../../components/header/Header";

const UserData = () => {
  //   const [data,setData]=useState([]);

  //   useEffect(()=>{
  //     allUsers();
  //   },[])

  // const  allUsers=()=>{
  //   userDatatableAPI()
  //   .then((res)=>{
  //     console.log("API data=",res?.data);
  //     if(res?.data?.status === "Success")
  //     setData(res?.data?.data);
  //     else{
  //       console.log("err",res?.data?.message);
  //       alert("Connection Error");
  //     }
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   });
  // }
  return (
    <>
      <Head title={"User Dashboard"} />
      <Layout />
      <div class="page-wrapper">
        <div>
          <div className="content container-fluid pb-0">
            <Header mainHeading={"Welcome User!"} subHeading={""} />
            <UserTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
