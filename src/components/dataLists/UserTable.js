import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Badge } from "reactstrap";
import Icon from "../icon/Icon";

const UserTable = ({ ...props }) => {
  const handleEdit = () => {};
  const handleDelete = () => {};
  const getStatusColor = (status) => {
    if (status === "Active") {
      return "success"; // Green color for paid
    } else if (status === "Inactive") {
      return "danger"; // Red color for unpaid
    } else {
      return "warning"; // Orange color for partial paid
    }
  };

  const getStatusText = (status) => {
    if (status === "Active") {
      return "Active";
    } else if (status === "Inactive") {
      return "Inactive";
    } else {
      return "---";
    }
  };
  const [columns, setColumns] = useState([
    {
      name: "User Type",
      selector: (row) => row.user_type,
      sortable: true,
    },
    {
      name: "User Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "E-mail",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
      sortable: true,
    },
    {
      name: "Adhaar",
      selector: (row) => row.aadhar_card,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Designation ",
      selector: (row) => row.designation_name,
      sortable: true,
    },
    {
      name: "Departmrnt",
      selector: (row) => row.department_name,
      sortable: true,
    },
    {
      name: "HOD",
      selector: (row) => row.hod_name,
      sortable: true,
    },
    {
      name: "Password",
      selector: (row) => row.password,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <Badge color={`outline-${getStatusColor(row.status)}`}>
          {getStatusText(row.status)}
        </Badge>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <button
            outline
            color={`warning`}
            size={`xs`}
            className={`me-1`}
            onClick={() => handleEdit(row)}
          >
            {" "}
            <Icon name="edit"></Icon>
          </button>
          <button
            outline
            color={`danger`}
            size={`xs`}
            onClick={() => handleDelete(row)}
          >
            {" "}
            <Icon name="trash"></Icon>
          </button>
        </div>
      ),
    },
  ]);

  const [data, setData] = useState([
    {
      user_type: "static data",
      name: "Ekta",
      email: "abc@gmail.com",
      mobile: "0989098909",
      aadhar_card: "989898989898",
      address: "Earth",
      designation_name: "CEO",
      department_name: "Cosmetics",
      hod_name: "Xyz",
      password: "00000",
      status: "Active",
    },
  ]);

  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default UserTable;
