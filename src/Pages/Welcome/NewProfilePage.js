import React, { useEffect, useState } from "react";
import "./LoginPage.css"; // Add your custom styles here
import { Link, Navigate, useNavigate } from "react-router-dom";
import Notification from "../../components/Common/Notification";
import ActivityLoader from "../../components/Common/ActivityLoader";
import ajaxUser from "../../util/remote/ajaxUser";
import Ad from "../../components/Welcome/Ad";
import functions from "../../util/functions";

const NewProfilePage = () => {

  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [notify, setNotify] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const tokenInfo = functions.readUser();

  useEffect(()=>{
      if(!loading && notify){
          setTimeout(() => {
              setNotify(false);
          }, 5000);
      }
  }, [notify])


  if (!tokenInfo) {
    return <Navigate to="/login" />;
}


 const handleLogin = async(event) =>{
    
      event.preventDefault();
    
      setLoading(true);
      const server_response = await ajaxUser.createProfile({
        "title":companyName,
        "address":address,
        "phone_number":phoneNumber,
        "email":email
      });
      setLoading(false);
      setNotify(<div className='mb-3'><ActivityLoader /></div> )
      if(server_response.status === "OK"){
          setNotify(<Notification message={server_response.message} type='success'/>);
          setTimeout(() => {
            navigate('/switch')
            window.location.reload();
          }, 3000);
        
      }else{
          setNotify(<Notification message={server_response.message} type='danger'/>);
      }
 }


  return (
    <div className="container-fluid login-container">
      <div className="row w-100">
        {/* Left Panel */}
        <div className="col-md-6 left-panel d-flex flex-column justify-content-center align-items-center">
            <Ad title="Get started, enjoy simplified accounting!" />
        </div>

        {/* Right Panel */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="login-form">
            <h2>Create Your Company Profile</h2>
            <p>Complete the details below to get started with your profile</p>
            {notify}
            <form method="post" onSubmit={handleLogin}>
              
              <div className="form-group position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e)=>setCompanyName(e.target.value)}
                />
              </div>

              <div className="form-group position-relative">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Company Email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              
        

               {/* Phone Input */}
               <div className="form-group position-relative">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Company Phone Number (e.g., +256 7xx xxx xxx)"
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
                  type="text"
                  className="form-control"
                  placeholder="Company Address"
                  onChange={(e)=>setAddress(e.target.value)}
                />
              </div>

           
              {/* Login Button */}
              <button type="submit" className="btn btn-lg btn-primary" disabled={loading}>
               Generate Profile
              </button>
            </form>

           

            {/* Divider */}
            <div className="or-divider">
            </div>

            {/* Sign-Up Link */}
            <div className="signup-link">
              Already connected to an existing profile?{" "}
              <Link to="/switch" className="text-primary">
                Switch to Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProfilePage;
