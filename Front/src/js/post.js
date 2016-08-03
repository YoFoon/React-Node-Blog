import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';

import SideNav from './common/sideNav';
import Post from "./post/index";

class App extends Component {

    render() {
        return(
            <Row className="fullPage">
                <Col md={{span:4}} className="H100 hidden-sm hidden-xs"><SideNav /></Col>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 20}} className="H100 rela">
                    <Post />
                </Col>
            </Row>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));