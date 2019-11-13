import React from 'react';

const Auth = (props)=> {

    const pass = 'password1122';

    if(pass != 'password1122'){
        return <h2>You are not Authorized</h2>
    } else {
        return props.children;
    }
 

}

export default Auth;