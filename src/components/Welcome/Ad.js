import React from "react";

const Ad = ({ title }) => {
  return (
    <div>
      {/* <img
            src="controller.png"
            alt="Gaming Icon"
            className="img-fluid"
            style={{ maxHeight: "200px" }}
            /> */}
      {!title && (
        <h2>
          Welcome to <span style={{ color: "#FFC107" }}>YEXP</span>
        </h2>
      )}
      {title && <h2>{title}</h2>}
      <ul className="feature-list text-left">
        <li>
          <i className="fas fa-chart-line feature-icon"></i>
          <div>
            <strong>Accounting</strong>
            <p>Keep track of your company's financial position.</p>
          </div>
        </li>
        <li>
          <i className="fas fa-dollar-sign feature-icon"></i>
          <div>
            <strong>Revenue Monitoring</strong>
            <p>Easily monitor your company's revenue streams.</p>
          </div>
        </li>
        <li>
          <i className="fas fa-file-invoice feature-icon"></i>
          <div>
            <strong>Expense Monitoring</strong>
            <p>Easily track all company expenses.</p>
          </div>
        </li>
        <li>
          <i className="fas fa-wallet feature-icon"></i>
          <div>
            <strong>Payables</strong>
            <p>Keep track of your payables effectively.</p>
          </div>
        </li>
        <li>
          <i className="fas fa-hand-holding-usd feature-icon"></i>
          <div>
            <strong>Receivables & Assets</strong>
            <p>Keep track of receivables and assets.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Ad;
