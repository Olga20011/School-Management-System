import React from "react";
import PageContainer from "../../components/PageContainer";
import MainContent from "../../components/MainContent";
import PageTitle from "../../components/Common/PageTitle/PageTitle";
import StudentOverview from "../../components/PerformanceAnalysis/StudentOverview";
import PerformanceChart from "../../components/PerformanceAnalysis/PerformanceChart";

const PerfomanceAnaysis = () => {
  return (
    <PageContainer>
      <MainContent>
        <PageTitle
          title="Perfomance Analysis"
          description="Shows a detailed breakdown of achievements, testscores and grades."
        />
        <StudentOverview />
        <div className="row">
          <div className="col-6">
            <PerformanceChart />
          </div>
        </div>
      </MainContent>
    </PageContainer>
  );
};

export default PerfomanceAnaysis;
