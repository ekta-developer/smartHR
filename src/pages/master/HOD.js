import {React, useEffect, useState } from 'react'
import Head from '../../layout/head/Head';
import Header from '../../components/header/Header';
import { RxPlus } from 'react-icons/rx';
import PagesDatatable from '../../components/datatable/PagesDatatable';
import { useForm } from 'react-hook-form';
import { Badge, Button, Form, Label, Modal, Row } from "reactstrap";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { getHODListAPI } from '../../api/api';
import CreatableSelect from "react-select/creatable";

const style = { color: "#e85347", fontSize: "11px", fontStyle: "italic" };

const HOD = () => {

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
      name: <h4>Department </h4>,
      selector: (row) => row.department_name,
      sortable: true,
    },
    {
      name: <h4>Designation </h4>,
      selector: (row) => row.designation_name,
      sortable: true,
    },
    {
      name: <h4>HOD </h4>,
      selector: (row) => row.hod_name,
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

  useEffect(()=>{
    getHODList();
  },[]);

  const getHODList = () => {
    getHODListAPI()
      .then((res) => {
        if (res.data.status === "Success") {
          setData(res.data.data);
        } else {
          console.log("errr");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const onSubmit = (data) => {
    console.log(data);
    toggelModal(); // Close modal after form submit
  };

  const onError = (errors) => {
    console.log("Errors:", errors);
  };
  const handlestatusChange = (selectedOption) => {
    setValue("status", selectedOption);
    trigger("status");
  };
  return (
    <>
      <div>
        <Head title={"Head of Department"} />

        <div
          className="page-header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="container-header">
            <Header
              mainHeading={"H.O.D dashboard!"}
              subHeading={"Dashboard / Head Of Department"}
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
              &nbsp;Add Designation
            </b>
          </button>
        </div>
        <PagesDatatable columns={columns} data={data} />
      </div>
      <Modal isOpen={modalOpen} toggle={toggelModal}>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <div id="add_department" className="" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Department</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClose}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="modal-body">
                  <div className="input-block mb-3">
                    <Row>
                      <Label className="form-label" htmlFor="department_name" style={{fontWeight:"bold"}}>
                        Department Name <span className="text-danger">*</span>
                      </Label>
                      <CreatableSelect
                              className=""
                              id="department_name"
                              // options={departmentList}
                              {...register("department_name", { required: true })}
                              // onChange={handleDepartmentChange}
                              value={watch(`department_name`)}
                            />
                            {errors.department_name && <span style={style}>Department field is required</span>}
                    </Row>
                    <Row> 
                    <Label className="form-label" htmlFor="department_name" style={{fontWeight:"bold"}}>
                        Designation Name <span className="text-danger">*</span>
                      </Label>
                      <CreatableSelect
                              className=""
                              id="department_name"
                              // options={DesignationList}
                              {...register("designation_name", { required: true })}
                              // onChange={handleDesignationChange}
                              value={watch(`designation_name`)}
                            />
                            {errors.designation_name && <span style={style}>Designation field is required</span>}
                    </Row>
                    <Row> 
                      <Label className="form-label" htmlFor="department_name" style={{fontWeight:"bold"}}>
                        HOD Name <span className="text-danger">*</span>
                      </Label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter HOD"
                        id="hod_name"
                        {...register("hod_name", { required: true })}
                        // onChange={handelDepartChange}
                        // value={watch(`hod_name`)}
                      />
                      {errors.hod_name?.type === "required" && (
                        <span style={style}>HOD field is required</span>
                      )}
                    </Row>
                    <Row>
                      <Label className="form-label" htmlFor="status"  style={{fontWeight:"bold"}}>
                        Status <span className="text-danger">*</span>
                      </Label>
                      <CreatableSelect
                        className=""
                        id="status"
                        options={[
                          { value: true, label: "Active" },
                          { value: false, label: "InActive" },
                        ]}
                        {...register("status", { required: true })}
                        onChange={handlestatusChange}
                        value={watch("status")}
                      />
                      {errors.status && (
                        <span style={style}>Status field is required</span>
                      )}
                    </Row>
                  </div>
                  <div className="submit-section">
                    <button
                      type="submit"
                      className="btn btn-primary rounded-pill"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  )
}

export default HOD;