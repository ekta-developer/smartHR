import React, { useEffect, useState } from "react";
import Head from "../../layout/head/Head";
import Header from "../../components/header/Header";
import { userDatatableAPI } from "../../api/api";
import { Form, Label, Modal, Row, Col } from "reactstrap";
import CreatableSelect from "react-select/creatable";
import { useForm } from "react-hook-form";
import { RxPlus } from "react-icons/rx";
import UserTable from "../../components/dataLists/UserTable";

const style = { color: "#e85347", fontSize: "11px", fontStyle: "italic" };

const UserData = () => {
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
  const [data, setData] = useState([]);

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
  const handleModal = () => {
    toggelModal();
    setIsOpen(false);
    setModalOpen(true);
    console.log("modal");
  };
  const handleClose = () => {
    setModalOpen(false);
    reset();
  };
  const handlestatusChange = (selectedOption) => {
    setValue("status", selectedOption);
    trigger("status");
  };

  const onSubmit = (data) => {
    console.log(data);
    toggelModal(); // Close modal after form submit
  };

  const onError = (errors) => {
    console.log("Errors:", errors);
  };
  return (
    <>
      <div>
        <Head title={"User Dashboard"} />
        <div
          className="page-header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="container-header">
            <Header
              mainHeading={"User dashboard!"}
              subHeading={"Dashboard / User"}
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
              &nbsp;Add Department
            </b>
          </button>
        </div>
      </div>
      <Modal isOpen={modalOpen} toggle={toggelModal}>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <div
            id="example-modal-lg"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="myLargeModalLabel">
                    Add User
                  </h5>
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
                      <div className="form">
                        <Label
                          htmlFor="default-4"
                          className="form-label"
                          style={{ fontWeight: "bold" }}
                        >
                          Master User:
                        </Label>
                        <div className="select">
                          <CreatableSelect
                            className=""
                            id="master"
                            options={[
                              { value: "admin", label: "Admin" },
                              { value: "superAdmin", label: "Super admin" },
                              { value: "user", label: "User" },
                            ]}
                            {...register("master", { required: true })}
                            onChange={handelMasterChange}
                            value={watch(`master`)}
                          />
                          {errors.master && (
                            <span style={style}>Please! select User.</span>
                          )}
                        </div>
                      </div>
                    </Row>
                    {watch(`master`)?.value === "user" ||
                    watch(`master`)?.value === "admin" ||
                    watch(`master`)?.value === "superAdmin" ? (
                      <Row className={`gy-4 mt-1`}>
                        <Col size="3">
                          <div className="form-group">
                            <Label htmlFor="default-0" className="form-label"  style={{ fontWeight: "bold" }}>
                              Name
                            </Label>
                            <div className="form-control-wrap">
                              <input
                                type="text"
                                id="name"
                                {...register("name", {
                                  required: true,
                                  pattern: /^[a-zA-Z\s]*$/,
                                })}
                                value={watch(`name`)}
                                className="form-control"
                              />
                              <span className="invalid">
                                {errors.name?.type === "required" && (
                                  <span style={style}>
                                    Name field is required
                                  </span>
                                )}
                                {errors.name?.type === "pattern" && (
                                  <span style={style}>
                                    Digits are not allowed
                                  </span>
                                )}
                              </span>
                            </div>
                          </div>
                        </Col>
                        <Col size="3">
                          <div className="form-group">
                            <Label htmlFor="default-0" className="form-label"  style={{ fontWeight: "bold" }}>
                              Password
                            </Label>
                            <div className="form-control-wrap">
                              <input
                                type="text"
                                id="password"
                                {...register("password", {
                                  required: true,
                                })}
                                value={watch(`password`)}
                                className="form-control"
                              />
                              <span className="invalid">
                                {errors.password?.type === "required" && (
                                  <span style={style}>
                                    Password field is required
                                  </span>
                                )}
                              </span>
                            </div>
                          </div>
                        </Col>
                        <Col sm="3">
                          <div className="form-group">
                            <Label htmlFor="default-1" className="form-label"  style={{ fontWeight: "bold" }}>
                              Email-ID:
                            </Label>
                            <div className="form-control-wrap">
                              <input
                                type="text"
                                id="email"
                                {...register("email", {
                                  required: true,
                                  pattern:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                })}
                                className="form-control"
                                // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              />
                              {errors.email &&
                                errors.email.type === "required" && (
                                  <span className="invalid" style={style}>
                                    Email field is required
                                  </span>
                                )}
                              {errors.email &&
                                errors.email.type === "pattern" && (
                                  <span className="invalid" style={style}>
                                    Invalid input.Format: (xyz@gmail.com)
                                  </span>
                                )}
                            </div>
                          </div>
                        </Col>
                        <Col sm="3">
                          <div className="form-group">
                            <Label
                              className="form-label"
                              htmlFor="status"
                              style={{ fontWeight: "bold" }}
                            >
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
                              <span style={style}>
                                Status field is required
                              </span>
                            )}
                          </div>
                        </Col>
                      </Row>
                    ) : null}
                    {watch(`master`)?.value === "admin" ||  watch(`master`)?.value === "superAdmin" ? (
                      <>
                        <Row className={`gy-4 mt-1`}>
                          <Col size="4">
                            <div className="form-group">
                              <Label
                                className="from-label"
                                htmlFor="department_name"
                                style={{ fontWeight: "bold" }}
                              >
                                Department
                              </Label>
                              <div className="form-control-wrap">
                                <CreatableSelect
                                  className=""
                                  id="department_name"
                                  options={[
                                    { value: "dep1", label: "Dep-1" },
                                    { value: "dep2", label: "Dep-2" },
                                  ]}
                                  {...register("department_name", {
                                    required: true,
                                  })}
                                  // onChange={handleDepartmentChange}
                                  value={watch(`department_name`)}
                                />
                                {errors.department_name && (
                                  <span style={style}>
                                    Department field is required
                                  </span>
                                )}
                              </div>
                            </div>
                          </Col>
                          <Col size="4">
                            <div className="form-group">
                              <Label
                                className="from-label"
                                htmlFor="designation_name"
                                style={{ fontWeight: "bold" }}
                              >
                                Designation
                              </Label>
                              <div className="form-control-wrap">
                                <CreatableSelect
                                  className=""
                                  id="designation_name"
                                  options={[
                                    { value: "des1", label: "Des-1" },
                                    { value: "des2", label: "Des-2" },
                                  ]}
                                  {...register("designation_name", {
                                    required: true,
                                  })}
                                  // onChange={handleDesignationChange}
                                  value={watch(`designation_name`)}
                                />
                                {errors.designation_name && (
                                  <span style={style}>
                                    Designation field is required
                                  </span>
                                )}
                              </div>
                            </div>
                          </Col>
                          <Col size="4">
                            <div className="form-group">
                              <Label className="from-label" htmlFor="hod"  style={{ fontWeight: "bold" }}>
                                HOD
                              </Label>
                              <div className="form-control-wrap">
                                <CreatableSelect
                                  className=""
                                  id="hod"
                                  options={[
                                    { value: "hod1", label: "HOD-1" },
                                    { value: "hod", label: "HOD-2" },
                                  ]}
                                  {...register("hod", { required: true })}
                                  // onChange={handleHODChange}
                                  value={watch(`hod`)}
                                />
                                {errors.hod && (
                                  <span style={style}>
                                    Hod field is required
                                  </span>
                                )}
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className={`gy-4 mt-1`}>
                          <Col sm="4">
                            <div className="form-group">
                              <Label htmlFor="default-1" className="form-label"  style={{ fontWeight: "bold" }}>
                                Mobile no.
                              </Label>
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  id="mobile"
                                  {...register("mobile", {
                                    required: true,
                                    minLength: 10,
                                    maxLength: 10,
                                    pattern: /^[6-9]\d{9}$/,
                                  })}
                                  className="form-control"
                                />
                                {errors.mobile &&
                                  errors.mobile.type === "required" && (
                                    <span className="invalid" style={style}>
                                      Mobile field is required
                                    </span>
                                  )}
                                {errors.mobile &&
                                  errors.mobile.type === "minLength" && (
                                    <span className="invalid" style={style}>
                                      Invalid input.Min- 10 digits are allowed
                                    </span>
                                  )}
                                {errors.mobile &&
                                  errors.mobile.type === "maxLength" && (
                                    <span className="invalid" style={style}>
                                      Invalid input.Max- 10 digits are allowed
                                    </span>
                                  )}
                                {errors.mobile &&
                                  errors.mobile.type === "pattern" && (
                                    <span className="invalid" style={style}>
                                      Recheck number!. Starts from (6-9) only.
                                    </span>
                                  )}
                              </div>
                            </div>
                          </Col>
                          <Col sm="4">
                            <div className="form-group">
                              <Label htmlFor="default-1" className="form-label"  style={{ fontWeight: "bold" }}>
                                Adhaar Card:
                              </Label>
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  id="adhaar_card"
                                  {...register("adhaar_card", {
                                    required: true,
                                    minLength: 12,
                                    maxLength: 12,
                                    pattern: /^[6-9]\d{11}$/,
                                  })}
                                  className="form-control"
                                />
                                {errors.adhaar_card &&
                                  errors.adhaar_card.type === "required" && (
                                    <span className="invalid" style={style}>
                                      Adhaar field is required
                                    </span>
                                  )}
                                {errors.adhaar_card &&
                                  errors.adhaar_card.type === "minLength" && (
                                    <span className="invalid" style={style}>
                                      Invalid input.Min- 12 digits are allowed
                                    </span>
                                  )}
                                {errors.adhaar_card &&
                                  errors.adhaar_card.type === "maxLength" && (
                                    <span className="invalid" style={style}>
                                      Invalid input.Max- 12 digits are allowed
                                    </span>
                                  )}
                                {errors.adhaar_card &&
                                  errors.adhaar_card.type === "pattern" && (
                                    <span className="invalid" style={style}>
                                      Recheck Adhaar!. Starts from (6-9) only.
                                    </span>
                                  )}
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </>
                    ) : null}
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
      <UserTable data={data} />
    </>
  );
};

export default UserData;
