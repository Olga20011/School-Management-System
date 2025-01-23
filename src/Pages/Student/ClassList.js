import React from "react";
import PageContainer from "../../components/PageContainer";
import MainContent from "../../components/MainContent";
import PageTitle from "../../components/Common/PageTitle/PageTitle";
import StudentList from "../../components/Student/StudentList";

const ClassList = () => {
  return (
    <PageContainer>
      <MainContent>
        <PageTitle
          title="Class Lists"
          description="Organised list of all students according to their classes"
          iconClass="fa fa-clipboard"
        />
        <StudentList />
      </MainContent>
    </PageContainer>
  );
};

export default ClassList;
