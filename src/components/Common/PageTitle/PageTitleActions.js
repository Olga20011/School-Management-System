import React from 'react';


const PageTitleActions = ({DropdownItems}) => {
    return (
        <div className="page-title-actions">
            <div className="d-inline-block dropdown">
                <button
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="btn-shadow dropdown-toggle btn btn-ligh"
                   
                >
                    <span className="btn-icon-wrapper pr-1">
                        <i className="fa-regular fa-square"></i>
                    </span>
                    {/* Options */}
                </button>

                <div role="menu" className="dropdown-menu dropdown-menu-right">

                    <ul className="nav flex-column">
                        {DropdownItems()}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PageTitleActions;
