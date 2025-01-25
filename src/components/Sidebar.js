import React from "react";
import { Link, useLocation } from "react-router-dom";

// Component for individual sidebar items
const SidebarItem = ({ path, iconClass, label }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <li>
      <Link to={path} className={isActive ? "mm-active" : ""}>
        <i
          className={`metismenu-icon icon-gradient bg-happy-itmeo ${iconClass}`}
        ></i>
        {label}
      </Link>
    </li>
  );
};

// Component for dropdown sidebar items
const SidebarDropdown = ({ iconClass, label, children, basePath }) => {
  const location = useLocation();
  const isDropdownOpen = location.pathname.startsWith(basePath);

  return (
    <li>
      <a href="#">
        <i
          className={`metismenu-icon icon-gradient bg-happy-itmeo ${iconClass}`}
        ></i>
        {label}
        <i className="right pe-7s-angle-down"></i>
      </a>
      <ul className={`${isDropdownOpen ? "mm-collapse mm-show" : ""}`}>
        {children}
      </ul>
    </li>
  );
};

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`app-sidebar sidebar-shadow ${
        isSidebarOpen ? "open" : "closed"
      }`}
    >
      <div className="app-header__logo">
        <div className="logo-src"></div>
        <button
          className="hamburger close-sidebar-btn hamburger--elastic"
          onClick={toggleSidebar}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">System Menu</li>

            {/* Dashboard */}
            <SidebarItem
              path="/dashboard"
              iconClass="fa fa-home"
              label="Dashboard"
            />

            {/* Students*/}
            <SidebarDropdown
              iconClass="fa fa-users"
              label="Students"
              basePath="/students"
            >
              <SidebarItem
                path="/school-admission"
                iconClass="pe-7s-less nav-icon"
                label="Enrollment/Admission"
              />

              <SidebarItem
                path="/school-profile"
                iconClass="pe-7s-less nav-icon"
                label="Student Profiles"
              />

              <SidebarItem
                path="/performance-analysis"
                iconClass="pe-7s-less nav-icon"
                label="Performance Analysis"
              />
            </SidebarDropdown>

            {/* Classes */}
            <SidebarDropdown
              iconClass="fa fa-building"
              label="Academic Management"
              basePath="/academic-management"
            >
              <SidebarItem
                path="/income-new"
                iconClass="pe-7s-less nav-icon"
                label="Curriculum"
              />

              <SidebarItem
                path="/income-new"
                iconClass="pe-7s-less nav-icon"
                label="Subject Combinations"
              />

              <SidebarItem
                path="/time-table"
                iconClass="pe-7s-less nav-icon"
                label="Time Table"
              />
              <SidebarItem
                path="/exams"
                iconClass="pe-7s-less nav-icon"
                label="Exams"
              />
            </SidebarDropdown>

            {/* Exams */}
            <SidebarDropdown
              iconClass="fa fa-pencil-square"
              label="Teachers"
              basePath="/teachers"
            >
              <SidebarItem
                path="/all-teachers"
                iconClass="pe-7s-less nav-icon"
                label="All Teachers"
              />
              <SidebarItem
                path="/enroll-teacher"
                iconClass="pe-7s-less nav-icon"
                label="Enroll Teacher"
              />

              <SidebarItem
                path="/teacher-profile"
                iconClass="pe-7s-less nav-icon"
                label="Teacher's Profile"
              />
            </SidebarDropdown>

            {/* Administration */}
            <SidebarDropdown
              iconClass="fa fa-briefcase"
              label="Administration"
              basePath="/administration"
            ></SidebarDropdown>

            {/* Communication */}
            <SidebarDropdown
              iconClass="fa fa-phone"
              label="Event/Activity Management"
              basePath="/communication"
            >
              <SidebarItem
                path="/liability-new"
                iconClass="pe-7s-less nav-icon"
                label="Events Organisation"
              />

              <SidebarItem
                path="/liability-new"
                iconClass="pe-7s-less nav-icon"
                label="School Calender"
              />
            </SidebarDropdown>

            {/* Library */}
            <SidebarDropdown
              iconClass="fa fa-book"
              label="Library"
              basePath="/library"
            >
              <SidebarItem
                path="/book-inventory"
                iconClass="pe-7s-less nav-icon"
                label="Book Inventory"
              />

              <SidebarItem
                path="/issuing-return"
                iconClass="pe-7s-less nav-icon"
                label="Book Issuing and Return"
              />
            </SidebarDropdown>

            {/* Reports */}
            <SidebarDropdown
              iconClass="fa fa-bar-chart"
              label="Reports"
              basePath="/reports"
            >
              <SidebarItem
                path="/issuing-return"
                iconClass="pe-7s-less nav-icon"
                label="Class Reports"
              />

              <SidebarItem
                path="/issuing-return"
                iconClass="pe-7s-less nav-icon"
                label="Exam Reports"
              />

              <SidebarItem
                path="/issuing-return"
                iconClass="pe-7s-less nav-icon"
                label="LIbrary Reports"
              />

              <SidebarItem
                path="/issuing-return"
                iconClass="pe-7s-less nav-icon"
                label="Staff Reports"
              />
            </SidebarDropdown>

            {/* Configurations */}
            <SidebarItem
              path="/settings"
              iconClass="fa fa-cog"
              label="Settings"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
