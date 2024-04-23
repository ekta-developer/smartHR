import React, { useEffect, useState } from "react";
import Head from "../../layout/head/Head";
import Header from "../../components/header/Header";
import { FiSearch } from "react-icons/fi";
import PagesDatatable from "../../components/datatable/PagesDatatable";
import { getGeneratedBillAPI, getTowerListAPI } from "../../api/api";
import { set, useForm } from "react-hook-form";
import { Badge, Button, Form, Input, Label, Modal, Row } from "reactstrap";
import CreatableSelect from "react-select/creatable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DataTable from "react-data-table-component";

const style = { color: "#e85347", fontSize: "11px", fontStyle: "italic" };
const customDatepicker = {
  /* Ensure it takes the full width of the container */
  border: " 1px solid lightgray" /* Lighten the border color */,
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: " 0 min-content",
  /* margin: 2px; */
  paddingBottom: "2px",
  paddingTop: "2px",
  color: "hsl(0, 0%, 20%)",
  boxSizing: "border-box",
  width: "29rem",
  height: "2.3rem",
};

const Generatebills = () => {
  const {
    register,
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
  const [selectedRows, setSelectedRows] = useState([]);
  const [towerList, setTowerList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [filterData, setfilterData] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [column, setColumns] = useState([
    {
      name: "Allotee Name",
      selector: (row) => row.allottee_name,
      sortable: true,
      cell: (row) => <div style={{ width: "7rem" }}>{row.allottee_name}</div>,
    },
    {
      name: "Contact Number",
      selector: (row) => row.contact,
      sortable: true,
      cell: (row) => <div style={{ width: "7rem" }}>{row.contact}</div>,
    },
    {
      name: "Tower Name",
      selector: (row) => row.tower_name,
      sortable: true,
      cell: (row) => <div style={{ width: "7rem" }}>{row.tower_name}</div>,
    },
    {
      name: "Room Name",
      selector: (row) => row.room_name,
      sortable: true,
      cell: (row) => <div style={{ width: "7rem" }}>{row.room_name}</div>,
    },
    {
      name: "Previous Reading",
      selector: (row) => row.PreviousReading,
      sortable: true,
      cell: (row) => <div style={{ width: "9rem" }}>{row.PreviousReading}</div>,
    },
    {
      name: "Current Reading",
      selector: (row) => row.current,
      sortable: true,
      cell: (row) => (
        <Input
          id="input"
          style={{ width: "8rem" }}
          onClick={() => {
            if (!isRowSelected(row)) {Input.disabled}
            else {enabled};
          }}
        />
      ),
    },
    {
      name: "Consume Reading",
      selector: (row) => row.consume_unit,
      sortable: true,
      cell: (row) => <div style={{ width: "8rem" }}>{row.consume_unit}</div>,
    },
    {
      name: "Total Unit",
      selector: (row) => row.total_amount,
      sortable: true,
    },
    {
      name: "Month",
      selector: (row) => row.month,
      sortable: true,
    },
    {
      name: "Due Date",
      selector: (row) => row.due_date,
      sortable: true,
    },
    {
      name: "Bill Date",
      selector: (row) => row.bill_date,
      sortable: true,
    },
  ]);
  const handleChange = (newSelectedRows) => {
    setSelectedRows(newSelectedRows);
  };

  const isRowSelected = (row) => {
    return selectedRows.some((selectedRow) => selectedRow.id === row.id);
  };

  useEffect(() => {
    getGenerateBillList();
    getTowerList();
  }, []);

  const getGenerateBillList = () => {
    getGeneratedBillAPI()
      .then((res) => {
        console.log("API data=", res?.data);
        if (res?.data?.status === "Success") {
          setData(res?.data?.data);
          setfilterData(res?.data?.data);
          // Initialize filteredData with initial data
        } else {
          console.log("err", res?.data?.message);
          alert("Connection Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTowerList = () => {
    getTowerListAPI()
      .then((res) => {
        if (res.data.status === "Success") {
          const data = res?.data?.data.map((item) => ({
            value: item.id,
            label: item.tower_name,
          }));
          setTowerList(data);
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = () => {
    // Get the tower and date from form data
    let selectedTower = watch("tower");
    let selectedDate = watch("month");

    if (!selectedTower || !selectedDate) {
      console.error("Tower and Date are required.");
      return;
    }

    // Convert selectedDate to Date object if it's not already
    if (!(selectedDate instanceof Date)) {
      selectedDate = new Date(selectedDate);
    }
    const searchData = {
      tower_id: selectedTower.value,
      date: selectedDate.toISOString(), // Assuming selectedDate is a Date object
    };

    // Call the API with search data
    getGeneratedBillAPI(searchData)
      .then((res) => {
        if (res.data.status === "Success") {
          // Update the data state with the fetched results
          setData(res.data.data);
        } else {
          console.error("Error fetching data from API");
        }
      })
      .catch((err) => {
        console.error("Error fetching data from API", err);
      });
  };

  const handleTowerChange = (selectedOption) => {
    console.log(selectedOption);
    setValue("tower", selectedOption || "");
    trigger("tower");
  };
  const handleDateChange = (date, selectedOption) => {
    setStartDate(date);
    console.log(selectedOption);
    setValue("month", selectedOption || "");
    trigger("month");
  };
  const onSubmit = (data) => {
    console.log(data);
    toggelModal(); // Close modal after form submit
  };
  const handleSubmit = () => {
    console.log("Search");
  };
  useEffect(() => {
    const result = data.filter((item) => {
      return item.tower_name.toLowerCase().match(search.toLowerCase());
    });
    setfilterData(result);
  }, [search]);
  return (
    <>
      <div>
        <Head title={"Generate Bills"} />

        <div
          className="page-header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="container-header">
            <Header
              mainHeading={"Bill dashboard!"}
              subHeading={"Dashboard / Generate Bills"}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary rounded-pill"
            style={{ height: "40px" }}
            onClick={() => handleModal()}
          >
            <b>
              <FiSearch />
              &nbsp;Search
            </b>
          </button>
        </div>
        <DataTable
          columns={column}
          data={filterData}
          selectableRows
          onSelectedRowsChange={handleChange}
          pagination
          fixedHeader
          selectableRowsHighlight
          highlightOnHover
          actions={<Button className="btn btn-success">Export Pdf</Button>}
          subHeader
          subHeaderComponent={
            <input
              type="text"
              className="w-25 form-control"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
          subHeaderAlign="left"
        />
      </div>
      <Modal isOpen={modalOpen} toggle={toggelModal}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div id="add_department" className="" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Generate Bill</h5>
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
                      <Label
                        htmlFor="default-0"
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Tower:
                      </Label>
                      <CreatableSelect
                        isClearable
                        id="tower"
                        options={towerList}
                        {...register("tower", { required: true })}
                        onChange={handleTowerChange}
                        value={watch("tower")}
                      />
                      {errors.tower && (
                        <span style={style}>Tower field is required</span>
                      )}
                    </Row>

                    <Row>
                      <Label
                        className="form-label"
                        htmlFor="status"
                        style={{ fontWeight: "bold" }}
                      >
                        Month <span className="text-danger">*</span>
                      </Label>
                      <div style={{ width: "300px" }}>
                        {" "}
                        {/* Container to control DatePicker width */}
                        <DatePicker
                          id={"month"}
                          {...register("month", { required: true })}
                          onChange={handleDateChange}
                          selected={startDate}
                          dateFormat="MM/yyyy" // Format to display the month and year in the input
                          showMonthYearPicker // Enable month and year selection only
                          // showFullMonthYearPicker // Optional: Enhances display for selecting month and year
                          className={customDatepicker} // Apply the custom styles to the input
                        />
                        {errors.month && (
                          <span style={style}>Month field is required</span>
                        )}
                      </div>
                    </Row>
                  </div>
                  <div className="submit-section">
                    <button
                      type="submit"
                      className="btn btn-primary rounded-pill"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default Generatebills;
