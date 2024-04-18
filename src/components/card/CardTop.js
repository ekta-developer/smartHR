import { React, useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import OwlCarousel from "react-owl-carousel";
// import '../../js/owl.carousel.min.js'

const CardTop = () => {
  useEffect(() => {
    var options = {
      series: [
        { name: "Break", data: [-50, -120, -80, -180, -80, -70, -100] },
        { name: "Hours", data: [200, 250, 200, 290, 220, 300, 250] },
      ],
      colors: ["#FC133D", "#55CE63"],
      chart: {
        type: "bar",
        height: 210,
        stacked: true,
        zoom: { enabled: true },
      },
      responsive: [
        {
          breakpoint: 280,
          options: { legend: { position: "bottom", offsetY: 0 } },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 4,
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "all",
          columnWidth: "30%",
          endingShape: "rounded",
        },
      },
      dataLabels: { enabled: false },
      yaxis: { min: -200, max: 300, tickAmount: 5 },
      xaxis: { categories: [" S ", "M", "T", "W", "T", "F", "S"] },
      legend: { show: false },
      fill: { opacity: 1 },
    };

    var chart = new ApexCharts(
      document.querySelector("#working_chart"),
      options
    );
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <>
      {/*Welcome to important*/}
      <div className="row">
        <div className="col-xxl-8 col-lg-12 col-md-12">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card employee-welcome-card flex-fill">
                <div className="card-body">
                  <div className="welcome-info">
                    <div className="welcome-content">
                      <h4>Welcome Back, Darlee</h4>
                      <p>
                        You have <span>4 meetings</span> today,
                      </p>
                    </div>
                    <div className="welcome-img">
                      <img
                        src="assets/img/avatar/avatar-19.jpg"
                        className="img-fluid"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="welcome-btn">
                    <a href="profile.html" className="btn">
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="statistic-header">
                    <h4>Statistics</h4>
                    <div className="dropdown statistic-dropdown">
                      <a
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="javascript:void(0);"
                      >
                        Today
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="javascript:void(0);" className="dropdown-item">
                          Week
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          Month
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          Year
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="clock-in-info">
                    <div className="clock-in-content">
                      <p>Work Time</p>
                      <h4>6 Hrs : 54 Min</h4>
                    </div>
                    <div className="clock-in-btn">
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <img src="assets/img/icons/clock-in.svg" alt="Icon" />{" "}
                        Clock-In
                      </a>
                    </div>
                  </div>
                  <div className="clock-in-list">
                    <ul className="nav">
                      <li>
                        <p>Remaining</p>
                        <h6>2 Hrs 36 Min</h6>
                      </li>
                      <li>
                        <p>Overtime</p>
                        <h6>0 Hrs 00 Min</h6>
                      </li>
                      <li>
                        <p>Break</p>
                        <h6>1 Hrs 20 Min</h6>
                      </li>
                    </ul>
                  </div>
                  <div className="view-attendance">
                    <a href="attendance.html">
                      View Attendance{" "}
                      <i className="fe fe-arrow-right-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card info-card flex-fill">
                <div className="card-body">
                  <h4>Upcoming Holidays</h4>
                  <div className="holiday-details">
                    <div className="holiday-calendar">
                      <div className="holiday-calendar-icon">
                        <img
                          src="assets/img/icons/holiday-calendar.svg"
                          alt="Icon"
                        />
                      </div>
                      <div className="holiday-calendar-content">
                        <h6>Ramzan</h6>
                        <p>Mon 20 May 2024</p>
                      </div>
                    </div>
                    <div className="holiday-btn">
                      <a href="holidays.html" className="btn">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="statistic-header">
                    <h4>Attendance & Leaves</h4>
                    <div className="dropdown statistic-dropdown">
                      <a
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="javascript:void(0);"
                      >
                        2024
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="javascript:void(0);" className="dropdown-item">
                          2025
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          2026
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          2027
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="attendance-list">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="attendance-details">
                          <h4 className="text-primary">9</h4>
                          <p>Total Leaves</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="attendance-details">
                          <h4 className="text-pink">5.5</h4>
                          <p>Leaves Taken</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="attendance-details">
                          <h4 className="text-success">04</h4>
                          <p>Leaves Absent</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="attendance-details">
                          <h4 className="text-purple">0</h4>
                          <p>Pending Approval</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="attendance-details">
                          <h4 className="text-info">214</h4>
                          <p>Working Days</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="attendance-details">
                          <h4 className="text-danger">2</h4>
                          <p>Loss of Pay</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="view-attendance">
                    <a href="leaves-employee.html">
                      Apply Leave <i className="fe fe-arrow-right-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="statistic-header">
                    <h4>Working hours</h4>
                    <div className="dropdown statistic-dropdown">
                      <a
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="javascript:void(0);"
                      >
                        This Week
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="javascript:void(0);" className="dropdown-item">
                          Last Week
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          This Month
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          Last 30 Days
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="working-hour-info">
                    <div id="working_chart">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xxl-4 col-lg-12 col-md-12 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="statistic-header">
                <h4>Important</h4>
                <div className="important-notification">
                  <a href="activities.html">
                    View All <i className="fe fe-arrow-right-circle"></i>
                  </a>
                </div>
              </div>
              <div className="notification-tab">
                <ul className="nav nav-tabs">
                  <li>
                    <a
                      href="#"
                      className="active"
                      data-bs-toggle="tab"
                      data-bs-target="#notification_tab"
                    >
                      <i className="la la-bell"></i> Notifications
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="tab"
                      data-bs-target="#schedule_tab"
                    >
                      <i className="la la-list-alt"></i> Schedules
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="notification_tab">
                    <div className="employee-noti-content">
                      <ul className="employee-notification-list">
                        <li className="employee-notification-grid">
                          <div className="employee-notification-icon">
                            <a href="activities.html">
                              <span className="badge-soft-danger rounded-circle">
                                HR
                              </span>
                            </a>
                          </div>
                          <div className="employee-notification-content">
                            <h6>
                              <a href="activities.html">
                                Your leave request has been
                              </a>
                            </h6>
                            <ul className="nav">
                              <li>02:10 PM</li>
                              <li>21 Apr 2024</li>
                            </ul>
                          </div>
                        </li>
                        <li className="employee-notification-grid">
                          <div className="employee-notification-icon">
                            <a href="activities.html">
                              <span className="badge-soft-info rounded-circle">
                                ER
                              </span>
                            </a>
                          </div>
                          <div className="employee-notification-content">
                            <h6>
                              <a href="activities.html">
                                You’re enrolled in upcom....
                              </a>
                            </h6>
                            <ul className="nav">
                              <li>12:40 PM</li>
                              <li>21 Apr 2024</li>
                            </ul>
                          </div>
                        </li>
                        <li className="employee-notification-grid">
                          <div className="employee-notification-icon">
                            <a href="activities.html">
                              <span className="badge-soft-warning rounded-circle">
                                SM
                              </span>
                            </a>
                          </div>
                          <div className="employee-notification-content">
                            <h6>
                              <a href="activities.html">
                                Your annual compliance trai
                              </a>
                            </h6>
                            <ul className="nav">
                              <li>11:00 AM</li>
                              <li>21 Apr 2024</li>
                            </ul>
                          </div>
                        </li>
                        <li className="employee-notification-grid">
                          <div className="employee-notification-icon">
                            <a href="activities.html">
                              <span className="rounded-circle">
                                <img
                                  src="assets/img/avatar/avatar-1.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="User"
                                />
                              </span>
                            </a>
                          </div>
                          <div className="employee-notification-content">
                            <h6>
                              <a href="activities.html">
                                Jessica has requested feedba
                              </a>
                            </h6>
                            <ul className="nav">
                              <li>10:30 AM</li>
                              <li>21 Apr 2024</li>
                            </ul>
                          </div>
                        </li>
                        <li className="employee-notification-grid">
                          <div className="employee-notification-icon">
                            <a href="activities.html">
                              <span className="badge-soft-warning rounded-circle">
                                DT
                              </span>
                            </a>
                          </div>
                          <div className="employee-notification-content">
                            <h6>
                              <a href="activities.html">
                                Gentle remainder about train
                              </a>
                            </h6>
                            <ul className="nav">
                              <li>09:00 AM</li>
                              <li>21 Apr 2024</li>
                            </ul>
                          </div>
                        </li>
                        <li className="employee-notification-grid">
                          <div className="employee-notification-icon">
                            <a href="activities.html">
                              <span className="badge-soft-danger rounded-circle">
                                AU
                              </span>
                            </a>
                          </div>
                          <div className="employee-notification-content">
                            <h6>
                              <a href="activities.html">
                                Our HR system will be down
                              </a>
                            </h6>
                            <ul className="nav">
                              <li>11:50 AM</li>
                              <li>21 Apr 2024</li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="schedule_tab">
                    <div className="employee-noti-content">
                      <ul className="employee-notification-list">
                        <li className="employee-notification-grid">
                          <div className="employee-notification-icon">
                            <a href="activities.html">
                              <span className="rounded-circle">
                                <img
                                  src="assets/img/avatar/avatar-2.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="User"
                                />
                              </span>
                            </a>
                          </div>
                          <div className="employee-notification-content">
                            <h6>
                              <a href="activities.html">
                                John has requested feedba
                              </a>
                            </h6>
                            <ul className="nav">
                              <li>10:30 AM</li>
                              <li>21 Apr 2024</li>
                            </ul>
                          </div>
                        </li>
                        <li className="employee-notification-grid">
                          <div className="employee-notification-icon">
                            <a href="activities.html">
                              <span className="badge-soft-danger rounded-circle">
                                HR
                              </span>
                            </a>
                          </div>
                          <div className="employee-notification-content">
                            <h6>
                              <a href="activities.html">
                                Your leave request has been
                              </a>
                            </h6>
                            <ul className="nav">
                              <li>02:10 PM</li>
                              <li>21 Apr 2024</li>
                            </ul>
                          </div>
                        </li>
                        <li className="employee-notification-grid">
                          <div className="employee-notification-icon">
                            <a href="activities.html">
                              <span className="badge-soft-info rounded-circle">
                                ER
                              </span>
                            </a>
                          </div>
                          <div className="employee-notification-content">
                            <h6>
                              <a href="activities.html">
                                You’re enrolled in upcom....
                              </a>
                            </h6>
                            <ul className="nav">
                              <li>12:40 PM</li>
                              <li>21 Apr 2024</li>
                            </ul>
                          </div>
                        </li>
                        <li className="employee-notification-grid">
                          <div className="employee-notification-icon">
                            <a href="activities.html">
                              <span className="badge-soft-warning rounded-circle">
                                SM
                              </span>
                            </a>
                          </div>
                          <div className="employee-notification-content">
                            <h6>
                              <a href="activities.html">
                                Your annual compliance trai
                              </a>
                            </h6>
                            <ul className="nav">
                              <li>11:00 AM</li>
                              <li>21 Apr 2024</li>
                            </ul>
                          </div>
                        </li>
                        <li className="employee-notification-grid">
                          <div className="employee-notification-icon">
                            <a href="activities.html">
                              <span className="badge-soft-warning rounded-circle">
                                DT
                              </span>
                            </a>
                          </div>
                          <div className="employee-notification-content">
                            <h6>
                              <a href="activities.html">
                                Gentle remainder about train
                              </a>
                            </h6>
                            <ul className="nav">
                              <li>09:00 AM</li>
                              <li>21 Apr 2024</li>
                            </ul>
                          </div>
                        </li>
                        <li className="employee-notification-grid">
                          <div className="employee-notification-icon">
                            <a href="activities.html">
                              <span className="badge-soft-danger rounded-circle">
                                AU
                              </span>
                            </a>
                          </div>
                          <div className="employee-notification-content">
                            <h6>
                              <a href="activities.html">
                                Our HR system will be down
                              </a>
                            </h6>
                            <ul className="nav">
                              <li>11:50 AM</li>
                              <li>21 Apr 2024</li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardTop;
