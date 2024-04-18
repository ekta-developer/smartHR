import React, { useState } from "react";
import DataTable from "react-data-table-component";

const PagesDatatable = ({ ...props }) => {
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  return (
    <>
      <div className="row">
        <div className="container-body">
          <div className="table-responsive">
            <DataTable
              data={props.data}
              columns={props.columns}
              striped={true}
              responsive={true}
              pagination
              paginationResetDefaultPage={resetPaginationToggle}
              subHeader={true}
              persistTableHead
              onColumnOrderChange
              paginationRowsPerPageOptions={props.perPageOpt}
              paginationPerPage={props.pagination}
            />
          </div>
        </div>
        <div className="card-footer">
          <a href="">View all Rows</a>
        </div>
      </div>
    </>
  );
};

export default PagesDatatable;
