
import { useEffect, React, useState } from "react";
import logo1 from "../../Assets/assets/img/logo.svg";
import logo2 from "../../Assets/assets/img/collapse-logo.svg";
import logo3 from "../../Assets/assets/img/logo2.png";
import flag1 from "../../Assets/assets/img/flags/us.png";
import flag2 from "../../Assets/assets/img/flags/fr.png";
import flag3 from "../../Assets/assets/img/flags/es.png";
import flag4 from "../../Assets/assets/img/flags/de.png";
import Icon from "../icon/Icon";
import { BiSearch } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import img1 from "../../Assets/assets/img/profiles/avatar-02.jpg";
import img2 from "../../Assets/assets/img/profiles/avatar-03.jpg";
import img3 from "../../Assets/assets/img/profiles/avatar-06.jpg";
import img4 from "../../Assets/assets/img/profiles/avatar-17.jpg";
import img5 from "../../Assets/assets/img/profiles/avatar-13.jpg";
import img6 from "../../Assets/assets/img/profiles/avatar-09.jpg";
import img7 from "../../Assets/assets/img/profiles/avatar-02.jpg";
import img8 from "../../Assets/assets/img/profiles/avatar-05.jpg";
import img9 from "../../Assets/assets/img/profiles/avatar-08.jpg";
import img10 from "../../Assets/assets/img/avatar/avatar-27.jpg";

const Nav = () => {
  const handleToggle=()=>{
    var body = document.body;

    // Toggle the "mini-sidebar" class on the body element
    body.classList.toggle("mini-sidebar");

    // Get all elements that are siblings of elements with the class "subdrop"
    var subdropSiblings = document.querySelectorAll(".subdrop + ul");

    // Loop through each sibling and show/hide based on the presence of "mini-sidebar" class
    subdropSiblings.forEach(function(sibling) {
      if (body.classList.contains("mini-sidebar")) {
        sibling.style.display = "block";
      } else {
        sibling.style.display = "none";
      }

  })
}
  // State to hold the visibility of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// State to hold the selected language
const [selectedLanguage, setSelectedLanguage] = useState({ name: "English", flag: flag1 });

// Define the flag images for each language
const flagImages = {
  English: flag1,
  French: flag2,
  Spanish: flag3,
  German: flag4
};
  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

   // Function to update the selected language
   const selectLanguage = (language) => {
    setSelectedLanguage({ name: language, flag: flagImages[language] });
    setIsDropdownOpen(false); // Close the dropdown after selecting a language
  };

  const [notify, setNotify] = useState(false);
  const [msg, setMsg] = useState(false);
  const [profile, setProfile] = useState(false);

  const selectNotification = () => {
    setNotify(!notify);
  };
  const selectMessages = () => {
    setMsg(!msg);
  };
  const selectProfile = () => {
    setProfile(!profile);
  };
  return (
    <>
      <div className="header">
        <div className="header-left">
          <a href="/" className="logo">
            <img src={logo1} alt="Logo" />
          </a>
          <a href="admin-dashboard.html" className="logo collapse-logo">
            <img src={logo2} alt="Logo" />
          </a>
          <a href="admin-dashboard.html" className="logo2">
            <img src={logo3} width="40" height="40" alt="Logo" />
          </a>
        </div>

        <a id="toggle_btn" onClick={handleToggle}>
          <span class="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>

        <div className="page-title-box">
          <h3>Dreams Technologies</h3>
        </div>

        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
            <i className="fa-solid fa-bars"></i>
          </a>

        <ul className="nav user-menu">
          <li className="nav-item">
            <div className="top-nav-search">
              <a href="javascript:void(0);" className="responsive-search">
                {/* <Icon className="fa-solid fa-magnifying-glass"></Icon> */}
              </a>
              <form action="/">
                <input
                  className="form-control"
                  type="text"
                  placeholder={"Search here"}
                />
                <button className="btn" type="submit">
                  <i ><BiSearch/></i>
                </button>
              </form>
            </div>
          </li>

      <li className="nav-item dropdown has-arrow flag-nav">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        onClick={toggleDropdown} // Toggle the dropdown visibility when clicked
      >
        <img src={selectedLanguage.flag} alt="Flag" height="20" /> <span>{selectedLanguage.name}</span>
      </a>
      <div
        className={`dropdown-menu dropdown-menu-right ${isDropdownOpen ? "show" : ""}`}
      >
        <a href="#" className="dropdown-item" onClick={() => selectLanguage("English")}>
          <img src={flag1} alt="Flag" height="16" /> English
        </a>
        <a href="#" className="dropdown-item" onClick={() => selectLanguage("French")}>
          <img src={flag2} alt="Flag" height="16" /> French
        </a>
        <a href="#" className="dropdown-item" onClick={() => selectLanguage("Spanish")}>
          <img src={flag3} alt="Flag" height="16" /> Spanish
        </a>
        <a href="#" className="dropdown-item" onClick={() => selectLanguage("German")}>
          <img src={flag4} alt="Flag" height="16" /> German
        </a>
      </div>
    </li>

          <li className="nav-item dropdown">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
              onClick={selectNotification}
            >
              <i><MdOutlineNotifications /></i>{" "}
              <span className="badge rounded-pill">3</span>
            </a>
            <div
              className={`dropdown-menu notifications ${notify ? "show" : ""}`}
            >
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="chat-block d-flex">
                        <span className="avatar flex-shrink-0">
                          <img
                            src={img1}
                            alt="User Image"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">John Doe</span> added
                            new task{" "}
                            <span className="noti-title">
                              Patient appointment booking
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="chat-block d-flex">
                        <span className="avatar flex-shrink-0">
                          <img
                            src={img2}
                            alt="User Image"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Tarah Shropshire</span>{" "}
                            changed the task name{" "}
                            <span className="noti-title">
                              Appointment booking with payment gateway
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="chat-block d-flex">
                        <span className="avatar flex-shrink-0">
                          <img
                            src={img3}
                            alt="User Image"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Misty Tison</span>{" "}
                            added{" "}
                            <span className="noti-title">Domenic Houston</span>{" "}
                            and <span className="noti-title">Claire Mapes</span>{" "}
                            to project{" "}
                            <span className="noti-title">
                              Doctor available module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              8 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="chat-block d-flex">
                        <span className="avatar flex-shrink-0">
                          <img
                            src={img4}
                            alt="User Image"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Rolland Webber</span>{" "}
                            completed task{" "}
                            <span className="noti-title">
                              Patient and Doctor video conferencing
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              12 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="chat-block d-flex">
                        <span className="avatar flex-shrink-0">
                          <img
                            src={img5}
                            alt="User Image"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Bernardo Galaviz</span>{" "}
                            added new task{" "}
                            <span className="noti-title">
                              Private chat module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              2 days ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="activities.html">View all Notifications</a>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
              onClick={selectMessages}
            >
              <i><TbMessageCircle /></i>{" "}
              <span className="badge rounded-pill">8</span>
            </a>
            <div className={`dropdown-menu notifications ${msg ? "show" : ""}`}>
              <div className="topnav-dropdown-header">
                <span className="notification-title">Messages</span>
                <a href="javascript:void(0)" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img
                              src={img6}
                              alt="User Image"
                            />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img
                              src={img7}
                              alt="User Image"
                            />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">John Doe</span>
                          <span className="message-time">6 Mar</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img
                              src={img2}
                              alt="User Image"
                            />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Tarah Shropshire{" "}
                          </span>
                          <span className="message-time">5 Mar</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img
                              src={img8}
                              alt="User Image"
                            />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Mike Litorus</span>
                          <span className="message-time">3 Mar</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img
                              src={img9}
                              alt="User Image"
                            />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Catherine Manseau{" "}
                          </span>
                          <span className="message-time">27 Feb</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="chat.html">View all Messages</a>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown has-arrow main-drop">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
              onClick={selectProfile}
            >
              <span className="user-img">
                <img src={img10} alt="User Image" />
                <span className="status online"></span>
              </span>
              <span>Admin</span>
            </a>
            <div className={`dropdown-menu ${profile ? "show" : ""}`}>
              <a className="dropdown-item" href="profile.html">
                My Profile
              </a>
              <a className="dropdown-item" href="settings.html">
                Settings
              </a>
              <a className="dropdown-item" href="/">
                Logout
              </a>
            </div>
          </li>
        </ul>

        <div className="dropdown mobile-user-menu">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="profile.html">
              My Profile
            </a>
            <a className="dropdown-item" href="settings.html">
              Settings
            </a>
            <a className="dropdown-item" href="/">
              Logout
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
