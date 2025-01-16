import React from 'react';

const CallOut = ({title, description, type}) => {
    return (
        <div className={`card-shadow-info border mb-3 card card-body border-${type || 'info'}`}>
        <h5 className="card-title">{title}</h5>
            {description}
        </div>
    );
};

export default CallOut;