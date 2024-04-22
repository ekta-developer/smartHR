import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
     e.preventDefault();
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("http://192.168.23.6:9000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
//check status of api==>
      if (data.status === "Failed") {
        setErrorMessage(data.message);
        setLoading(false);
        alert("Authentication Error! Invalid user");
        return;
      }

      if (data.status === "Success") {
        navigate("/dashboard");
        localStorage.setItem("userData", JSON.stringify(data));
        setLoading(false);
      }
    } catch (err) {
      setErrorMessage(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="account-page">
        <div className="main-wrapper">
          <div className="account-content">
            <a href="job-list.html" className="btn btn-primary apply-btn">
              Apply Job
            </a>
            <div className="container">
              <div className="account-logo">
                <a href="admin-dashboard.html">
                  <img
                    src="assets/img/logo2.png"
                    alt="Dreamguy's Technologies"
                  />
                </a>
              </div>

              <div className="account-box">
                <div className="account-wrapper">
                  <h3 className="account-title">Login</h3>
                  <p className="account-subtitle">Access to our dashboard</p>

                  <form  onSubmit={handleSubmit}>
                    <div className="input-block mb-4">
                      <label className="col-form-label">Email Address</label>
                      <input
                        className="form-control"
                        type="text"
                        id="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-block mb-4">
                      <div className="row align-items-center">
                        <div className="col">
                          <label className="col-form-label">Password</label>
                        </div>
                        <div className="col-auto">
                          <a className="text-muted" href="forgot-password.html">
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="position-relative">
                        <input
                          className="form-control"
                          type="password"
                          id="password"
                          onChange={handleChange}
                        />
                        <span
                          className="fa-solid fa-eye-slash"
                          id="toggle-password"
                        ></span>
                      </div>
                    </div>
                    <div className="input-block mb-4 text-center">
                      <button
                        className="btn btn-primary account-btn"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                    <div className="account-footer">
                      <p>
                        Don't have an account yet?{" "}
                        <a href="register.html">Register</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
