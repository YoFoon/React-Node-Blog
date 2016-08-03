import React from 'react';
import { Row, Col } from 'antd';
import request from 'superagent';

import Footer from '../list/footer';
import PostForm from './postForm'

export default class ListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Row className="abso-layout">
                <Col span={22} offset={1} className="pt2 pb2">
                    <PostForm />
                    <Footer />
                </Col>
            </Row>
        );
    }
}