import React from 'react';
import { NavLink } from "react-router-dom";
import AuthContext from "../Authprovider/Authcontext";


import './Menu.css';

const Menu = () => {

    return (
        <>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <AuthContext.Consumer>
                    {context =>
                        context.state.isAuthenticated ? (
                            <>
                                <li><NavLink to="/profile">Profile</NavLink></li>
                                <li><NavLink to="/settings">Settings</NavLink></li>
                                <li>{context.state.username}</li>
                                <li onClick={context.logout}>Logout</li>
                            </>
                        ) : (
                                <li><NavLink to="/login">Login</NavLink></li>
                            )
                    }
                </AuthContext.Consumer>

            </ul>
        </>
    )
}
// class Menu extends Component{

//     render(){
//         return(
//             <>
//             <ul>
//                 <li><NavLink to="/">Home</NavLink></li>

//                 <li><NavLink to="/profile">Profile</NavLink></li>
//                 <li><NavLink to="/settings">Settings</NavLink></li>

//                 <li><NavLink to="/login">Login</NavLink></li>
//             </ul>
//             </>
//         )
//     }
// }

export default Menu;