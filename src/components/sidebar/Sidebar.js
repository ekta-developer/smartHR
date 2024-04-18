import { React, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ ...props }) => {
 
  const handleHover=()=>{
    document.body.classList.toggle("mini-sidebar");

  // Check if the sidebar is in collapsed state
  const isCollapsed = document.body.classList.contains("mini-sidebar");

  // Get all submenu list items
  const subMenuItems = document.querySelectorAll('.submenu');

  // Loop through each submenu list item
  subMenuItems.forEach(function(subMenuItem) {
    // Show/hide the submenu based on the sidebar state
    const subMenu = subMenuItem.querySelector('ul');
    if (subMenu) {
      subMenu.style.display = isCollapsed ? "none" : "block";
    }
  });
  }
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-menu">
            <ul className="sidebar-vertical">
              {props.data.map((item,key)=>(
                <li className="submenu" key={item.id}>
                  <Link to={item?.link} >
                <li className="la la-dashcube"onMouseEnter={handleHover} onMouseLeave={handleHover}>
                  </li> 
                  <span >{item.text}</span>
                  <span className="menu-arrow"></span>
                  </Link>
                  </li>
              ))}
        
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
