import React from 'react';
import UserHoc from '../HOC/userHoc';

const User = () => {

    return(
        <div>
            usman as user
        </div>
    )
}

export default UserHoc(User, 'user argument'); 