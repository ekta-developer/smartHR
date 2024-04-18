import React from "react";

const LeaveCard = () => {
  return (
    <>
      <div class="row">
        <div class="col-md-12">
          <div class="employee-alert-box">
            <div class="alert alert-outline-success alert-dismissible fade show">
              <div class="employee-alert-request">
                <i class="far fa-circle-question"></i>
                Your Leave Request on <span>“24th April 2024”</span> has been
                Approved!!!
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i class="fas fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveCard;
