import React from 'react'

const ProjectCard = () => {
  return (
    <>
          {/*on going project*/}
          <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-sm-8">
                    <div className="statistic-header">
                      <h4>On Going Projects</h4>
                    </div>
                  </div>
                  <div className="col-sm-4 text-sm-end">
                    <div className="owl-nav project-nav nav-control">
                      <button
                        type="button"
                        role="presentation"
                        className="owl-prev"
                      >
                        <i className="fa-solid fa-chevron-left"></i>
                      </button>
                      <button
                        type="button"
                        role="presentation"
                        className="owl-next"
                      >
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="project-slider owl-carousel owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-1306px, 0px, 0px)",
                        transition: "all 0s ease 0s",
                        width: "4791px",
                      }}
                    >
                      <div
                        className="owl-item cloned"
                        style={{ width: "415.5px", marginRight: "20px" }}
                      >
                        <div className="project-grid">
                          <div className="project-top">
                            <h6>
                              <a href="project-view.html">
                                Deadline : 12 Apr 2024
                              </a>
                            </h6>
                            <h5>
                              <a href="project-view.html">
                                Hospital Administration
                              </a>
                            </h5>
                            <p>
                              Creating an online platform that serves as a
                              central hub for hospital admin, staff, patients.
                            </p>
                          </div>
                          <div className="project-middle">
                            <ul className="nav">
                              <li>
                                <div className="project-tasks">
                                  <h4>40</h4>
                                  <p>Total Tasks</p>
                                </div>
                              </li>
                              <li>
                                <div className="project-tasks">
                                  <h4>02</h4>
                                  <p>Total Completed</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="project-bottom">
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Project Leader :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="John Smith"
                                    data-bs-original-title="John Smith"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-4.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Members :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Richard Miles"
                                    data-bs-original-title="Richard Miles"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-6.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Jeffery Lalor"
                                    data-bs-original-title="Jeffery Lalor"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-13.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Lesley Grauer"
                                    data-bs-original-title="Lesley Grauer"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-18.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Tarah Shropshire"
                                    data-bs-original-title="Tarah Shropshire"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-23.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Loren Gatlin"
                                    data-bs-original-title="Loren Gatlin"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-1.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="more-team-members"
                                  >
                                    +12
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "415.5px", marginRight: "20px" }}
                      >
                        <div className="project-grid">
                          <div className="project-top">
                            <h6>
                              <a href="project-view.html">
                                Deadline : 25 Apr 2024
                              </a>
                            </h6>
                            <h5>
                              <a href="project-view.html">Digital Marketpace</a>
                            </h5>
                            <p>
                              Creating an online platform that connects sellers
                              with buyers, facilitating the exchange of goods,
                            </p>
                          </div>
                          <div className="project-middle">
                            <ul className="nav">
                              <li>
                                <div className="project-tasks">
                                  <h4>50</h4>
                                  <p>Total Tasks</p>
                                </div>
                              </li>
                              <li>
                                <div className="project-tasks">
                                  <h4>10</h4>
                                  <p>Total Completed</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="project-bottom">
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Project Leader :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Jeffery Lalor"
                                    data-bs-original-title="Jeffery Lalor"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-1.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Members :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Loren Gatlin"
                                    data-bs-original-title="Loren Gatlin"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-26.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Lesley Grauer"
                                    data-bs-original-title="Lesley Grauer"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-18.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Richard Miles"
                                    data-bs-original-title="Richard Miles"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-6.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Jeffery Lalor"
                                    data-bs-original-title="Jeffery Lalor"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-13.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Tarah Shropshire"
                                    data-bs-original-title="Tarah Shropshire"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-8.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="more-team-members"
                                  >
                                    +13
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "415.5px", marginRight: "20px" }}
                      >
                        <div className="project-grid">
                          <div className="project-top">
                            <h6>
                              <a href="project-view.html">
                                Deadline : 15 Feb 2024
                              </a>
                            </h6>
                            <h5>
                              <a href="project-view.html">Video Calling App</a>
                            </h5>
                            <p>
                              Design and developing a software application that
                              enables users to make video calls over the
                              internet.
                            </p>
                          </div>
                          <div className="project-middle">
                            <ul className="nav">
                              <li>
                                <div className="project-tasks">
                                  <h4>30</h4>
                                  <p>Total Tasks</p>
                                </div>
                              </li>
                              <li>
                                <div className="project-tasks">
                                  <h4>12</h4>
                                  <p>Total Completed</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="project-bottom">
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Project Leader :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Catherine Manseau"
                                    data-bs-original-title="Catherine Manseau"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-18.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Members :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Richard Miles"
                                    data-bs-original-title="Richard Miles"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-21.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Jeffery Lalor"
                                    data-bs-original-title="Jeffery Lalor"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-16.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Lesley Grauer"
                                    data-bs-original-title="Lesley Grauer"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-20.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Loren Gatlin"
                                    data-bs-original-title="Loren Gatlin"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-1.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Tarah Shropshire"
                                    data-bs-original-title="Tarah Shropshire"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-23.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="more-team-members"
                                  >
                                    +10
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "415.5px", marginRight: "20px" }}
                      >
                        <div className="project-grid">
                          <div className="project-top">
                            <h6>
                              <a href="project-view.html">
                                Deadline : 10 Feb 2024
                              </a>
                            </h6>
                            <h5>
                              <a href="project-view.html">Office Management</a>
                            </h5>
                            <p>
                              Creating an online platform that enables various
                              administrative tasks within an organization
                            </p>
                          </div>
                          <div className="project-middle">
                            <ul className="nav">
                              <li>
                                <div className="project-tasks">
                                  <h4>20</h4>
                                  <p>Total Tasks</p>
                                </div>
                              </li>
                              <li>
                                <div className="project-tasks">
                                  <h4>15</h4>
                                  <p>Total Completed</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="project-bottom">
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Project Leader :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Jeffery Lalor"
                                    data-bs-original-title="Jeffery Lalor"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-19.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Members :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Lesley Grauer"
                                    data-bs-original-title="Lesley Grauer"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-20.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Richard Miles"
                                    data-bs-original-title="Richard Miles"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-21.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Loren Gatlin"
                                    data-bs-original-title="Loren Gatlin"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-1.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Jeffery Lalor"
                                    data-bs-original-title="Jeffery Lalor"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-16.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Tarah Shropshire"
                                    data-bs-original-title="Tarah Shropshire"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-23.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="more-team-members"
                                  >
                                    +16
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "415.5px", marginRight: "20px" }}
                      >
                        <div className="project-grid">
                          <div className="project-top">
                            <h6>
                              <a href="project-view.html">
                                Deadline : 15 Feb 2024
                              </a>
                            </h6>
                            <h5>
                              <a href="project-view.html">Video Calling App</a>
                            </h5>
                            <p>
                              Design and developing a software application that
                              enables users to make video calls over the
                              internet.
                            </p>
                          </div>
                          <div className="project-middle">
                            <ul className="nav">
                              <li>
                                <div className="project-tasks">
                                  <h4>30</h4>
                                  <p>Total Tasks</p>
                                </div>
                              </li>
                              <li>
                                <div className="project-tasks">
                                  <h4>12</h4>
                                  <p>Total Completed</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="project-bottom">
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Project Leader :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Catherine Manseau"
                                    data-bs-original-title="Catherine Manseau"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-18.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Members :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Richard Miles"
                                    data-bs-original-title="Richard Miles"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-21.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Jeffery Lalor"
                                    data-bs-original-title="Jeffery Lalor"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-16.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Lesley Grauer"
                                    data-bs-original-title="Lesley Grauer"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-20.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Loren Gatlin"
                                    data-bs-original-title="Loren Gatlin"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-1.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Tarah Shropshire"
                                    data-bs-original-title="Tarah Shropshire"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-23.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="more-team-members"
                                  >
                                    +10
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "415.5px", marginRight: "20px" }}
                      >
                        <div className="project-grid">
                          <div className="project-top">
                            <h6>
                              <a href="project-view.html">
                                Deadline : 12 Apr 2024
                              </a>
                            </h6>
                            <h5>
                              <a href="project-view.html">
                                Hospital Administration
                              </a>
                            </h5>
                            <p>
                              Creating an online platform that serves as a
                              central hub for hospital admin, staff, patients.
                            </p>
                          </div>
                          <div className="project-middle">
                            <ul className="nav">
                              <li>
                                <div className="project-tasks">
                                  <h4>40</h4>
                                  <p>Total Tasks</p>
                                </div>
                              </li>
                              <li>
                                <div className="project-tasks">
                                  <h4>02</h4>
                                  <p>Total Completed</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="project-bottom">
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Project Leader :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="John Smith"
                                    data-bs-original-title="John Smith"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-4.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Members :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Richard Miles"
                                    data-bs-original-title="Richard Miles"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-6.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Jeffery Lalor"
                                    data-bs-original-title="Jeffery Lalor"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-13.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Lesley Grauer"
                                    data-bs-original-title="Lesley Grauer"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-18.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Tarah Shropshire"
                                    data-bs-original-title="Tarah Shropshire"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-23.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Loren Gatlin"
                                    data-bs-original-title="Loren Gatlin"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-1.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="more-team-members"
                                  >
                                    +12
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "415.5px", marginRight: "20px" }}
                      >
                        <div className="project-grid">
                          <div className="project-top">
                            <h6>
                              <a href="project-view.html">
                                Deadline : 25 Apr 2024
                              </a>
                            </h6>
                            <h5>
                              <a href="project-view.html">Digital Marketpace</a>
                            </h5>
                            <p>
                              Creating an online platform that connects sellers
                              with buyers, facilitating the exchange of goods,
                            </p>
                          </div>
                          <div className="project-middle">
                            <ul className="nav">
                              <li>
                                <div className="project-tasks">
                                  <h4>50</h4>
                                  <p>Total Tasks</p>
                                </div>
                              </li>
                              <li>
                                <div className="project-tasks">
                                  <h4>10</h4>
                                  <p>Total Completed</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="project-bottom">
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Project Leader :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Jeffery Lalor"
                                    data-bs-original-title="Jeffery Lalor"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-1.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Members :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Loren Gatlin"
                                    data-bs-original-title="Loren Gatlin"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-26.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Lesley Grauer"
                                    data-bs-original-title="Lesley Grauer"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-18.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Richard Miles"
                                    data-bs-original-title="Richard Miles"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-6.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Jeffery Lalor"
                                    data-bs-original-title="Jeffery Lalor"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-13.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Tarah Shropshire"
                                    data-bs-original-title="Tarah Shropshire"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-8.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="more-team-members"
                                  >
                                    +13
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "415.5px", marginRight: "20px" }}
                      >
                        <div className="project-grid">
                          <div className="project-top">
                            <h6>
                              <a href="project-view.html">
                                Deadline : 15 Feb 2024
                              </a>
                            </h6>
                            <h5>
                              <a href="project-view.html">Video Calling App</a>
                            </h5>
                            <p>
                              Design and developing a software application that
                              enables users to make video calls over the
                              internet.
                            </p>
                          </div>
                          <div className="project-middle">
                            <ul className="nav">
                              <li>
                                <div className="project-tasks">
                                  <h4>30</h4>
                                  <p>Total Tasks</p>
                                </div>
                              </li>
                              <li>
                                <div className="project-tasks">
                                  <h4>12</h4>
                                  <p>Total Completed</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="project-bottom">
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Project Leader :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Catherine Manseau"
                                    data-bs-original-title="Catherine Manseau"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-18.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Members :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Richard Miles"
                                    data-bs-original-title="Richard Miles"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-21.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Jeffery Lalor"
                                    data-bs-original-title="Jeffery Lalor"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-16.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Lesley Grauer"
                                    data-bs-original-title="Lesley Grauer"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-20.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Loren Gatlin"
                                    data-bs-original-title="Loren Gatlin"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-1.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Tarah Shropshire"
                                    data-bs-original-title="Tarah Shropshire"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-23.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="more-team-members"
                                  >
                                    +10
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "415.5px", marginRight: "20px" }}
                      >
                        <div className="project-grid">
                          <div className="project-top">
                            <h6>
                              <a href="project-view.html">
                                Deadline : 10 Feb 2024
                              </a>
                            </h6>
                            <h5>
                              <a href="project-view.html">Office Management</a>
                            </h5>
                            <p>
                              Creating an online platform that enables various
                              administrative tasks within an organization
                            </p>
                          </div>
                          <div className="project-middle">
                            <ul className="nav">
                              <li>
                                <div className="project-tasks">
                                  <h4>20</h4>
                                  <p>Total Tasks</p>
                                </div>
                              </li>
                              <li>
                                <div className="project-tasks">
                                  <h4>15</h4>
                                  <p>Total Completed</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="project-bottom">
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Project Leader :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Jeffery Lalor"
                                    data-bs-original-title="Jeffery Lalor"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-19.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Members :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Lesley Grauer"
                                    data-bs-original-title="Lesley Grauer"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-20.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Richard Miles"
                                    data-bs-original-title="Richard Miles"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-21.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Loren Gatlin"
                                    data-bs-original-title="Loren Gatlin"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-1.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Jeffery Lalor"
                                    data-bs-original-title="Jeffery Lalor"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-16.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Tarah Shropshire"
                                    data-bs-original-title="Tarah Shropshire"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-23.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="more-team-members"
                                  >
                                    +16
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "415.5px", marginRight: "20px" }}
                      >
                        <div className="project-grid">
                          <div className="project-top">
                            <h6>
                              <a href="project-view.html">
                                Deadline : 15 Feb 2024
                              </a>
                            </h6>
                            <h5>
                              <a href="project-view.html">Video Calling App</a>
                            </h5>
                            <p>
                              Design and developing a software application that
                              enables users to make video calls over the
                              internet.
                            </p>
                          </div>
                          <div className="project-middle">
                            <ul className="nav">
                              <li>
                                <div className="project-tasks">
                                  <h4>30</h4>
                                  <p>Total Tasks</p>
                                </div>
                              </li>
                              <li>
                                <div className="project-tasks">
                                  <h4>12</h4>
                                  <p>Total Completed</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="project-bottom">
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Project Leader :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Catherine Manseau"
                                    data-bs-original-title="Catherine Manseau"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-18.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Members :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Richard Miles"
                                    data-bs-original-title="Richard Miles"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-21.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Jeffery Lalor"
                                    data-bs-original-title="Jeffery Lalor"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-16.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Lesley Grauer"
                                    data-bs-original-title="Lesley Grauer"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-20.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Loren Gatlin"
                                    data-bs-original-title="Loren Gatlin"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-1.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Tarah Shropshire"
                                    data-bs-original-title="Tarah Shropshire"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-23.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="more-team-members"
                                  >
                                    +10
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "415.5px", marginRight: "20px" }}
                      >
                        <div className="project-grid">
                          <div className="project-top">
                            <h6>
                              <a href="project-view.html">
                                Deadline : 12 Apr 2024
                              </a>
                            </h6>
                            <h5>
                              <a href="project-view.html">
                                Hospital Administration
                              </a>
                            </h5>
                            <p>
                              Creating an online platform that serves as a
                              central hub for hospital admin, staff, patients.
                            </p>
                          </div>
                          <div className="project-middle">
                            <ul className="nav">
                              <li>
                                <div className="project-tasks">
                                  <h4>40</h4>
                                  <p>Total Tasks</p>
                                </div>
                              </li>
                              <li>
                                <div className="project-tasks">
                                  <h4>02</h4>
                                  <p>Total Completed</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="project-bottom">
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Project Leader :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="John Smith"
                                    data-bs-original-title="John Smith"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-4.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="project-leader">
                              <ul className="nav">
                                <li>Members :</li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Richard Miles"
                                    data-bs-original-title="Richard Miles"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-6.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Jeffery Lalor"
                                    data-bs-original-title="Jeffery Lalor"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-13.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Lesley Grauer"
                                    data-bs-original-title="Lesley Grauer"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-18.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Tarah Shropshire"
                                    data-bs-original-title="Tarah Shropshire"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-23.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="project-view.html"
                                    data-bs-toggle="tooltip"
                                    aria-label="Loren Gatlin"
                                    data-bs-original-title="Loren Gatlin"
                                  >
                                    <img
                                      src="assets/img/avatar/avatar-1.jpg"
                                      alt="User"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="more-team-members"
                                  >
                                    +12
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="owl-dots disabled"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ProjectCard;