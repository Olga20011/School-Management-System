import React from 'react';

const BsModal = ({ show, onClose, title, children, footer }) => {
    return (
        <>
            {/* Modal */}
            {show && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{title || 'Modal Title'}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={onClose}
                                ></button>
                            </div>
                            <div className="modal-body">{children}</div>
                            {footer && (
                                <div className="modal-footer">
                                    {footer}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Backdrop */}
            {show && <div className="modal-backdrop fade show"></div>}
        </>
    );
};

export default BsModal;
