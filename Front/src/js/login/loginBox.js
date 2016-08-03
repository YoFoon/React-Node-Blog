import React, { Component } from 'react';
import request from 'superagent';

import ROUTER from '../router/server';
import Cookie from '../common/cookie';

export default class LoginBox extends Component{

    constructor(props) {
        super(props);
    }

    handleClick() {
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        
        let that = this;
        request
            .post(ROUTER.logIn)
            .send({ username:username, password: password })
            .end(function(err, res){

                res = JSON.parse(res.text);

                if(res.states == 1 ) {
                    Cookie.setCookie("name",res.name,1);

                    let return_href = window.location.href.split("returnHref=")[1];

                    if ( return_href ) {
                        window.location.href = return_href;
                    } else {
                        window.location.href = window.location.origin + "/view";
                    }

                } else {
                    alert(res.message);
                }

            });

        

    }

    render() {
        return (
            <div className="loginWrap">
                <p className="title">LogIn</p>
                <div className="loginBox">
                    <label>用户名</label>
                    <input type="text" className="username" ref="username" />
                    <label>密　码</label>
                    <input type="password" className="password" ref="password" />
                    <button id="loginBtn" onClick={this.handleClick.bind(this)}>登录</button> 
                </div>
            </div>
        );
    }

}