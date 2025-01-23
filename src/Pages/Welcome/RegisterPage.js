import React, { useEffect, useState } from "react";
import "./LoginPage.css"; // Add your custom styles here
import { Link, Navigate, useNavigate } from "react-router-dom";
import Notification from "../../components/Common/Notification";
import ActivityLoader from "../../components/Common/ActivityLoader";
import ajaxUser from "../../util/remote/ajaxUser";
import Ad from "../../components/Welcome/Ad";

const RegisterPage = () => {

  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRpassword] = useState('');
  const [notify, setNotify] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
      if(!loading && notify){
          setTimeout(() => {
              setNotify(false);
          }, 5000);
      }
  }, [notify])


 const handleLogin = async(event) =>{
    
      event.preventDefault();
      if(password !== rpassword){
          setNotify(<Notification message="Sorry password do not match" type='danger'/>);
          return;
      }
      setLoading(true);
      const server_response = await ajaxUser.signup({
        "first_name":firstName,
        "surname":surname,
        "email":username,
        "phone_number":phoneNumber,
        "password":password
      });
      setLoading(false);
      setNotify(<div className='mb-3'><ActivityLoader /></div> )
      if(server_response.status === "OK"){
          setNotify(<Notification message={server_response.message} type='success'/>);
          setTimeout(() => {
            navigate('/login')
            window.location.reload();
          }, 3000);
        
      }else{
          setNotify(<Notification message={server_response.message} type='danger'/>);
      }
 }

 const isLoggedIn = localStorage.getItem('yexp@user');

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
            <h2>Create Account</h2>
            <p>Complete the details below to get started with YEXP</p>
            {notify}
            <form method="post" onSubmit={handleLogin}>
              
              <div className="form-group position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Surname"
                  value={surname}
                  onChange={(e)=>setSurname(e.target.value)}
                />
              </div>

              <div className="form-group position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                />
              </div>
              
              
              {/* Email Input */}
              <div className="form-group position-relative">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e)=>setUsername(e.target.value)}
                  value={username}
                />
              </div>

               {/* Phone Input */}
               <div className="form-group position-relative">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number (e.g., +256 7xx xxx xxx)"
                        value={phoneNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters (except +)
                          if (value.startsWith('0')) return; // Prevent input starting with 0
                          const formatted = value
                            .replace(/^(\d{1,3})(\d{0,3})/, '+$1 $2') // Country code (e.g., +256)
                            .replace(/(\d{3})(\d{0,3})$/, '$1 $2')    // First group of digits
                            .replace(/(\d{3}) (\d{3})(\d{0,3})$/, '$1 $2 $3'); // Add spaces between groups
                          setPhoneNumber(formatted.trim());
                        }}
                        maxLength={15}
                        required
                    />
              </div>

              {/* Password Input */}
              <div className="form-group position-relative">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
                {/* <span className="password-icon">👁️</span> */}
              </div>

              <div className="form-group position-relative">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-type Password"
                  value={rpassword}
                  onChange={(e)=>setRpassword(e.target.value)}
                />
                {/* <span className="password-icon">👁️</span> */}
              </div>

           
              {/* Login Button */}
              <button type="submit" className="btn btn-lg btn-primary" disabled={loading}>
                Create Account
              </button>
            </form>

           

            {/* Divider */}
            <div className="or-divider">
            </div>

            {/* Sign-Up Link */}
            <div className="signup-link">
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
