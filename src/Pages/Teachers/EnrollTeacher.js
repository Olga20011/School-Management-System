import React from "react";
import PageContainer from "../../components/PageContainer";
import MainContent from "../../components/MainContent";
import PageTitle from "../../components/Common/PageTitle/PageTitle";
import NewTeacher from "../../components/Teacher/NewTeacher";

const EnrollTeacher = () => {
  return (
    <PageContainer>
      <MainContent>
        <PageTitle
          title="Enroll Teacher"
          description="Add a new teacher to the system"
          iconClass="fa fa-pencil-square"
        />
        <NewTeacher />
      </MainContent>
    </PageContainer>
  );
};

export default EnrollTeacher;
