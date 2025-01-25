import React, { useEffect, useState } from 'react';
import SettingContainer from '../SettingContainer';
import { useConfig } from '../../../DataStore/ConfigContext';
import ActivityLoader from '../../Common/ActivityLoader';
import Notification from '../../Common/Notification';
import { useTheme } from '../../../DataStore/ThemeContext';
import functions from '../../../util/functions';


const UserHead = ({ user }) => (
    <div className="widget-content p-0">
        <div className="widget-content-wrapper">
            <div className="widget-content-left mr-3">
                <div className="widget-content-left">
                    <img width="40" className="rounded-circle" src={user.photo} alt="User Avatar" />
                </div>
            </div>
            <div className="widget-content-left flex2">
                <div className="widget-heading">{user.full_name}</div>
                <div className="widget-subheading opacity-7">{user.role.role_name}</div>
            </div>
        </div>
    </div>
);





const SystemUsers = () => {

    const {openSettings} = useTheme();

    const [activeRecord, setActiveRecord] = useState(null);
    const {getUsers, userListing, dispatch} = useConfig();


    useEffect(()=>{
        getUsers();
    }, [])

    const handleNew = ()=>{
        openSettings("Invite New User", "ConfigNewUser");
    }

    const handleDelete = ()=>{
        dispatch({type: 'deletedUser', payload: activeRecord})
    }

   
    const menu = ()=>{

        return(<>
            <button type="button" tabIndex="0" className="dropdown-item" onClick={handleNew}>
                <i class="dropdown-icon fa-regular fa-paper-plane"></i>
                <span>Invite User</span>
            </button>
            <button type="button" tabIndex="0" className="dropdown-item" disabled={!activeRecord} onClick={handleDelete}>
                <i className="dropdown-icon fa fa-trash-alt text-danger"> </i><span>Remove User</span>
            </button>
        </>)
    }

    return (
        <SettingContainer
            title="System Users"
            icon="fa fa-user"
            Menu={menu}
            >
            <div className="table-responsive">
                    {Array.isArray(userListing) && <table className="align-middle mb-3 table table-borderless table-striped table-hover">
                    <thead>
                    <tr>
                    <th className="text-center">#</th>
                    <th>Name</th>
                    <th className="text-left">Username</th>
                    <th className="text-center">Phone Number</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Last Updated</th>
                    </tr>
                    </thead>
                    <tbody>
                        {userListing.map((user)=>
                            <tr key={user.user_id} onClick={()=>setActiveRecord(user)} className={`${user.user_id === activeRecord?.user_id ? 'row-active' :''}`}>
                                <td className="text-center text-muted">#{user.watchman_id}</td>
                                <td>
                                    <UserHead user={user}/>
                                </td>
                                <td className="text-left">{user.username}</td>
                                <td className="text-center">{user.phone_number}</td>
                                <td className="text-center">
                                    <div className={`badge badge-${user.status === 'Active' ? 'success' : 'warning'}`}>{user.status}</div>
                                </td>
                                <td className="text-center">{functions.formatDate(user.updated_at)}</td>

                            </tr>
                        )}
                    
                    </tbody>
                    </table>}

                {userListing === '404' && <Notification message="No system user found" />}
                {!userListing && <ActivityLoader />}
            </div>

           
           
       </SettingContainer>
    );
};

export default SystemUsers;
