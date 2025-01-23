import React from 'react';
/**
 * 
 *  message - text to display
 *  type - info, danger, success
 * @returns 
 */
const Notification = ({message, type, closable=true}) => {
    return (
        <div className={`alert alert-${type || 'light'} alert-dismissible fade show`} role="alert">
        {closable && <button type="button" className="close" aria-label="Close" data-dismiss="alert">
        <span aria-hidden="true">×</span>
        </button>}
        {message}
        </div>
    );
};

export default Notification;