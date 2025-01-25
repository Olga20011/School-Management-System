import React from 'react';

const SettingListItem = ({ itemName, buttonTitle, buttonAction, iconName, active, onSelect, itemDescription }) => {
    return (
        <li className={`list-group-item config-item ${active ? 'mm-active' :''}`} onClick={onSelect}>
            <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                    <div className="widget-content-left mr-3">
                        <div className="icon-wrapper border-light rounded m-0">
                            <div className="icon-wrapper-bg bg-light"></div>
                            <i className={`${iconName} icon-gradient bg-happy-itmeo`}></i>
                        </div>
                    </div>
                    <div className="widget-content-left">
                        <div className="widget-heading">{itemName}</div>
                        <p>{itemDescription}</p>
                    </div>
                    <div className="widget-content-right widget-content-actions">
                        {buttonTitle && (
                            <button 
                                className="btn-pill btn btn-outline-primary" 
                                onClick={buttonAction}
                            >
                                {buttonTitle}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default SettingListItem;
