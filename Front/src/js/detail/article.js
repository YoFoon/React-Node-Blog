import React, { Component } from 'react';
import { Row, Col } from 'antd';
import request from 'superagent';

export default class Article extends Component {

    constructor( props ) {
        super(props);
    }


    render() {
        var item = this.props.item;

        return (
            <Row>
                <Col span={22} offset={1} className="pt2 pb2">

                    <div className="header">
                        <span >{item.time.day}</span>
                        <span >{item.tags}</span>
                        <span >{item.read} reads</span>
                    </div>
                    <article className="content" dangerouslySetInnerHTML={{__html: item.post}}></article>

                </Col>
            </Row>
        );

    }

}