import React, { Component } from 'react';
import { Row, Col } from 'antd';

import LoginBox from './loginBox';

export default class Login extends Component{

    render() {
        return (
            <div className="login-contain">
                <Row className="H100">
                    <Col xs={{span: 12, offset:6}} sm={{span:12, offset:6}} md={{span: 4, offset:10}} className="login-box-layout">
                        <LoginBox / >
                    </Col>
                </Row>
            </div>
        );
    }

}
