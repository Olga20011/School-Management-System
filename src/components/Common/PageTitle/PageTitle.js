import React, { useEffect } from "react";
import PageTitleActions from "./PageTitleActions";
import { useConfig } from "../../../DataStore/ConfigContext";

const PageTitle = ({
  title,
  description,
  showsCompany,
  iconClass,
  PageActions,
  sticky,
  Pagination,
}) => {
  const { company, currentPeriod, getCompanyProfile, getCurrentPeriod } =
    useConfig();

  useEffect(() => {
    if (showsCompany) {
      getCompanyProfile();
      getCurrentPeriod();
    }
  }, [showsCompany]);

  const mockCompany = {
    client_name: "Naalya SS Namugongo",
  };

  const mockCurrentPeriod = {
    opening_date: { short_date: "01-Jan-2025" },
    closing_date: { short_date: "31-03-2025" },
  };

  return (
    <div className={`${sticky ? "sticky-page-title" : ""}`}>
      <div className="app-page-title">
        <div className="page-title-wrapper d-flex align-items-center justify-content-between">
          {/* Left Section */}
          <div className="page-title-heading">
            {iconClass && (
              <div className="page-title-icon">
                <i className={`${iconClass} icon-gradient bg-mean-fruit`}></i>
              </div>
            )}
            <div>
              {title}
              <div className="page-title-subheading">{description}</div>
            </div>
          </div>

          {/* Right Section */}
          <div className="page-title-actions d-flex align-items-center">
            {/* Pagination */}
            {Pagination && (
              <div className="pagination-wrapper mr-3">{Pagination}</div>
            )}
            {/* Page Actions */}
            {PageActions && <PageTitleActions DropdownItems={PageActions} />}
          </div>

          {/* Optional: Company Info */}
          {showsCompany && (
            <div className="ml-auto d-none d-md-flex flex-column text-left">
              <div className="company-name font-weight-normal">
                <i className="fa fa-university text-primary" /> &nbsp;
                {company ? company.client_name : "mockCompany.client_name"}
              </div>
              <div className="financial-year text-muted">
                <i className="fa fa-calendar text-success" /> &nbsp;FY:{" "}
                <span className="text-primary">
                  {currentPeriod
                    ? `${currentPeriod.opening_date.short_date} - ${currentPeriod.closing_date.short_date}`
                    : `${mockCurrentPeriod.opening_date.short_date}- ${mockCurrentPeriod.closing_date.short_date}`}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
