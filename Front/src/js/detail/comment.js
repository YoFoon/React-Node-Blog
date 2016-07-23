import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Lifecycle } from 'react-router'

import ROUTER from '../router/server';

export default class Article extends Component {

    constructor( props ) {
        super(props);
        this.state = {
            flag : false
        }
    }

    componentWillMount() {
        if(document.getElementById("duoshuo")){
            this.state.flag = true;
        } 
    }

    componentDidMount() {
        window.duoshuoQuery = {short_name:"yofoon"};
        
        if(this.state.flag){
            DUOSHUO.EmbedThread(document.getElementById("duoshuo_node"));
            return false;
        } 
        
        ( () =>{
            
            let ds = document.createElement('script');
            ds.type = 'text/javascript';
            ds.async = true;
            ds.id="duoshuo";
            ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
            ds.charset = 'UTF-8';
            document.getElementsByTagName('body')[0].appendChild(ds);

        } )()
    }

    render() {
        var item = this.props.item;
        return (
            <Row>
                <Col span={22} offset={1} className="pt2 pb2" >
                    <div id="duoshuo_node" className="ds-thread" data-thread-key={item.key} data-title={item.title} data-url={ROUTER.commentUrl+item.key}></div>
                </Col>
            </Row>
        );

    }

}