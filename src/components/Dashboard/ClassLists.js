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

const classData = [
  {
    id: 1,
    class: "Senior.1",
    classTeacher: "Mrs. Lubega Grace",
    numberOfStudents: "120",
  },
  {
    id: 2,
    class: "Senior.2",
    classTeacher: "Mr. Wambazu John",
    numberOfStudents: "300",
  },
  {
    id: 3,
    class: "Senior 3",
    classTeacher: "Mr. Sserwada Joseph",
    numberOfStudents: "200",
  },
];

const ClassLists = () => {
  return (
    <div className="card mb-3">
      <div className="card-header-tab card-header">
        <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i className="header-icon pe-7s-repeat mr-3 text-muted opacity-6"></i>
          Class Lists
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
              <th>Class </th>
              <th>Class Teacher</th>
              <th>Total number of students</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classData.map((clas) => (
              <tr key={clas.id}>
                <td>{clas.id}</td>
                <td>{clas.class}</td>
                <td>{clas.classTeacher}</td>
                <td>{clas.numberOfStudents}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => alert(`Viewing ${clas.class} details`)}
                  >
                    View class list
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassLists;
