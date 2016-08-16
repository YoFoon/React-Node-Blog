import React, { Component } from 'react';
import { Row, Col } from 'antd';
import request from 'superagent';

import showdown from 'showdown'; 

export default class Article extends Component {

    constructor( props ) {
        super(props);
    }


    render() {
        var item = this.props.item;

        let converter = new showdown.Converter();
        let html      = converter.makeHtml(item.post);

        return (
            <Row>
                <Col span={22} offset={1} className="pt2 pb2">

                    <div className="header">
                        <span >{item.time.day}</span>
                        <span >{item.tags}</span>
                        <span >{item.read} reads</span>
                    </div>
                    <article className="content" dangerouslySetInnerHTML={{__html: html}}></article>

                </Col>
            </Row>
        );

    }

}