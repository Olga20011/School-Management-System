import React from 'react';

const SettingContainer = ({ children, title, icon, Menu }) => {
    return (
        <div className="mb-3 card">
            <div className="card-header-tab card-header">
                <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i className={`header-icon ${icon} icon-gradient bg-happy-itmeo`}></i>
                    {title}
                </div>
                {Menu && <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                    <div className="btn-group dropdown">
                        <button 
                            type="button" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false" 
                            className="btn-icon btn-icon-only btn btn-link"
                        >
                            <i className="pe-7s-menu btn-icon-wrapper"></i>
                        </button>
                        <div 
                            tabIndex="-1" 
                            role="menu" 
                            aria-hidden="true" 
                            className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link dropdown-menu"
                        >
                            <h6 tabIndex="-1" className="dropdown-header">Options</h6>
                            <Menu />
                        </div>
                    </div>
                </div>}
            </div>
            <div className="p-0 card-body">
                {children}
            </div>
        </div>
    );
};

export default SettingContainer;
