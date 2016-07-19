import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import request from 'superagent';

import SideNav from '../common/sideNav';
import Article from './article';
import Comment from "./comment";
import ROUTER from '../router/server';
import Pinyin from '../common/pinyin';

export default class BlogDetail extends React.Component {

    constructor( props ) {
        super(props);
        this.state = {
            flag: false,
            item : null,
        }
    }

    componentDidMount() {
        let that = this;
        request
            .post(ROUTER.getBlog)
            .send({_id: that.props.params.title})
            .end(function(err, res){
                res = JSON.parse(res.text);

                that.state.flag = true;
                that.state.item = res.items[0];
                that.setState({
                    flag: true,
                });

            });
    }

    render() {
        let item = this.state.item;
        let flag = this.state.flag;
        return(
            <Row className="fullPage">
                <Col md={{span:4}} className="H100 hidden-sm hidden-xs"><SideNav /></Col>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 20}} className="H100 rela">
                    <div className="abso-layout">
                        {flag ? <Article item={item} /> : ""}
                        {flag ? <Comment item={item} /> : ""}
                    </div>
                </Col>
            </Row>
        )
    }

}