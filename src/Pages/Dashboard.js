import React from "react";
import PageContainer from "../components/PageContainer";
import MainContent from "../components/MainContent";
import SchoolOverview from "../components/Dashboard/SchoolOverview";
import StudentsChart from "../components/Dashboard/StudentChart";
import PageTitle from "../components/Common/PageTitle/PageTitle";
import UpcomingEvents from "../components/Dashboard/UpcomingEvents";
import RecentAdmissions from "../components/Dashboard/RecentAdmissions";
import StudentPopulation from "../components/Dashboard/StudentPopulation";
import ClassLists from "../components/Dashboard/ClassLists";

const Dashboard = () => {
  return (
    <PageContainer>
      <MainContent>
        <PageTitle
          title="Dashboard"
          description="Overview of school details"
          iconClass="fa fa-home"
        />
        <SchoolOverview />
        <div className="row">
          <div className="col-6">
            <StudentPopulation />
          </div>
          <div className="col-3">
            <StudentsChart />
          </div>

          <div className="col-3">
            <UpcomingEvents />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <RecentAdmissions />
          </div>

          <div className="col-6">
            <ClassLists />
          </div>
        </div>
      </MainContent>
    </PageContainer>
  );
};

export default Dashboard;
