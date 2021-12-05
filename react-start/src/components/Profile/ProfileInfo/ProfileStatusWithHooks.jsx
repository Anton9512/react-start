import React, {useState} from 'react';

const ProfileStatusWithHooks = (props) => {
   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

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
          <div>
             <span onDoubleClick={activateEditMode}>{props.status || 'No status' }</span>
          </div>
          }
          {editMode &&
          <div>
             <input  onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}  value={status}></input>
          </div>
          }
       </div>
   )
}


export default ProfileStatusWithHooks;



