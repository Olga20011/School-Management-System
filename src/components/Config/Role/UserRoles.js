import React, { useEffect, useState } from 'react';
import SettingContainer from '../SettingContainer';
import SettingListItem from '../SettingListItem';
import { useConfig } from '../../../DataStore/ConfigContext';
import ActivityLoader from '../../Common/ActivityLoader';
import Notification from '../../Common/Notification';
import { useTheme } from '../../../DataStore/ThemeContext';

const UserRoles = () => {

    const {openSettings} = useTheme();

    const [activeRecord, setActiveRecord] = useState(null);
    const {getUserRoles, userRoles} = useConfig();


    useEffect(()=>{
        getUserRoles();
    }, [])

    const handleNew = ()=>{
        openSettings("New User Role", "ConfigNewUserRole");
    }

    const handleEdit = ()=>{
        openSettings("Edit User Role", "ConfigEditUserRole", activeRecord);
    }

   
    const menu = ()=>{

        return(<>
            <button type="button" tabIndex="0" className="dropdown-item" onClick={handleNew}>
                <i className="dropdown-icon fa fa-pencil"> </i><span>New Role</span>
            </button>
            <button type="button" tabIndex="0" className="dropdown-item" disabled={!activeRecord} onClick={handleEdit}>
                <i className="dropdown-icon fa fa-edit"> </i><span>Edit Selection</span>
            </button>
        </>)
    }

    return (
        <SettingContainer
            title="User Roles"
            icon="fa fa-user-group"
            Menu={menu}
            >
      
            {Array.isArray(userRoles) && <ul className="list-group">
                {userRoles.map((role) => (
                    
                    <SettingListItem
                        key={role.id} 
                        iconName='fa fa-cog'
                        itemName={role.role_name}
                        buttonTitle="Permissions"
                        onSelect={()=>setActiveRecord(role)}
                        active={role.id === activeRecord?.id}
                    />
                        
                ))}
            </ul>}
            {userRoles === '404' && <Notification message="No user role found" />}
            {!userRoles && <ActivityLoader />}
       </SettingContainer>

      
    );
};

export default UserRoles;
