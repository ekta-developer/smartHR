import React from 'react'

const Header = ({...props}) => {
  return (
    <>
       <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">{props.mainHeading}</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item active">{props.subHeading}</li>
              </ul>
            </div>
          </div>
        </div>   
    </>
  )
}

export default Header;