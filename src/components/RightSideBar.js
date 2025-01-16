import React, { memo } from "react";

const Container = ({ settingsOpen, closeSettings, settingTitle, children }) => (
  <div className={`ui-theme-settings ${settingsOpen ? "settings-open" : ""}`}>
    <div className="theme-settings__inner right-sidebar">
      <div className="scrollbar-container ps ps--active-y">
        <div className="theme-settings__options-wrapper">
          <h3 className="themeoptions-heading">
            <div>{settingTitle}</div>
            <button
              type="button"
              className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-class"
              onClick={closeSettings}
            >
              Close
            </button>
          </h3>
          <div
            className="p-3 overflow-auto"
            style={{ maxHeight: "95vh", height: "95vh" }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const componentMapping = {
  // NewTag: NewTag,
  // NewVendor: NewVendor,
  // NewAccount: NewAccount,
  // AccountSearchResult: ({ settingData }) => <AccountResult account={settingData} />,
  // TransactionSearchResult: ({ settingData }) => <TransactionResult transaction={settingData} />,
  // VendorSearchResult: ({ settingData }) => <VendorResult vendor={settingData} />,
  // ConfigNewUserRole: NewRole,
  // ConfigEditUserRole: ({ settingData }) => <UpdateRole role={settingData} />,
  // ConfigNewUser: NewUserInvite,
  // ConfigNewBank: NewBank,
  // ConfigSchoolFees: ({ settingData }) => <ConfigFeesValue field={settingData} />,
};

const RightSideBar = memo(
  ({ settingsOpen, closeSettings, settingTitle, settingCode, settingData }) => {
    const SelectedComponent = componentMapping[settingCode];

    return SelectedComponent ? (
      <Container
        settingsOpen={settingsOpen}
        closeSettings={closeSettings}
        settingTitle={settingTitle}
      >
        {typeof SelectedComponent === "function" ? (
          <SelectedComponent settingData={settingData} />
        ) : (
          <SelectedComponent />
        )}
      </Container>
    ) : null;
  }
);

export default RightSideBar;
