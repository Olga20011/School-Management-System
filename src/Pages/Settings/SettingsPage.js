import React, { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";
import MainContent from "../../components/MainContent";
import PageTitle from "../../components/Common/PageTitle/PageTitle";
import UserRoles from "../../components/Config/Role/UserRoles";
import { Link } from "react-router-dom";
import ConfigHome from "../../components/Config/ConfigHome";
import { useConfig } from "../../DataStore/ConfigContext";
import navItems from "../../components/Config/configItems";
import { useTheme } from "../../DataStore/ThemeContext";
import SystemUsers from "../../components/Config/User/SystemUsers";
import AlertDeleteUser from "../../components/Config/User/AlertDeleteUser";

const SettingsPage = () => {
  const { activeMenu, dispatch } = useConfig();
  const [activeComponent, setActiveComponent] = useState(<ConfigHome />);
  const { currentNotify } = useTheme();

  useEffect(() => {
    setActiveComponent(renderActiveComponent(activeMenu));
  }, [activeMenu]);

  const renderActiveComponent = (menuId) => {
    const componentMapping = {
      1: <UserRoles />,
      2: <SystemUsers />,
      //   7: <SchoolFeesConfig />,
    };
    return componentMapping[menuId] || <ConfigHome />;
  };

  const handleMenuClick = (id) => {
    dispatch({ type: "activeMenu", payload: id });
  };

  return (
    <>
      <PageContainer>
        <MainContent>
          <PageTitle
            title="Settings Management"
            description="Configure your system settings and preferences"
            iconClass="fa fa-cog"
          />
          {currentNotify}
          <div className="row">
            {/* Left Navigation Menu */}
            <div className="col-md-3">
              <div className="card">
                <div className="card-body p-0">
                  <nav className="nav flex-column settings-nav">
                    {navItems.map((item) => (
                      <Link
                        key={item.id}
                        to={item.href}
                        className={`nav-link ${
                          item.id === activeMenu ? "active" : ""
                        }`}
                        onClick={() => handleMenuClick(item.id)}
                      >
                        <i className={`fa ${item.icon} me-2`}></i> {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Main Settings Form */}
            <div className="col-md-9">{activeComponent}</div>
          </div>
        </MainContent>
      </PageContainer>
      <AlertDeleteUser />
    </>
  );
};

export default SettingsPage;
