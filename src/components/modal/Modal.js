import React from 'react'

const Modal=({ closeModal})=> {
  return (
    <div>
        
        <div className="modal" >
          <div
            id="add_department"
            className=""
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Department</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Department Name <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="submit-section">
                      <button className="btn btn-primary submit-btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Modal;