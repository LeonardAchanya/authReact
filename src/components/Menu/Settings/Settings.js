import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from "../../Authprovider/Authcontext";


const Settings = () => {
    return (

        <AuthContext.Consumer>
            {context =>
                !context.state.isAuthenticated ? (
                    <>
                        <Redirect to="/login" />
                    </>
                ) : (

                        <>
                            <h3>Settings</h3>
                        </>
                    )
            }
        </AuthContext.Consumer>

    )
}

export default Settings;