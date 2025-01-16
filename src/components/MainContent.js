import React from 'react';

const MainContent = (props) => {
  return (
    <div className="app-main__inner">
        {props.children}
    </div>
  );
};

export default MainContent;
