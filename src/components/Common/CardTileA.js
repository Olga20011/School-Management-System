import React from "react";

const CardTileA = ({
  title,
  value,
  cardIcon,
  cardIconClass,
  valueClassName = "",
  smallText,
  smallTextClass = "text-success",
  preText,
  borderColorClass,
}) => {
  return (
    <div
      className={`widget-chart widget-chart2 text-left mb-3 card-btm-border card-shadow-primary border border-${borderColorClass} card`}
    >
      <div className="widget-chat-wrapper-outer">
        <div className="widget-chart-content">
          {/* Title */}
          <h6
            className="widget-subheading"
            style={{ textTransform: "uppercase" }}
          >
            {title}
          </h6>

          {/* Value and Additional Information */}
          <div className="widget-chart-flex">
            <div className="widget-numbers mb-0 w-100">
              <div className="widget-chart-flex">
                {/* Main Value Section */}
                <div className={`fsize-4 ${valueClassName}`}>
                  {/* Optional Icon */}
                  {cardIcon && (
                    <span className={`${cardIconClass} pr-2`}>
                      <i className={cardIcon}></i>
                    </span>
                  )}

                  {/* Value Text */}
                  <span style={{ fontSize: "24px" }}>{value}</span>

                  {/* PreText */}
                  {preText && (
                    <small
                      className="opacity-5"
                      style={{ fontSize: "12px", textTransform: "uppercase" }}
                    >
                      {preText}
                    </small>
                  )}
                </div>

                {/* Small Text Section */}
                <div className="ml-auto">
                  <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                    <span className={`${smallTextClass} pl-2`}>
                      {smallText}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTileA;
