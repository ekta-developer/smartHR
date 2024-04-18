import React from "react";

const AdminCard = ({...props}) => {
const icons=[
  {icon:"fa-solid fa-cubes"},
  {icon:"fa-solid fa-dollar-sign"},
  {icon:"fa-regular fa-gem"},
  {icon:"fa-solid fa-user" },]

  return (
    <>  
      <div className="row">
        {console.log(props.data,"ddddd---")}
        {props.data.map((item,index)=>(
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon"> 
                  <i className={icons[index].icon}></i>
                </span>
                <div className="dash-widget-info">
                  <h3>{item.total}</h3>
                  <span>{item.title}</span>
                </div>
              </div>
            </div>
          </div>
          ))}
          </div>
   
    </>
  );
};

export default AdminCard;
