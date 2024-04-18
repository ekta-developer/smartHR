import React, { useEffect, useState } from "react";
import Head from "../../layout/head/Head";
import Header from "../../components/header/Header";
import { designationAPI } from "../../api/api";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import PagesDatatable from "../../components/datatable/PagesDatatable";
import { Badge, Button } from "reactstrap";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const Designation = () => {
  const handleEdit = () => {};
  const handleDelete = () => {};
  const getStatusColor = (status) => {
    if (status === true) {
      return "success"; // Green color for paid
    } else if (status === false) {
      return "danger"; // Red color for unpaid
    } else {
      return "warning"; // Orange color for partial paid
    }
  };

  const getStatusText = (status) => {
    if (status === true) {
      return "Active";
    } else if (status === false) {
      return "Inactive";
    } else {
      return "---";
    }
  };
  const [data, setData] = useState([]);
 const [columns,setColumns]=useState([
  {
    name:<h4>Designation </h4>,
    selector: (row) => row.designation_name,
    sortable: true,
  },
  {
    name:<h4>Status</h4>,
    selector: (row) => row.status,
    cell: (row) => (
      <Badge color={`outline-${getStatusColor(row.status)}`}>
        {getStatusText(row.status)}
      </Badge>
    ),
    sortable: true,
  },
  {
    name:<h4>Action</h4>,
    cell: (row) => (
      <div >
        <Button
          outline
          color={`warning`}
          className={`me-1`}
          onClick={() => handleEdit(row)}
        >
          {" "}
          <FiEdit />
        </Button>
        <Button
          outline
          color={`danger`}
          onClick={() => handleEdit(row)}
        >
          {" "}
          <MdDeleteOutline />
        </Button>
      </div>
    ),
  },
 ])
  // State to toggle icons
  const [isPlus, setIsPlus] = useState(true);

  // Handle button click
  const handleClick = () => {
    setIsPlus(!isPlus);
  };


  useEffect(() => {
    alldesignation();
  }, []);

  const alldesignation = () => {
    designationAPI()
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


  return (
    <>
      <div>
        <Head title={"User Dashboard"} />
        <Header mainHeading={"Designation dashboard!"} subHeading={"Dashboard / Designation"} />
        <div
          className="page-header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="container-header">
            <h3 className="container-title mb-0">Designation</h3>
          </div>
          <Button color="primary" onClick={handleClick} size={""}>
            {isPlus ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </Button>
        </div>
        <PagesDatatable 
        columns={columns}
        data={data}/>
      </div>
    </>
  );
};

export default Designation;
