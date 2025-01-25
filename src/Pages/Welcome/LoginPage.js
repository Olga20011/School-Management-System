import React, { useEffect, useState } from "react";
import "./LoginPage.css"; // Add your custom styles here
import { Link, Navigate, useNavigate } from "react-router-dom";
import Notification from "../../components/Common/Notification";
import ActivityLoader from "../../components/Common/ActivityLoader";
import ajaxUser from "../../util/remote/ajaxUser";
import Ad from "../../components/Welcome/Ad";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotify] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && notify) {
      setTimeout(() => {
        setNotify(false);
      }, 5000);
    }
  }, [notify]);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (username.length < 1 || password.length < 1) {
      setNotify(<Notification message="Complete all fields" type="danger" />);
      return;
    }
    setLoading(true);
    const server_response = await ajaxUser.loginUser(username, password);
    setLoading(false);
    setNotify(
      <div className="mb-3">
        <ActivityLoader />
      </div>
    );
    if (server_response.status === "OK") {
      setNotify(
        <Notification message={server_response.message} type="success" />
      );
      localStorage.setItem("yexp@user", server_response.details.token);
      navigate("/dashboard");
      window.location.reload();
    } else {
      setNotify(
        <Notification message={server_response.message} type="danger" />
      );
    }
  };

  const isLoggedIn = localStorage.getItem("yexp@user");

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="container-fluid login-container">
      <div className="row w-100">
        {/* Left Panel */}
        <div className="col-md-6 left-panel d-flex flex-column justify-content-center align-items-center">
          <Ad />
        </div>

        {/* Right Panel */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="login-form">
            <h2>Login to your account</h2>
            <p>Sign in to start your session</p>
            {notify}
            <form method="post" onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="form-group position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email or Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-group position-relative">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                {/* <span className="password-icon">👁️</span> */}
              </div>

              {/* Forgot Password Link */}
              <div className="form-group d-flex justify-content-between">
                <Link to="#" className="text-primary">
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button type="submit" className="btn btn-lg btn-primary">
                Log In
              </button>
            </form>

            {/* Divider */}
            <div className="or-divider"></div>

            {/* Sign-Up Link */}
            <div className="signup-link">
              Have no account?{" "}
              <Link to="/signup" className="text-primary">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
