import React,{useState} from 'react';
import Datatable from '../datatable/Datatable';

const Tower_User = ({...props}) => {

    const [columns, setColumns] = useState([
    
        {
          name: "Tower Name",
          selector: (row) => row.tower_name,
          sortable: true,
        },
        {
          name: "Total collection",
          selector: (row) => row.total_collection,
          sortable: true,
        },
        {
          name: "Total Bills",
          selector: (row) => row.total_bill,
          sortable: true,
          maxWidth: "5px",
        },
      ]);

     const [userColumns,setUserColumns]=useState([
        {
            name: "Allote Name",
          selector: (row) => row.allote_name,
          sortable: true, 
        },
        {
            name: "House Number",
          selector: (row) => row.house_number,
          sortable: true, 
        },
        {
            name: "Last payment",
          selector: (row) => row.last_payment,
          sortable: true, 
        },
        {
            name: "Bill Amount",
          selector: (row) => row.bill_amount,
          sortable: true, 
        },
     ]); 
  return (
    <>
     <div className="row">
         <Datatable 
            heading={"Tower Data List"}
            data={props.data}
            columns={columns}
            perPageOpt={[2,4,6]}
            pagination={2}
            />
         <Datatable 
            heading={"User Data List"}
            data={props.userdata}
            columns={userColumns}
            perPageOpt={[2,4,6]}
            pagination={2}
            />
        </div>
    </>
  )
}

export default Tower_User;
