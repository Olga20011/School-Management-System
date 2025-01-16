import React, {useState } from 'react';
import useExternalScript from '../util/CustomHooks/useExternalScript';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Common/Footer';
import RightSideBar from './RightSideBar';
import { useTheme } from '../DataStore/ThemeContext';


const PageContainer = (props) => {

  useExternalScript('/assets/scripts/main.d810cf0ae7f39f28f336.js');
  const { settingsOpen, closeSettings, settingTitle, settingCode, settingData } = useTheme();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

    
  return (
    <div className={`app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar ${isSidebarOpen ? 'open-sidebar' : 'closed-sidebar'} closed-sidebar-mobile`}>
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
      <div className="app-main">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <div className="app-main__outer">
          {props.children}
          <Footer />
        </div>
      </div>
 
      <RightSideBar
        settingsOpen={settingsOpen}
        closeSettings={closeSettings}
        settingTitle={settingTitle}
        settingCode={settingCode}
        settingData={settingData}
      />

    </div>
  );
};

export default PageContainer;