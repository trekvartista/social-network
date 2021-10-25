import React from 'react';

function ProfileInfo(props) {
    return (
        <div>
            <p><b><u>{props.name}</u></b></p>
                <br/>
                <p>City: {props.city}</p>
                <p>Date of birth: {props.dateOfBirth}</p>
                <p>Education: {props.education}</p>
        </div>
    );
}

export default ProfileInfo;