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

const admissionsData = [
  {
    id: 1,
    name: "John Doe",
    admissionDate: "2025-01-10",
    grade: "Grade 5",
    status: "Admitted",
  },
  {
    id: 2,
    name: "Jane Smith",
    admissionDate: "2025-01-08",
    grade: "Grade 6",
    status: "Pending",
  },
  {
    id: 3,
    name: "Michael Johnson",
    admissionDate: "2025-01-05",
    grade: "Grade 4",
    status: "Admitted",
  },
];

const RecentAdmissions = () => {
  return (
    <div className="card mb-3">
      <div className="card-header-tab card-header">
        <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i className="header-icon pe-7s-repeat mr-3 text-muted opacity-6"></i>
          Recent Admissions
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
              <th>Name</th>
              <th>Admission Date</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {admissionsData.map((admission) => (
              <tr key={admission.id}>
                <td>{admission.id}</td>
                <td>{admission.name}</td>
                <td>{admission.admissionDate}</td>
                <td>{admission.grade}</td>
                <td>
                  <span
                    className={`badge ${
                      admission.status === "Admitted"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {admission.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentAdmissions;
