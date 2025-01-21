import React from "react";
import PageContainer from "../../components/PageContainer";
import MainContent from "../../components/MainContent";
import PageTitle from "../../components/Common/PageTitle/PageTitle";
import StudentAdmissionForm from "../../components/Student/StudentAdmissionForm";

const StudentAdmission = () => {
  return (
    <PageContainer>
      <MainContent>
        <PageTitle
          title="Student Enrollment"
          description="Encapsulates information for new Students"
          iconClass="fa fa-user"
        />

        <StudentAdmissionForm />
      </MainContent>
    </PageContainer>
  );
};

export default StudentAdmission;
