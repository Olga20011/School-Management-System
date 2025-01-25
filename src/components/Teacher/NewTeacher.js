import React from "react";
import TextInput from "../Common/TextInput";

const NewTeacher = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        {/* {currentNotify} */}
        <form method="post" onSubmit="">
          {/* <RenderExpenseAccount /> */}
          <div className="position-relative d-inline-block">
            <img
              src=""
              alt="Profile"
              className="img-thumbnail"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <h3 className="mb-3">1. Personal Information</h3>
              <TextInput
                type="text"
                label="Full Name"
                placeholder="Full Name"
                leftIcon="fa fa-credit-card"
                value=""
                // onChange={(e) =>
                //   dispatch({ type: "amount", value: e.target.value })
                // }
                required
              />

              <TextInput
                label="Gender"
                placeholder="Gender"
                leftIcon="fa fa-transgender"
                value=""
                required
              />

              <TextInput
                type="date"
                label="Date of Birth"
                placeholder="Date of Birth"
                leftIcon="fa fa-calendar"
                value=""
                required
              />

              <TextInput
                type="text"
                label="Nationality"
                placeholder="Nationality"
                leftIcon="fa fa-globe"
                value=""
                required
              />

              <TextInput
                type="text"
                label="Home Address"
                placeholder="Home Address"
                leftIcon="fa fa-home"
                value=""
                required
              />

              <TextInput
                type="email"
                label="Email"
                placeholder="Email"
                leftIcon="fa fa-envelope"
                value=""
                required
              />

              <TextInput
                type="tel"
                label="Phone Number"
                placeholder="Phone Number"
                leftIcon="fa fa-phone"
                value=""
                required
              />
            </div>

            <div className="col-md-6">
              <h3 className="mb-3">2. Proffessional Information</h3>
              <TextInput
                type="text"
                label="Role/Title"
                placeholder="Role/Title"
                leftIcon="fa fa-user"
                value=""
                required
              />

              <TextInput
                type="text"
                label="Subjects Taught"
                placeholder="Subjects taught"
                leftIcon="fa fa-user"
                value=""
                required
              />

              <TextInput
                type="tel"
                label="Classes Assigned"
                placeholder="Classes assigned"
                leftIcon="fa fa-phone"
                value=""
                required
              />

              <TextInput
                type="text"
                label="Department"
                placeholder="Department"
                leftIcon="fa fa-envelope"
                value=""
                required
              />

              <TextInput
                type="text"
                label="Qualification"
                placeholder="Qualifications"
                leftIcon="fa fa-envelope"
                value=""
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <h3 className="mb-3">3. Employment Information</h3>
              <TextInput
                type="date"
                label="Date of Hire"
                placeholder="Date of Hire"
                leftIcon="fa fa-credit-card"
                value=""
                // onChange={(e) =>
                //   dispatch({ type: "amount", value: e.target.value })
                // }
                required
              />

              <TextInput
                label="Employment Type"
                placeholder="Employment Type"
                leftIcon="fa fa-transgender"
                value=""
                required
              />

              <TextInput
                label="Salary Information"
                placeholder="Salary Information"
                leftIcon="fa fa-transgender"
                value=""
                required
              />

              <TextInput
                label="Work Schedule"
                placeholder="Work Schedule"
                leftIcon="fa fa-transgender"
                value=""
                required
              />
            </div>

            <div className="col-6">
              <h3 className="mb-3">3. Additional Information</h3>
              <TextInput
                type="text"
                label="Skills and Interests"
                placeholder="Skills and INterests"
                leftIcon="fa fa-credit-card"
                value=""
                // onChange={(e) =>
                //   dispatch({ type: "amount", value: e.target.value })
                // }
                required
              />

              <TextInput
                label="Clubs or Committees"
                placeholder="Clubs or Committees"
                leftIcon="fa fa-transgender"
                value=""
                required
              />

              <TextInput
                label="Documents"
                placeholder="National ID, Passport"
                leftIcon="fa fa-transgender"
                value=""
                required
              />

              <TextInput
                placeholder="Education Certificates"
                leftIcon="fa fa-transgender"
                value=""
                required
              />
            </div>
          </div>

          <div className="row">&nbsp;</div>
          <div className="form-group row">
            <div className="col-sm-3"></div>
            <div className="col-sm-9">
              <button
                type="submit"
                className="btn btn-lg btn-primary"
                style={{ width: "50%", marginLeft: "50px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTeacher;
