import React, { useEffect, useState } from "react";
import Head from "../../layout/head/Head";
import Header from "../../components/header/Header";
import { userDatatableAPI } from "../../api/api";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { Button, Label } from "reactstrap";
import UserTable from "../../components/dataLists/UserTable";
import CreatableSelect from "react-select/creatable";
import { Form, FormProvider, useForm } from "react-hook-form";
const UserData = () => {
  const {register,watch,trigger,setValue}= useForm();
  const [data, setData] = useState([]);

  // State to toggle icons
  const [isPlus, setIsPlus] = useState(true);

  // Handle button click
  const handleClick = () => {
    setIsPlus(!isPlus);
  };

  useEffect(() => {
    allUsers();
  }, []);

  const allUsers = () => {
    userDatatableAPI()
      .then((res) => {
        console.log("API data=", res?.data);
        if (res?.data?.status === "Success") setData(res?.data?.data);
        else {
          console.log("err", res?.data?.message);
          alert("Connection Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handelMasterChange = (selectedOption) => {
    setValue("master", selectedOption);
    trigger("master");
  };
  return (
    <>
      <div>
        <Head title={"User Dashboard"} />
        <Header mainHeading={"User dashboard!"} subHeading={"Dashboard / User"} />
        <div
          className="page-header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="container-header">
            <h3 className="container-title mb-0">User</h3>
          </div>
          <Button color="primary" onClick={handleClick} size={""}>
            {isPlus ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </Button>
        </div>
      <form>
        <div className="form">
          <Label htmlFor="default-4" className="form-label">
            Master User:
          </Label>
          <div className="select">
          <CreatableSelect
                            className=""
                            id="master"
                            options={[
                              { value: "user", label: "User" },
                              { value: "admin", label: "Admin" },
                            ]}
                            {...register("master", { required: true })}
                            onChange={handelMasterChange}
                            value={watch(`master`)}
                          />
          </div>
        </div>
        </form>
        <UserTable data={data} />
      </div>
    </>
  );
};

export default UserData;
