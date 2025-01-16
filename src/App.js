import React from 'react';
import './App.css';
import SuperStore from './DataStore/SuperStore';
import SystemRoutes from './Nav/SystemRoutes';

function App() {
  return (
    
    <SuperStore>
            <SystemRoutes />
    </SuperStore>
  );
}

export default App;
