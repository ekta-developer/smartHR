import {React, useState} from 'react';
import Head from '../../layout/head/Head';
import Header from '../../components/header/Header';
import { RxPlus } from 'react-icons/rx';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { Badge, Button, Form, Label, Modal, Row } from "reactstrap";
import PagesDatatable from '../../components/datatable/PagesDatatable';

const Tower = () => {
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    reset,
    formState: { errors },
  } = useForm();
  
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const toggelModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleModal = () => {
    toggelModal();
    setIsOpen(false);
    setModalOpen(true);
    console.log("modal");
  };
  const handleClose = () => {
    setModalOpen(false);
  };

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

  const [data,setData]= useState([]);
  const [columns, setColumns] = useState([
    {
      name: "Tower",
      selector: (row) => row?.tower_name,
      sortable: true,
    },
    {
      name: "Tower Location",
      selector: (row) => row?.tower_location,
      sortable: true,
    },
    {
      name: "No of Floor",
      selector: (row) => row?.no_of_floor,
      sortable: true,
    },
    {
      name: "KV",
      selector: (row) => row?.kv,
      sortable: true,
    },
    {
      name: <h4>Status</h4>,
      selector: (row) => row.status,
      cell: (row) => (
        <Badge color={`outline-${getStatusColor(row.status)}`}>
          {getStatusText(row.status)}
        </Badge>
      ),
      sortable: true,
    },
    {
      name: "Created By",
      selector: (row) => row?.createdBy,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => row?.createdAt,
      sortable: true,
    },
    {
      name: <h4>Action</h4>,
      cell: (row) => (
        <div>
          <Button
            outline
            color={`warning`}
            className={`me-1`}
            onClick={() => handleEdit(row)}
          >
            {" "}
            <FiEdit />
          </Button>
          <Button outline color={`danger`} onClick={() => handleEdit(row)}>
            {" "}
            <MdDeleteOutline />
          </Button>
        </div>
      ),
    },
  ]);

  return (
    <>
     <div>
        <Head title={"Tower"} />

        <div
          className="page-header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="container-header">
            <Header
              mainHeading={"Tower dashboard!"}
              subHeading={"Dashboard / Tower"}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary rounded-pill"
            style={{ height: "40px" }}
            onClick={() => handleModal()}
          >
            <b>
              <RxPlus />
              &nbsp;Add Tower
            </b>
          </button>
        </div>
        {/* <PagesDatatable columns={columns} data={data} /> */}
      </div>
    </>
  )
}

export default Tower;