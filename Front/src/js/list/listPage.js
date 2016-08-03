import React from 'react';
import { Row, Col } from 'antd';
import request from 'superagent';

import ROUTER from '../router/server';
import EveryBlog from './everyBlog';
import Footer from './footer.js';

export default class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            flag: false,
            items: null,
        }
    }

    componentDidMount() {
        let that = this;
        request
            .get(ROUTER.getList+"/1")
            .end(function(err, res){
                res = JSON.parse(res.text);

                that.state.flag = true;
                that.state.items = res.items;
                that.setState({
                    flag: true ,
                });

            });
            
    }

    render() {
        var arrArti = []; 

        if( this.state.flag ){
            let items = this.state.items;

            for( let i = 0, itemLen = items.length; i< itemLen; i++ ){
                arrArti.push(<EveryBlog key={i} item={items[i]} />);
            }
        }
        return (
            <Row className="abso-layout">
                <Col span={22} offset={1} className="pt2 hidden-lg hidden-md"><i className="icon iconfont hamburger">&#xe605;</i></Col>
                <Col span={22} offset={1} className="pt2 pb2">
                    {arrArti}
                    <Footer />
                </Col>
            </Row>
        );
    }
}