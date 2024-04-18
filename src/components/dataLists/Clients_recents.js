import { React, useState } from "react";
import DataTable from "react-data-table-component";

const Clients_recents = () => {
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [status, setStatus] = useState(false);
  const selectStatus = () => {
    setStatus(!status);
  };
  const [columns, setColumns] = useState([
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "E-mail",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
      maxWidth: "5px",
    },
  ]);

  const [data, setData] = useState([
    {
      name: (
        <div>
          <a href="#" class="avatar">
            <img src="assets/img/profiles/avatar-19.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            Barry Cuda <span>CEO</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            class="__cf_email__"
            data-cfemail="c3b7b1a6b0b0a2b4a6bbafa6b183a6bba2aeb3afa6eda0acae"
          ></a>
          barrycuda@example.com
        </div>
      ),
      status: (
        <div class="dropdown action-label">
          <a
            class="btn btn-white btn-sm btn-rounded dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-regular fa-circle-dot text-success"></i> Active
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-success"></i> Active
            </a>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
          </div>
        </div>
      ),
      action: (
        <div class="text-end">
          <div class="dropdown dropdown-action">
            <a
              href="#"
              class="action-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons">more_vert</i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="fa-solid fa-pencil m-r-5"></i> Edit
              </a>
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="fa-regular fa-trash-can m-r-5"></i> Delete
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="#" class="avatar">
            <img src="assets/img/profiles/avatar-19.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            Tressa Wexlex <span>Manager</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            class="__cf_email__"
            data-cfemail="c3b7b1a6b0b0a2b4a6bbafa6b183a6bba2aeb3afa6eda0acae"
          ></a>
          tressawexler@example.com
        </div>
      ),
      status: (
        <div className="dropdown action-label">
          <div class="dropdown action-label">
            <a
              class="btn btn-white btn-sm btn-rounded dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="#">
                <i class="fa-regular fa-circle-dot text-success"></i> Active
              </a>
              <a class="dropdown-item" href="#">
                <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
              </a>
            </div>
          </div>
        </div>
      ),
      action: (
        <div className="dropdown dropdown-action">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="client-profile.html" class="avatar">
            <img src="assets/img/profiles/avatar-07.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            Ruby Bartlett <span>CEO</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="b5d7d4c7c7ccd6c0d1d4f5d0cdd4d8c5d9d09bd6dad8"
          ></a>
          rubybartlett@example.com
        </div>
      ),
      status: (
        <div class="dropdown action-label">
          <a
            class="btn btn-white btn-sm btn-rounded dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-success"></i> Active
            </a>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
          </div>
        </div>
      ),
      action: (
        <div className="dropdown dropdown-action">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="client-profile.html" class="avatar">
            <img src="assets/img/profiles/avatar-06.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            {" "}
            Misty Tison <span>CEO</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="b5d7d4c7c7ccd6c0d1d4f5d0cdd4d8c5d9d09bd6dad8"
          ></a>
          mistytison@example.com
        </div>
      ),
      status: (
        <div class="dropdown action-label">
          <a
            class="btn btn-white btn-sm btn-rounded dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-regular fa-circle-dot text-success"></i> Active
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-success"></i> Active
            </a>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
          </div>
        </div>
      ),
      action: (
        <div className="dropdown dropdown-action">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="client-profile.html" class="avatar">
            <img src="assets/img/profiles/avatar-14.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            {" "}
            Daniel Deacon <span>CEO</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="b5d7d4c7c7ccd6c0d1d4f5d0cdd4d8c5d9d09bd6dad8"
          ></a>
          danieldeacon@example.com
        </div>
      ),
      status: (
        <div class="dropdown action-label">
          <a
            class="btn btn-white btn-sm btn-rounded dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-success"></i> Active
            </a>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
          </div>
        </div>
      ),
      action: (
        <div className="dropdown dropdown-action">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="#" class="avatar">
            <img src="assets/img/profiles/avatar-19.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            Barry Cuda <span>CEO</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="b5d7d4c7c7ccd6c0d1d4f5d0cdd4d8c5d9d09bd6dad8"
          ></a>
          [email&#160;protected]
        </div>
      ),
      status: (
        <div className="dropdown action-label">
          <a
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-regular fa-circle-dot text-success"></i> Active
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">
              <i className="fa-regular fa-circle-dot text-success"></i> Active
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
          </div>
        </div>
      ),
      action: (
        <div className="text-end">
          <div class="dropdown dropdown-action">
            <a
              href="#"
              class="action-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons">more_vert</i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="fa-solid fa-pencil m-r-5"></i> Edit
              </a>
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="fa-regular fa-trash-can m-r-5"></i> Delete
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="#" class="avatar">
            <img src="assets/img/profiles/avatar-19.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            Barry Cuda02 <span>CEO</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            class="__cf_email__"
            data-cfemail="c3b7b1a6b0b0a2b4a6bbafa6b183a6bba2aeb3afa6eda0acae"
          ></a>
          barrycuda@example.com
        </div>
      ),
      status: (
        <div class="dropdown action-label">
          <a
            class="btn btn-white btn-sm btn-rounded dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-regular fa-circle-dot text-success"></i> Active
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-success"></i> Active
            </a>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
          </div>
        </div>
      ),
      action: (
        <div class="text-end">
          <div class="dropdown dropdown-action">
            <a
              href="#"
              class="action-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons">more_vert</i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="fa-solid fa-pencil m-r-5"></i> Edit
              </a>
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="fa-regular fa-trash-can m-r-5"></i> Delete
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="#" class="avatar">
            <img src="assets/img/profiles/avatar-19.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            Tressa Wexlex02 <span>Manager</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            class="__cf_email__"
            data-cfemail="c3b7b1a6b0b0a2b4a6bbafa6b183a6bba2aeb3afa6eda0acae"
          ></a>
          tressawexler@example.com
        </div>
      ),
      status: (
        <div className="dropdown action-label">
          <div class="dropdown action-label">
            <a
              class="btn btn-white btn-sm btn-rounded dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="#">
                <i class="fa-regular fa-circle-dot text-success"></i> Active
              </a>
              <a class="dropdown-item" href="#">
                <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
              </a>
            </div>
          </div>
        </div>
      ),
      action: (
        <div className="dropdown dropdown-action">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="client-profile.html" class="avatar">
            <img src="assets/img/profiles/avatar-07.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            Ruby Bartlett02 <span>CEO</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="b5d7d4c7c7ccd6c0d1d4f5d0cdd4d8c5d9d09bd6dad8"
          ></a>
          rubybartlett@example.com
        </div>
      ),
      status: (
        <div class="dropdown action-label">
          <a
            class="btn btn-white btn-sm btn-rounded dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-success"></i> Active
            </a>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
          </div>
        </div>
      ),
      action: (
        <div className="dropdown dropdown-action">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="client-profile.html" class="avatar">
            <img src="assets/img/profiles/avatar-06.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            {" "}
            Misty Tison02 <span>CEO</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="b5d7d4c7c7ccd6c0d1d4f5d0cdd4d8c5d9d09bd6dad8"
          ></a>
          mistytison@example.com
        </div>
      ),
      status: (
        <div class="dropdown action-label">
          <a
            class="btn btn-white btn-sm btn-rounded dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-regular fa-circle-dot text-success"></i> Active
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-success"></i> Active
            </a>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
          </div>
        </div>
      ),
      action: (
        <div className="dropdown dropdown-action">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="client-profile.html" class="avatar">
            <img src="assets/img/profiles/avatar-14.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            {" "}
            Daniel Deacon02 <span>CEO</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="b5d7d4c7c7ccd6c0d1d4f5d0cdd4d8c5d9d09bd6dad8"
          ></a>
          danieldeacon@example.com
        </div>
      ),
      status: (
        <div class="dropdown action-label">
          <a
            class="btn btn-white btn-sm btn-rounded dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-success"></i> Active
            </a>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
          </div>
        </div>
      ),
      action: (
        <div className="dropdown dropdown-action">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="#" class="avatar">
            <img src="assets/img/profiles/avatar-19.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            Barry Cuda03 <span>CEO</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="b5d7d4c7c7ccd6c0d1d4f5d0cdd4d8c5d9d09bd6dad8"
          ></a>
          [email&#160;protected]
        </div>
      ),
      status: (
        <div className="dropdown action-label">
          <a
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-regular fa-circle-dot text-success"></i> Active
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">
              <i className="fa-regular fa-circle-dot text-success"></i> Active
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
          </div>
        </div>
      ),
      action: (
        <div className="text-end">
          <div class="dropdown dropdown-action">
            <a
              href="#"
              class="action-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons">more_vert</i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="fa-solid fa-pencil m-r-5"></i> Edit
              </a>
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="fa-regular fa-trash-can m-r-5"></i> Delete
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="#" class="avatar">
            <img src="assets/img/profiles/avatar-19.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            Barry Cuda03 <span>CEO</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            class="__cf_email__"
            data-cfemail="c3b7b1a6b0b0a2b4a6bbafa6b183a6bba2aeb3afa6eda0acae"
          ></a>
          barrycuda@example.com
        </div>
      ),
      status: (
        <div class="dropdown action-label">
          <a
            class="btn btn-white btn-sm btn-rounded dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-regular fa-circle-dot text-success"></i> Active
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-success"></i> Active
            </a>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
          </div>
        </div>
      ),
      action: (
        <div class="text-end">
          <div class="dropdown dropdown-action">
            <a
              href="#"
              class="action-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons">more_vert</i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="fa-solid fa-pencil m-r-5"></i> Edit
              </a>
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="fa-regular fa-trash-can m-r-5"></i> Delete
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="#" class="avatar">
            <img src="assets/img/profiles/avatar-19.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            Tressa Wexlex03 <span>Manager</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            class="__cf_email__"
            data-cfemail="c3b7b1a6b0b0a2b4a6bbafa6b183a6bba2aeb3afa6eda0acae"
          ></a>
          tressawexler@example.com
        </div>
      ),
      status: (
        <div className="dropdown action-label">
          <div class="dropdown action-label">
            <a
              class="btn btn-white btn-sm btn-rounded dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="#">
                <i class="fa-regular fa-circle-dot text-success"></i> Active
              </a>
              <a class="dropdown-item" href="#">
                <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
              </a>
            </div>
          </div>
        </div>
      ),
      action: (
        <div className="dropdown dropdown-action">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="client-profile.html" class="avatar">
            <img src="assets/img/profiles/avatar-07.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            Ruby Bartlett03 <span>CEO</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="b5d7d4c7c7ccd6c0d1d4f5d0cdd4d8c5d9d09bd6dad8"
          ></a>
          rubybartlett@example.com
        </div>
      ),
      status: (
        <div class="dropdown action-label">
          <a
            class="btn btn-white btn-sm btn-rounded dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-success"></i> Active
            </a>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
          </div>
        </div>
      ),
      action: (
        <div className="dropdown dropdown-action">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="client-profile.html" class="avatar">
            <img src="assets/img/profiles/avatar-06.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            {" "}
            Misty Tison03 <span>CEO</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="b5d7d4c7c7ccd6c0d1d4f5d0cdd4d8c5d9d09bd6dad8"
          ></a>
          mistytison@example.com
        </div>
      ),
      status: (
        <div class="dropdown action-label">
          <a
            class="btn btn-white btn-sm btn-rounded dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-regular fa-circle-dot text-success"></i> Active
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-success"></i> Active
            </a>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
          </div>
        </div>
      ),
      action: (
        <div className="dropdown dropdown-action">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="client-profile.html" class="avatar">
            <img src="assets/img/profiles/avatar-14.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            {" "}
            Daniel Deacon03 <span>CEO</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="b5d7d4c7c7ccd6c0d1d4f5d0cdd4d8c5d9d09bd6dad8"
          ></a>
          danieldeacon@example.com
        </div>
      ),
      status: (
        <div class="dropdown action-label">
          <a
            class="btn btn-white btn-sm btn-rounded dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-success"></i> Active
            </a>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
          </div>
        </div>
      ),
      action: (
        <div className="dropdown dropdown-action">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a className="dropdown-item" href="javascript:void(0)">
              <i className="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div>
          <a href="#" class="avatar">
            <img src="assets/img/profiles/avatar-19.jpg" alt="User Image" />
          </a>
          <a href="client-profile.html">
            Barry Cuda03 <span>CEO</span>
          </a>
        </div>
      ),
      email: (
        <div>
          <a
            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="b5d7d4c7c7ccd6c0d1d4f5d0cdd4d8c5d9d09bd6dad8"
          ></a>
          [email&#160;protected]
        </div>
      ),
      status: (
        <div className="dropdown action-label">
          <a
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-regular fa-circle-dot text-success"></i> Active
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">
              <i className="fa-regular fa-circle-dot text-success"></i> Active
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa-regular fa-circle-dot text-danger"></i> Inactive
            </a>
          </div>
        </div>
      ),
      action: (
        <div className="text-end">
          <div class="dropdown dropdown-action">
            <a
              href="#"
              class="action-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons">more_vert</i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="fa-solid fa-pencil m-r-5"></i> Edit
              </a>
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="fa-regular fa-trash-can m-r-5"></i> Delete
              </a>
            </div>
          </div>
        </div>
      ),
    },
  ]);

  const [recent_col, setrecent_col] = useState([
    {
      name: "Project Name",
      selector: (row) => row.p_name,
      sortable: true,
      maxWidth: "400px",
    },
    {
      name: "Progress",
      selector: (row) => row.progress,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
      maxWidth: "5px",
      //cell: (row) => <div style={{ width: "0.5rem" }}>{row.action}</div>,
    },
  ]);

  const [recent_data, setRecentdata] = useState([
    {
      p_name: (
        <div>
          <h5>
            <a href="project-view.html">Office Management</a>
          </h5>
          <small class="block text-ellipsis">
            <span>1</span> <span class="text-muted">open tasks, </span>
            <span>9</span> <span class="text-muted">tasks completed</span>
          </small>
        </div>
      ),
      progress: (
        <div>
          <progress value={0.5} />
          {/* color= {#25628F"} */}
        </div>
      ),
      action: (
        <div class="dropdown dropdown-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      p_name: (
        <div>
          <h5>
            <a href="project-view.html">Project Management</a>
          </h5>
          <small class="block text-ellipsis">
            <span>2</span> <span class="text-muted">open tasks, </span>
            <span>5</span> <span class="text-muted">tasks completed</span>
          </small>
        </div>
      ),
      progress: (
        <div>
          <progress value={0.5}/>
          {/* color= {#25628F"} */}
        </div>
      ),
      action: (
        <div class="dropdown dropdown-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      p_name: (
        <div>
          <h5>
            <a href="project-view.html">Video Calling App</a>
          </h5>
          <small class="block text-ellipsis">
            <span>3</span> <span class="text-muted">open tasks, </span>
            <span>3</span> <span class="text-muted">tasks completed</span>
          </small>
        </div>
      ),
      progress: (
        <div>
          <progress value={0.5} />
          {/* color= {#25628F"} */}
        </div>
      ),
      action: (
        <div class="dropdown dropdown-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      p_name: (
        <div>
          <h5>
            <a href="project-view.html">Hospital Administration</a>
          </h5>
          <small class="block text-ellipsis">
            <span>12</span> <span class="text-muted">open tasks, </span>
            <span>4</span> <span class="text-muted">tasks completed</span>
          </small>
        </div>
      ),
      progress: (
        <div>
          {" "}
          <progress value={0.5}/>
          {/* color= {#25628F"} */}
        </div>
      ),
      action: (
        <div class="dropdown dropdown-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      p_name: (
        <div>
          <h5>
            <a href="project-view.html">Digital Marketplace</a>
          </h5>
          <small class="block text-ellipsis">
            <span>7</span> <span class="text-muted">open tasks, </span>
            <span>14</span> <span class="text-muted">tasks completed</span>
          </small>
        </div>
      ),
      progress: (
        <div>
          {" "}
          <progress value={0.5}/>
          {/* color= {#25628F"} */}
        </div>
      ),
      action: (
        <div class="dropdown dropdown-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      p_name: (
        <div>
          <h5>
            <a href="project-view.html">Office Management</a>
          </h5>
          <small class="block text-ellipsis">
            <span>1</span> <span class="text-muted">open tasks, </span>
            <span>9</span> <span class="text-muted">tasks completed</span>
          </small>
        </div>
      ),
      progress: (
        <div>
          <progress value={0.5} />
          {/* color= {#25628F"} */}
        </div>
      ),
      action: (
        <div class="dropdown dropdown-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      p_name: (
        <div>
          <h5>
            <a href="project-view.html">Project Management</a>
          </h5>
          <small class="block text-ellipsis">
            <span>2</span> <span class="text-muted">open tasks, </span>
            <span>5</span> <span class="text-muted">tasks completed</span>
          </small>
        </div>
      ),
      progress: (
        <div>
          <progress value={0.5}/>
          {/* color= {#25628F"} */}
        </div>
      ),
      action: (
        <div class="dropdown dropdown-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      p_name: (
        <div>
          <h5>
            <a href="project-view.html">Video Calling App</a>
          </h5>
          <small class="block text-ellipsis">
            <span>3</span> <span class="text-muted">open tasks, </span>
            <span>3</span> <span class="text-muted">tasks completed</span>
          </small>
        </div>
      ),
      progress: (
        <div>
          <progress value={0.5} />
          {/* color= {#25628F"} */}
        </div>
      ),
      action: (
        <div class="dropdown dropdown-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      p_name: (
        <div>
          <h5>
            <a href="project-view.html">Hospital Administration</a>
          </h5>
          <small class="block text-ellipsis">
            <span>12</span> <span class="text-muted">open tasks, </span>
            <span>4</span> <span class="text-muted">tasks completed</span>
          </small>
        </div>
      ),
      progress: (
        <div>
          {" "}
          <progress value={0.5}/>
          {/* color= {#25628F"} */}
        </div>
      ),
      action: (
        <div class="dropdown dropdown-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      p_name: (
        <div>
          <h5>
            <a href="project-view.html">Digital Marketplace</a>
          </h5>
          <small class="block text-ellipsis">
            <span>7</span> <span class="text-muted">open tasks, </span>
            <span>14</span> <span class="text-muted">tasks completed</span>
          </small>
        </div>
      ),
      progress: (
        <div>
          {" "}
          <progress value={0.5}/>
          {/* color= {#25628F"} */}
        </div>
      ),
      action: (
        <div class="dropdown dropdown-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      p_name: (
        <div>
          <h5>
            <a href="project-view.html">Office Management</a>
          </h5>
          <small class="block text-ellipsis">
            <span>1</span> <span class="text-muted">open tasks, </span>
            <span>9</span> <span class="text-muted">tasks completed</span>
          </small>
        </div>
      ),
      progress: (
        <div>
          <progress value={0.5} />
          {/* color= {#25628F"} */}
        </div>
      ),
      action: (
        <div class="dropdown dropdown-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      p_name: (
        <div>
          <h5>
            <a href="project-view.html">Project Management</a>
          </h5>
          <small class="block text-ellipsis">
            <span>2</span> <span class="text-muted">open tasks, </span>
            <span>5</span> <span class="text-muted">tasks completed</span>
          </small>
        </div>
      ),
      progress: (
        <div>
          <progress value={0.5}/>
          {/* color= {#25628F"} */}
        </div>
      ),
      action: (
        <div class="dropdown dropdown-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      p_name: (
        <div>
          <h5>
            <a href="project-view.html">Video Calling App</a>
          </h5>
          <small class="block text-ellipsis">
            <span>3</span> <span class="text-muted">open tasks, </span>
            <span>3</span> <span class="text-muted">tasks completed</span>
          </small>
        </div>
      ),
      progress: (
        <div>
          <progress value={0.5} />
          {/* color= {#25628F"} */}
        </div>
      ),
      action: (
        <div class="dropdown dropdown-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      p_name: (
        <div>
          <h5>
            <a href="project-view.html">Hospital Administration</a>
          </h5>
          <small class="block text-ellipsis">
            <span>12</span> <span class="text-muted">open tasks, </span>
            <span>4</span> <span class="text-muted">tasks completed</span>
          </small>
        </div>
      ),
      progress: (
        <div>
          {" "}
          <progress value={0.5}/>
          {/* color= {#25628F"} */}
        </div>
      ),
      action: (
        <div class="dropdown dropdown-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
    {
      p_name: (
        <div>
          <h5>
            <a href="project-view.html">Digital Marketplace</a>
          </h5>
          <small class="block text-ellipsis">
            <span>7</span> <span class="text-muted">open tasks, </span>
            <span>14</span> <span class="text-muted">tasks completed</span>
          </small>
        </div>
      ),
      progress: (
        <div>
          {" "}
          <progress value={0.5}/>
          {/* color= {#25628F"} */}
        </div>
      ),
      action: (
        <div class="dropdown dropdown-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">more_vert</i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="javascript:void(0)">
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
        </div>
      ),
    },
  ]);
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h3 className="card-title mb-0">Clients</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <DataTable
                    className="table custom-table mb-0"
                    columns={columns}
                    data={data}
                    striped={true}
                    responsive={true}
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle}
                    subHeader={true}
                    persistTableHead
                    onColumnOrderChange
                    paginationRowsPerPageOptions={[6,12,18]}
                    paginationPerPage={6}
                  />
                </div>
              </div>
              <div className="card-footer">
                <a href="clients.html">View all clients</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h3 className="card-title mb-0">Recent Projects</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <DataTable
                    className="table custom-table mb-2"
                    columns={recent_col}
                    data={recent_data}
                    striped={true}
                    responsive={true}
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle}
                    subHeader={true}
                    persistTableHead
                    onColumnOrderChange
                    paginationRowsPerPageOptions={[5,10,15]}
                    paginationPerPage={5}
                  />
                </div>
              </div>
              <div className="card-footer">
                <a href="projects.html">View all projects</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients_recents;
