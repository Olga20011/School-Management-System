import React from 'react';

/**
 * 
 * iconClass="lnr-book" label="Refresh Invoices" badge="5" badgeClass="badge-danger"
 * 
 */
const ActionDropdownItem = ({ iconClass, label, badge, badgeClass, disabled, onClick }) => {
    return (
        <li className="nav-item">
        <span className={`nav-link`} onClick={onClick}>
            <i className={`nav-link-icon ${iconClass}`}></i>
            <span> {label}</span>
            {badge && <div className={`ml-auto badge badge-pill ${badgeClass}`}>{badge}</div>}
        </span>
    </li>
    );
};

export default ActionDropdownItem;