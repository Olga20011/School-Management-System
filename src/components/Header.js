import React from 'react';


const Header = ({ toggleSidebar, isSidebarOpen }) => {
    return (
        <div className="app-header header-shadow">
            <div className="app-header__logo">
                <div className="logo-src"></div>
                <div className="header__pane ml-auto">
                    <button
                        type="button"
                        className={`hamburger close-sidebar-btn hamburger--elastic ${!isSidebarOpen ? 'is-active' : ''}`}
                        data-class="closed-sidebar"
                        onClick={toggleSidebar}
                    >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
            <div className="app-header__menu">
                <button className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                    <span className="btn-icon-wrapper">
                        <i className="fa fa-ellipsis-v fa-w-6"></i>
                    </span>
                </button>
            </div>
            <div className="app-header__content">
                <div className="app-header-left">
                    {/* <SearchBox /> */}
                    <ul className="header-megamenu nav">
                        {/* <ReportsLink />
                        <AccountsChartLink />
                        <EntriesLink /> */}
                    </ul>
                </div>
                <div className="app-header-right">
                    {/* <UserProfile /> */}
                </div>
            </div>
        </div>
    );
};

export default Header;
