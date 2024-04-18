import { React, useState } from "react";
import { Badge } from "reactstrap";
import DataTable from "react-data-table-component";

const getStatusColor = (status) => {
  if (status === "Paid") {
    return "success"; // Green color for paid
  } else if (status === "Unpaid") {
    return "danger"; // Red color for unpaid
  } else {
    return "warning"; // Orange color for partial paid
  }
};

const getStatusText = (status) => {
  if (status === "Paid") {
    return "Paid";
  } else if (status === "Unpaid") {
    return "Unpaid";
  } else {
    return "Partial Paid";
  }
};

const Invoice_payments = ({ row }) => {
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [columns, setColumns] = useState([
    {
      name: "Invoice ID",
      selector: (row) => row.invoice_id,
      sortable: true,
    },
    {
      name: "Client",
      selector: (row) => row.client,
      sortable: true,
    },
    {
      name: "Due Date",
      selector: (row) => row.duedate,
      sortable: true,
    },

    {
      name: "Total",
      selector: (row) => row.total,
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
  ]);

  const [data, setData] = useState([
    {
      invoice_id: "#INV-0001",
      client: "Global Technologies",
      duedate: "11 Mar 2019",
      total: "$380",
      status: "Partially Paid",
    },
    {
      invoice_id: "#INV-0002",
      client: "Delta Infotech",
      duedate: "8 Feb 2019",
      total: "$500",
      status: "Paid",
    },
    {
      invoice_id: "#INV-0003",
      client: "Cream Inc",
      duedate: "23 Jan 2019",
      total: "$60",
      status: "Unpaid",
    },
    {
      invoice_id: "#INV-0004",
      client: "Global Technologies",
      duedate: "11 Mar 2019",
      total: "$380",
      status: "Partially Paid",
    },
    {
      invoice_id: "#INV-0005",
      client: "Delta Infotech",
      duedate: "8 Feb 2019",
      total: "$500",
      status: "Paid",
    },
    {
      invoice_id: "#INV-0006",
      client: "Cream Inc",
      duedate: "23 Jan 2019",
      total: "$60",
      status: "Unpaid",
    },
    {
      invoice_id: "#INV-0007",
      client: "Global Technologies",
      duedate: "11 Mar 2019",
      total: "$380",
      status: "Partially Paid",
    },
    {
      invoice_id: "#INV-0008",
      client: "Delta Infotech",
      duedate: "8 Feb 2019",
      total: "$500",
      status: "Paid",
    },
    {
      invoice_id: "#INV-0009",
      client: "Cream Inc",
      duedate: "23 Jan 2019",
      total: "$60",
      status: "Unpaid",
    },
  ]);

  const [col_payment, setcol_payment] = useState([
    {
      name: "Invoice ID",
      selector: (row) => row.invoice_id,
      sortable: true,
    },
    {
      name: "Client",
      selector: (row) => row.client,
      sortable: true,
    },
    {
      name: "Payment Type",
      selector: (row) => row.pay_type,
      sortable: true,
    },

    {
      name: "Paid Date",
      selector: (row) => row.paid_date,
      sortable: true,
    },
    {
      name: "Paid Amount",
      selector: (row) => row.paid_amt,
      sortable: true,
    },
  ]);

  const [paymentData, setPaymentdata] = useState([
    {
      invoice_id: "#INV-0001",
      client: "Global Technologies",
      pay_type: "Paypal",
      paid_date: "11 Mar 2019",
      paid_amt: "$380",
    },
    {
      invoice_id: "#INV-0002",
      client: "Delta Infotech",
      pay_type: "Paypal",
      paid_date: "8 Feb 2019",
      paid_amt: "$500",
    },
    {
      invoice_id: "#INV-0003",
      client: "Cream Inc",
      pay_type: "Paypal",
      paid_date: "23 Jan 2019",
      paid_amt: "$60",
    },
    {
      invoice_id: "#INV-0004",
      client: "Global Technologies",
      pay_type: "Paypal",
      paid_date: "11 Mar 2019",
      paid_amt: "$380",
    },
    {
      invoice_id: "#INV-0005",
      client: "Delta Infotech",
      pay_type: "Paypal",
      paid_date: "8 Feb 2019",
      paid_amt: "$500",
    },
    {
      invoice_id: "#INV-0006",
      client: "Cream Inc",
      pay_type: "Paypal",
      paid_date: "23 Jan 2019",
      paid_amt: "$60",
    },
    {
      invoice_id: "#INV-0007",
      client: "Global Technologies",
      pay_type: "Paypal",
      paid_date: "11 Mar 2019",
      paid_amt: "$380",
    },
    {
      invoice_id: "#INV-0008",
      client: "Delta Infotech",
      pay_type: "Paypal",
      paid_date: "8 Feb 2019",
      paid_amt: "$500",
    },
    {
      invoice_id: "#INV-0009",
      client: "Cream Inc",
      pay_type: "Paypal",
      paid_date: "23 Jan 2019",
      paid_amt: "$60",
    },
  ]);
  return (
    <div>
      <div className="row">
        <div className="col-md-6 d-flex">
          <div className="card card-table flex-fill">
            <div className="card-header">
              <h3 className="card-title mb-0">Invoices</h3>
              {/* &nbsp;&nbsp; */}
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <DataTable
                  className="table table-nowrap custom-table mb-0"
                  columns={columns}
                  data={data}
                  striped={true}
                  responsive={true}
                  pagination
                  paginationResetDefaultPage={resetPaginationToggle}
                  subHeader={true}
                  persistTableHead
                  onColumnOrderChange
                  paginationRowsPerPageOptions={[3, 6, 9]}
                  paginationPerPage={3}
                />
              </div>
            </div>
            <div className="card-footer">
              <a href="invoices.html">View all invoices</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex">
          <div className="card card-table flex-fill">
            <div className="card-header">
              <h3 className="card-title mb-0">Payments</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <DataTable
                  className="table table-nowrap custom-table mb-0"
                  columns={col_payment}
                  data={paymentData}
                  pagination
                  paginationResetDefaultPage={resetPaginationToggle}
                  subHeader={true}
                  persistTableHead
                  onColumnOrderChange
                  striped={true}
                  responsive={true}
                  paginationRowsPerPageOptions={[3, 6, 9]}
                  paginationPerPage={3}
                />
              </div>
            </div>
            <div className="card-footer">
              <a href="payments.html">View all payments</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice_payments;
