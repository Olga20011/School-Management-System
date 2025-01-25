import React, { useReducer } from "react";
import TextInput from "../Common/TextInput";

const StudentAdmissionForm = () => {
  //   const reducer = (state, action) => {
  //     switch (action.type) {
  //       case "tag":
  //         if (action.value.value === "add") {
  //           openSettings("Create New Tag", "NewTag");
  //           return { ...state };
  //         }
  //         return { ...state, [action.type]: action.value };
  //       case "payee":
  //         if (action.value.value === "add") {
  //           openSettings("Create New Vendor", "NewVendor");
  //           return { ...state };
  //         }
  //         return { ...state, [action.type]: action.value };
  //       case "RESET":
  //         return {
  //           ...state,
  //           amount: initialState.amount,
  //           description: initialState.description,
  //         };
  //       default:
  //         return { ...state, [action.type]: action.value };
  //     }
  //   };
  //   const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="card mb-3">
      <div className="card-body">
        {/* {currentNotify} */}
        <form method="post" onSubmit="">
          {/* <RenderExpenseAccount /> */}
          <div className="row mb-4">
            <div className="col-md-6">
              <h3 className="mb-3">1.Personal Information</h3>
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
              <h3 className="mb-3">2. Parental/Guardian Information</h3>
              <TextInput
                type="text"
                label="Primary Guardian Name"
                placeholder="Primary Guardian Name"
                leftIcon="fa fa-user"
                value=""
                required
              />

              <TextInput
                type="text"
                label="Relationship to Student"
                placeholder="Relationship to Student"
                leftIcon="fa fa-user"
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

              <TextInput
                type="text"
                label="Email Address"
                placeholder="Email Address"
                leftIcon="fa fa-envelope"
                value=""
                required
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <h3 className="mb-3">3. Educational Information</h3>
              <TextInput
                type="text"
                label="Grade/Class/Level"
                placeholder="Grade/Class/Level"
                leftIcon="fa fa-graduation-cap "
                value=""
                required
              />

              <TextInput
                type="text"
                label="Previous School Attended"
                placeholder="Previous School Attended"
                leftIcon="fa fa-home"
                value=""
                required
              />
            </div>

            <div className="col-md-6">
              <h3 className="mb-3">4. Extra- Curricular Interests</h3>
              <TextInput
                type="text"
                label="Sports"
                placeholder="Sports"
                leftIcon="fa fa-futbol"
                value=""
                required
              />

              <TextInput
                type="text"
                label="Clubs/Societies"
                placeholder="Clubs/Societies"
                leftIcon="fa fa-users"
                value=""
                required
              />
            </div>
          </div>

          <h3 className="mb-3">5. Medical Information</h3>
          <TextInput
            type="text"
            label="Known Allergies"
            placeholder="Known Allergies"
            leftIcon="fa fa-bug"
            value=""
            required
          />

          <TextInput
            type="text"
            label="Ongoing Medical Conditions"
            placeholder="Ongoing Medical Conditions"
            leftIcon="fa fa-thermometer-full"
            value=""
            required
          />

          <h3 className="mb-3">6. Consent Forms</h3>
          <TextInput
            className="form-check-label"
            type="text"
            label="I give consent for emergency medical treatment"
            leftIcon="fa fa-hashtag"
            value=""
            required
          />

          <TextInput
            className="form-check-label"
            type="text"
            label="I give consent to use my child's image for promotional purposes"
            leftIcon="fa fa-hashtag"
            value=""
            required
          />

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

export default StudentAdmissionForm;
