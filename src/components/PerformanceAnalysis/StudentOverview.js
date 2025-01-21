import React from "react";
import CardTileA from "../Common/CardTileA";

const StudentOverview = () => {
  const cardData = [
    {
      title: "O'LEVEL",
      value: "5,000", // Total number of students
      cardIcon: "fa fa-users",
      cardIconClass: "text-success",
      borderColorClass: "success",
      // smallText: "5% increase this term", // Growth indicator
      smallTextClass: "text-success",
    },
    {
      title: "A'LEVEL STUDENTS",
      value: "1500", // Total number of teachers
      cardIcon: "fa fa-user",
      cardIconClass: "text-danger",
      borderColorClass: "danger",
      // smallText: "2 resigned last month", // Additional detail
      smallTextClass: "text-muted",
    },
    {
      title: "DAY SCHOLARS",
      value: "2350", // Total number of classes
      cardIcon: "fa fa-graduation-cap",
      cardIconClass: "text-primary",
      borderColorClass: "primary",
      // smallText: "Capacity: 40 students each", // Detail about capacity
      smallTextClass: "text-muted",
    },
    {
      title: "BOARDING SCHOLARS",
      value: "1065", // Total number of subjects offered
      cardIcon: "fa fa-clock",
      cardIconClass: "text-warning",
      borderColorClass: "warning",
      // smallText: "Includes 10 electives", // Detail about subjects
      smallTextClass: "text-warning",
    },
  ];

  return (
    <div className="row">
      {cardData.map((data, index) => (
        <div key={index} className="col-md-6 col-lg-3">
          <CardTileA {...data} />
        </div>
      ))}
    </div>
  );
};

export default StudentOverview;
