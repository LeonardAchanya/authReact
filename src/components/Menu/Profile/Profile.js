import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from "../../Authprovider/Authcontext";


const Profile = () => {
    return (

        <AuthContext.Consumer>
            {context =>
                !context.state.isAuthenticated ? (
                    <>
                        <Redirect to="/login" />
                    </>
                ) : (

                        <>
                            <h3>Profile</h3>
                        </>
                    )
            }
        </AuthContext.Consumer>

    )
}

export default Profile;