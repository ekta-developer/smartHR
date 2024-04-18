import { React, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { Link } from "react-router-dom";

const Sidebar = ({ ...props }) => {
  const [dropdown,setDropdown]=useState(false);
  const select = () => {
    setDropdown(!dropdown);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

 const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-menu">
            <ul className="sidebar-vertical">
              <li className="menu-title">
                <span>Main</span>
              </li>
              {/* <li className="submenu">
                <a href="#" className="subdrop"  onClick={select}>
                  <i className="la la-dashcube"></i> <span> Dashboard</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul className={`submenu-list ${dropdown ? "" : 'show'}`}>
                  {props.data.map((item, index) => (
                    <li key={index}>
                      <a href="/">{item.text}</a>
                    </li>
                  ))}
                </ul>
              </li> */}

              <Dropdown
                tag="li"
                isOpen={dropdown}
                toggle={toggle}
                className="submenu"
              >
                <DropdownToggle
                  tag="a"
                  onClick={select}
                  className={dropdown ? "active" : ""}
                >
                   <i className="la la-dashcube"></i>
                  <span>Dashboard</span>
                  <span className="menu-arrow"></span>
                </DropdownToggle>
              
                  <DropdownMenu
                  tag="ul"
                  style={{display : dropdown ?"block" : "none"}}
                  >
                  {props.data.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>{item.text}</Link>
                    </li>
                  ))}
                  </DropdownMenu>
       
              </Dropdown>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
