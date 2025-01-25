import React, { useState, useEffect } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";

const StudentProfiles = () => {
  const mockData = [
    {
      id: 1,
      fullName: "Cathy Chu",
      username: "cchu01",
      profilePicture: "https://via.placeholder.com/100",
      email: "cchu@myschool.edu",
      studentId: "ST12345",
      gender: "female",
      dateOfBirth: "01/01/2000",
      naionality: "Sudanese",
      homeAddress: "Kampala",
      parentName: "John Robert",
      relationship: "Father",
      parentPhoneNumber: "0785678990",
      parentEmail: "johnrobert@gmail.com",
    },
    {
      id: 2,
      fullName: "John Doe",
      username: "jdoe02",
      profilePicture: "https://via.placeholder.com/100",
      email: "jdoe@myschool.edu",
      studentId: "ST54321",
      language: "English (United Kingdom)",
      privacySettings: "Profile visible to all students and administrators",
      gender: "Male",
      medicalNotes: "Asthmatic",
    },
  ];

  const [student, setStudent] = useState(null); // State to store the selected student

  // Simulate fetching data from the "database" (mock data)
  useEffect(() => {
    const fetchStudentData = () => {
      // Simulate fetching the first student in the array
      const selectedStudent = mockData[0];
      setStudent(selectedStudent);
    };

    fetchStudentData();
  }, []);

  if (!student) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="card shadow" style={{ width: "100%" }}>
      <div className="card-body">
        {/* Centered Profile Picture and Name */}
        <div className="text-center mb-4">
          <div className="position-relative d-inline-block">
            <img
              src=""
              alt="Profile"
              className=" img-thumbnail"
              style={{ width: "300px", height: "300px" }}
            />

            <button
              className="btn btn-light position-absolute top-0 start-100 translate-middle p-1 border rounded-circle"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <i className="bi bi-camera"></i>
            </button>
          </div>
          <div className="mt-3">
            <h5 className="mb-0">{student.fullName}</h5>
            <p className="text-muted mb-0">{student.username}</p>
          </div>
        </div>

        {/* Divider */}
        <hr />

        {/* Basic Information Section */}
        <div className="row">
          <div className=" col-6 mb-4">
            <h6 className="fw-bold mb-3">Personal Information</h6>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Full Name</td>
                  <td>
                    {student.fullName}
                    <button className="btn btn-light btn-sm ms-2">
                      <i className="bi bi-pencil"></i>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>Gender</td>
                  <td>{student.gender}</td>
                </tr>

                <tr>
                  <td>Date Of Birth</td>
                  <td>{student.dateOfBirth}</td>
                </tr>

                <tr>
                  <td>Nationality</td>
                  <td>{student.naionality}</td>
                </tr>

                <tr>
                  <td>Home Address</td>
                  <td>{student.homeAddress}</td>
                </tr>

                <tr>
                  <td>Student ID</td>
                  <td>
                    <a href="#" className="text-decoration-none">
                      {student.studentId}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>
                    <a href="#" className="text-decoration-none">
                      Change password
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* System Settings Section */}

          <div className="col-6 mb-4">
            <h6 className="fw-bold mb-3">Parent/Guardian Information</h6>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Parent/Guardian Name</td>
                  <td>English (United States)</td>
                </tr>
                <tr>
                  <td>Relationship to Student</td>
                  <td>{student.relationship}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>{student.parentPhoneNumber}</td>
                </tr>

                <tr>
                  <td>Email Address</td>
                  <td>{student.parentEmail}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="row">
          <div className="col-6 ">
            <h6 className="fw-bold mb-3">Educational Information</h6>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Gender</td>
                  <td>
                    <a href="#" className="text-decoration-none">
                      Add gender
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-6 ">
            <h6 className="fw-bold mb-3">Medical Information</h6>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Gender</td>
                  <td>
                    <a href="#" className="text-decoration-none">
                      Add gender
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfiles;
