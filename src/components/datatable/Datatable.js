import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {userColumns, userRows} from "../../datatablesource"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";


const Datatable = () => {
    const [data, setData] = useState(userRows);
    const handleDelete = (id)=>{
      setData(data.filter(item=> item.id !== id))
    };
    const actionColumn=[{field: "action", headerName:"Action", width:200,
renderCell:(params)=>{
    return(
        <div className="cellAction">
          <Link to="/users/test" style={{textDecoration: "none"}}>
            <div className="viewButton">ver</div>
          </Link>
          
            <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>borrar</div>
          
        </div>
        
    )
}}]
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add new Users
        <Link to="/users/new" style={{textDecoration: "none"}} className="link">
            Nuevo Ususario
          </Link>
      </div>
      
        <DataGrid 
          className="datagrid"
          rows={data}
          columns={userColumns.concat(actionColumn)}
          pageSize={10}
          rowsPerPageOptions={[9]}
          
        />
      
    </div>
  );
};

export default Datatable;
