import React, { useEffect, useState } from 'react';
import ActivityLoader from '../../Common/ActivityLoader';
import BsModal from '../../Common/BsModal';
import { useConfig } from '../../../DataStore/ConfigContext';
import ajaxConfig from '../../../util/remote/ajaxConfig';
import { useTheme } from '../../../DataStore/ThemeContext';
import Notification from '../../Common/Notification';

const AlertDeleteUser = () => {

    const [loading, setLoading] = useState(false);
    const {dispatch, deletedUser} = useConfig();
    const {setNotify} = useTheme();
  
    const handleClose = ()=>{
        dispatch({type: 'deletedUser', payload: null})
    }

    const confirm = async()=>{
        setLoading(true);
        const server_response = await ajaxConfig.deleteUser({username: deletedUser.username});
        setLoading(false);
        if(server_response.status === "OK"){
            setNotify(<Notification type='success' message={server_response.message}/>)
        }else{
            setNotify(<Notification type='danger' message={server_response.message}/>)

        }

        dispatch({type: 'deletedUser', payload: null})

    }

    return (
        <BsModal
            show={deletedUser}
            onClose={handleClose}
            title="Delete User"
            footer={
                <>
                    {loading && <ActivityLoader />}
                    {!loading && <>
                    <button className="btn btn-secondary" onClick={handleClose}>
                        Cancel
                    </button>
                    {deletedUser && <button className="btn btn-danger" onClick={confirm}>
                        Confirm Delete
                    </button>}
                    </>}
                </>
            }
        >


            {deletedUser && <div className="d-flex justify-content-center align-items-center flex-column">
                <i 
                className="fa fa-question-circle text-danger" 
                style={{ fontSize: "40px", lineHeight: "1", marginTop: "20px" }}
                ></i>
                <h5 className='mt-1'>Please confirm that you want to delete user, <i>{deletedUser.username}</i>.</h5>

                <p className="mb-4 mt-2">
                <b>Note: </b>If the user has recorded some entries, they will only be deactivated and removed but not deleted from the user directory.
                </p>
           
            </div>}
          

        </BsModal>
    );
};

export default AlertDeleteUser;
