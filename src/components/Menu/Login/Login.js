import React from 'react';
import AuthContext from "../../Authprovider/Authcontext";

import './Login.css';


const Login = () => {
    return (
        <div className="container">
            <h3>Login</h3>
            <AuthContext.Consumer>
                {
                    change => (
                        <div className="box">
                            <input type="text" name="username" placeholder="Enter your Username" onChange={change.userChange}></input>
                            <input type="text" name="password" placeholder="Enter your Password" onChange={change.passwordChange}></input>
                            <button type="submit" disabled={!change.state.username || !change.state.password} onClick={change.login}>Login</button>
                        </div>
                    )
                }
            </AuthContext.Consumer>
        </div>
    )
}

export default Login;