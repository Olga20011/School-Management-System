import React from 'react';

const ColorSelector = ({ selectedColor, onColorSelect }) => {
    // Define color options with values and associated classes
    const colorOptions = [
        { value: "primary", className: "bg-primary" },
        { value: "secondary", className: "bg-secondary" },
        { value: "success", className: "bg-success" },
        { value: "info", className: "bg-info" },
        { value: "warning", className: "bg-warning" },
        { value: "danger", className: "bg-danger" },
    ];

    return (
        <div className="d-flex flex-wrap">
            {colorOptions.map((option, index) => (
                <button
                    key={index}
                    type="button"
                    className={`btn btn-sm btn-transition m-2 d-flex justify-content-center align-items-center ${
                        selectedColor === option.value ? "border border-3 border-dark" : ""
                    }`}
                    onClick={() => onColorSelect(option.value)}
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        boxShadow: selectedColor === option.value ? "0 0 8px 3px rgba(0, 0, 0, 0.5)" : "",
                    }}
                >
                    <div
                        className={`rounded-circle ${option.className}`}
                        style={{
                            width: "20px",
                            height: "20px",
                        }}
                    ></div>
                </button>
            ))}
        </div>
    );
};

export default ColorSelector;
