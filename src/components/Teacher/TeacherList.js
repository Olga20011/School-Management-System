import React from "react";

const DropdownMenu = () => (
  <div className="btn-actions-pane-right actions-icon-btn">
    <div className="btn-group dropdown">
      <button
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        className="btn-icon btn-icon-only btn btn-link"
      >
        <i className="pe-7s-menu btn-icon-wrapper"></i>
      </button>
      <div className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link dropdown-menu">
        <h6 className="dropdown-header">Header</h6>
        <button className="dropdown-item">
          <i className="dropdown-icon lnr-inbox"></i> Menus
        </button>
        <button className="dropdown-item">
          <i className="dropdown-icon lnr-file-empty"></i> Settings
        </button>
        <button className="dropdown-item">
          <i className="dropdown-icon lnr-book"></i> Actions
        </button>
        <div className="dropdown-divider"></div>
        <div className="p-3 text-right">
          <button className="mr-2 btn-shadow btn-sm btn btn-link">
            View Details
          </button>
          <button className="mr-2 btn-shadow btn-sm btn btn-primary">
            Action
          </button>
        </div>
      </div>
    </div>
  </div>
);

const TeacherData = [
  {
    id: 1,
    photo: "",
    name: "",
    gender: "",
    contact: "",
    email: "",
    role: "",
    subjects: "",
    classAssigned: "",
    department: "",
    qualification: " ",
  },
  {
    id: 2,
    photo: "",
    name: "",
    gender: "",
    contact: "",
    email: "",
    role: "",
    subjects: "",
    classAssigned: "",
    department: "",
    qualification: "",
  },
  {
    id: 3,
    photo: "",
    name: "",
    gender: "",
    contact: "",
    email: "",
    subjects: "",
    classAssigned: "",
    department: "",
    qualification: "",
  },
];

const TeacherList = () => {
  return (
    <div className="card mb-3">
      <div className="card-header-tab card-header">
        <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i className="header-icon pe-7s-repeat mr-3 text-muted opacity-6"></i>
          Teacher Lists
        </div>
        <DropdownMenu />
      </div>
      <div
        className="card-body mh-300 overflow-auto"
        style={{ maxHeight: "300px" }}
      >
        <table className="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>IDNo</th>
              <th>Photo</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Role/Title</th>
              <th>Subjects Taught</th>
              <th>Classes Assigned</th>
              <th>Departments</th>
              <th>Qualification</th>
            </tr>
          </thead>
          <tbody>
            {TeacherData.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.photo}</td>
                <td>{teacher.name}</td>
                <td>{teacher.gender}</td>
                <td>{teacher.contact}</td>
                <td>{teacher.email}</td>
                <td>{teacher.role}</td>
                <td>{teacher.subjects}</td>
                <td>{teacher.classAssigned}</td>
                <td>{teacher.department}</td>
                <td>{teacher.qualification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherList;
