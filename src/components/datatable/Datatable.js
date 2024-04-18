import React,{useState} from 'react';
import DataTable from 'react-data-table-component';


const Datatable= ({...props}) => {
    
const [resetPaginationToggle, setResetPaginationToggle]=useState(false)

  return (
    <>
          <div className="col-md-6 d-flex">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h3 className="card-title mb-0">{props.heading}</h3>
              </div>
              <div className="card-body">
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
                <a href="clients.html">View all Rows</a>
              </div>
            </div>
          </div> 
    </>
  )
}

export default Datatable;
