import c from './ProfileStatus.module.css';
import React from 'react';
import { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setNewStatus] = useState(props.profile.status);

    const activatedEditMode = () => {
        if (props.token === props.profile.token){
            setEditMode(true);
        }
    };

    const deactivatedEditMode = () => {
        setEditMode(false);
        props.setStatus(props.token, status);
    };

    const onStatusChange = (e) => {
        setNewStatus(e.currentTarget.value);
    }

    return(
        <div className={c.ProfileStatus}>
            {!editMode && <div>
                <span onDoubleClick={activatedEditMode}>{props.profile.status || 'No status'}</span>
            </div>
            }
            {editMode && <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivatedEditMode} value={status}></input>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;