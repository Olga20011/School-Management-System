import { createContext, useContext, useReducer } from 'react';
import ajaxConfig from '../util/remote/ajaxConfig';
import ajaxPeriod from '../util/remote/ajaxPeriod';

const initialState = { 
    company: null,
    currentPeriod: null,
    userRoles: null,
    activeMenu: null, 
    userListing: null,
    deletedUser: null
};

const reducer = (state, action) => {

  switch (action.type) {
    case 'CLEAR':
      return { initialState};  // Reset state completely
    default:
      return {...state, [action.type]: action.payload};
  }

};


const ConfigContext = createContext();

export const ConfigProvider = ({children}) =>{
  const [state, dispatch] = useReducer(reducer, initialState);

  
  

  const getCompanyProfile = async () => {
    const server_response  = await ajaxConfig.fetchClientProfile();
    if(server_response.status === "OK"){
        dispatch({ type: 'company', payload: server_response.details });
    }
  };

  const getCurrentPeriod = async () => {
    const server_response  = await ajaxPeriod.getCurrentPeriod();
    if(server_response.status === "OK"){
        dispatch({ type: 'currentPeriod', payload: server_response.details });
    }
  };

  const getUserRoles = async (refresh) => {
    if(!refresh && Array.isArray(state.userRoles)){
      return
    }
    const server_response  = await ajaxConfig.filter_roles([]);
    if(server_response.status === "OK"){
        dispatch({ type: 'userRoles', payload: server_response.details });
    }else{
      dispatch({ type: 'userRoles', payload: '404' });

    }
  };

  const getUsers = async (refresh) => {
    if(!refresh && Array.isArray(state.userListing)){
      return
    }
    const server_response  = await ajaxConfig.fetchUsers();
    if(server_response.status === "OK"){
        dispatch({ type: 'userListing', payload: server_response.details });
    }else{
      dispatch({ type: 'userListing', payload: '404' });

    }
  };

  return(
    <ConfigContext.Provider value={{
      ...state, 
      dispatch, 
      getCompanyProfile,
      getCurrentPeriod,
      getUserRoles,
      getUsers
      }}>
      {children}
    </ConfigContext.Provider>
  )

}

export const useConfig = ()=>useContext(ConfigContext);

