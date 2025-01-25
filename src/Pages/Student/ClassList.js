import React from "react";
import PageContainer from "../../components/PageContainer";
import MainContent from "../../components/MainContent";
import PageTitle from "../../components/Common/PageTitle/PageTitle";
import StudentList from "../../components/Student/StudentList";

const ClassList = () => {
  return (
    <PageContainer>
      <MainContent>
        <PageTitle title="Class Lists" description="" />
        <StudentList />
      </MainContent>
    </PageContainer>
  );
};

export default ClassList;
