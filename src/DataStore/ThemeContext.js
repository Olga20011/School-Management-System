import { createContext, useContext, useEffect, useReducer } from 'react';

const initialState = { 
    settingsOpen: false,
    settingTitle: '',
    settingCode: '',
    currentNotify: null,
    settingData: null
};



const reducer = (state, action) => {
    switch (action.type) {
      case 'CLEAR':
        return { initialState};  // Reset state completely
      default:
        return {...state, [action.type]: action.payload};
    }
};

const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    if(state.currentNotify){
        setTimeout(() => {
            setNotify(null);
        }, 5000);
    }
  }, [state.currentNotify])

  const openSettings = (title, code, data)=>{
    dispatch({type: 'settingsOpen', payload: true});
    dispatch({type: 'settingTitle', payload: title});
    dispatch({type: 'settingCode', payload: code});
    dispatch({type: 'settingData', payload: data});

  }

  const closeSettings = ()=>{
    dispatch({type: 'settingsOpen', payload: false})
    dispatch({type: 'settingCode', payload: null})
  }

  const setNotify = (notify) =>{
    dispatch({type: 'currentNotify', payload: notify})
  }

  return(
    <ThemeContext.Provider value={{
      ...state, 
      dispatch,
      openSettings,
      closeSettings,
      setNotify 
      }}>
      {children}
    </ThemeContext.Provider>
  )

}

export const useTheme = () => useContext(ThemeContext);

