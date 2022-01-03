import React, {useEffect, useState} from 'react';
import s from './ProfileData/ProfileData.module.css'

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.target.value);
    };

    return (
        <div>
            {!editMode &&
            <div className={s.status}>
                {props.isOwner
                    ? <div><b>Status: </b><span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
                    </div>
                    : <div><b>Status: </b><span>{props.status || 'No status'}</span></div>}
            </div>
            }
            {editMode &&
            <div className={s.statusChanged}>
                <b>Status: </b><input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
                                      value={status}></input>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;




