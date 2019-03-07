import React, { Component } from "react";

import AuthContext from "./Authcontext";
class AuthProvider extends Component {
  state = {
    isAuthenticated: false,
    username: null,
    password: null
  };
  render() {
    return (
      <AuthContext.Provider
        value={{
          state: this.state,
          logout: () =>{
            this.setState({
              isAuthenticated: false,
              username: null,
              password: null
            })
          },
          login: () => {
            // console.log('submit')
            if (this.state.username === "admin" && this.state.password === "admin") {
              // console.log('login correct')
              this.setState({
                isAuthenticated: true
              })
            } else {
              console.log('login not correct')
            }
          },
          userChange: (e) => {
            this.setState({
              username: e.target.value
            })
          },
          passwordChange: (e) => {
            this.setState({
              password: e.target.value
            })
          }
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export default AuthProvider;
