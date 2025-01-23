import React from 'react';
import navItems from './configItems';
import { useConfig } from '../../DataStore/ConfigContext';

const ConfigHome = () => {

    const {dispatch} = useConfig();

    const handItemClick = (id)=>{
        dispatch({type:'activeMenu', payload:id});
    }

    return (
        <div className="mb-3 card">
            <div className="p-0 card-body">
                <div className="grid-menu grid-menu-3col">
                    <div className="no-gutters row">
                        {navItems.map((button, index) => (
                            <div className="col-sm-4" key={index}>
                                <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link" onClick={()=>handItemClick(button.id)}>
                                    <i className={`fa ${button.icon} btn-icon-wrapper btn-icon-lg icon-gradient bg-happy-itmeo mb-3`}></i>
                                    {button.label}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
        </div>
    );
};

export default ConfigHome;
