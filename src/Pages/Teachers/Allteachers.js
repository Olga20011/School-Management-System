import React from "react";
import PageContainer from "../../components/PageContainer";
import MainContent from "../../components/MainContent";
import PageTitle from "../../components/Common/PageTitle/PageTitle";
import TeacherList from "../../components/Teacher/TeacherList";

const Allteachers = () => {
  return (
    <PageContainer>
      <MainContent>
        <PageTitle
          title="Teachers"
          description="Information about all teachers"
          iconClass="fa fa-pencil-square"
        />
        <TeacherList />
      </MainContent>
    </PageContainer>
  );
};

export default Allteachers;
