import React from "react";
import PageContainer from "../../components/PageContainer";
import MainContent from "../../components/MainContent";
import PageTitle from "../../components/Common/PageTitle/PageTitle";
import StudentProfiles from "../../components/Student/StudentProfiles";

const StudentProfile = () => {
  return (
    <PageContainer>
      <MainContent>
        <PageTitle
          title="Student Profile"
          description="Displays Student Details"
        />

        <StudentProfiles />
      </MainContent>
    </PageContainer>
  );
};

export default StudentProfile;
