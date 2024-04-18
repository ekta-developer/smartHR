import React, { useState } from "react";
import Datatable from "../datatable/Datatable";
import { Badge, Button } from "reactstrap";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import PagesDatatable from "../datatable/PagesDatatable";

const UserTable = ({ ...props }) => {
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
  const [columns, setColumns] = useState([
    {
      name:<h4>User Type</h4>,
      selector: (row) => row.user_type,
      sortable: true,
      cell: (row) => <div style={{ width: "20rem" }}>{row.user_type}</div>,
    },
    {
      name:<h4>User Name</h4>,
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name:<h4>E-mail</h4>,
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name:<h4>Mobile</h4>,
      selector: (row) => row.mobile,
      sortable: true,
    },
    {
      name:<h4>Adhaar</h4>,
      selector: (row) => row.aadhar_card,
      sortable: true,
    },
    {
      name:<h4>Address</h4>,
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name:<h4>Designation </h4>,
      selector: (row) => row.designation_name,
      sortable: true,
    },
    {
      name:<h4>Departmrnt</h4>,
      selector: (row) => row.department_name,
      sortable: true,
    },
    {
      name:<h4>HOD</h4>,
      selector: (row) => row.hod_name,
      sortable: true,
    },
    {
      name:<h4>Password</h4>,
      selector: (row) => row.password,
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
  ]);

  return (
    <>
      <PagesDatatable 
      columns={columns}
      data={props.data}
      perPageOpt={[6,12,18]}
      pagination={6} />
    </>
  );
};

export default UserTable;
