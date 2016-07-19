import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Lifecycle } from 'react-router'


// let Article = React.createClass({

//     getInitialState: ()=> {
//         return {falg: false};
//     },

//     //mixins = [ Lifecycle ],

//     routerWillLeave: () => {
//         if(document.getElementById("duoshuo")){
//             this.state.flag = true;
//         }
//     },

//     componentDidMount: () => {
//         window.duoshuoQuery = {short_name:"yofoon"};
        
//         if(this.state.flag){
//             DUOSHUO.EmbedThread(document.getElementById("duoshuo_node"));
//             return false;
//         } 
        
//         ( () =>{
            
//             let ds = document.createElement('script');
//             ds.type = 'text/javascript';
//             ds.async = true;
//             ds.id="duoshuo";
//             ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
//             ds.charset = 'UTF-8';
//             document.getElementsByTagName('body')[0].appendChild(ds);

//         } )()
//     },

//     render: () => {
//         var item = this.props.item;

//         // return (
//         //     <Row>
//         //         <Col span={22} offset={1} className="pt2 pb2" >
//         //             <div id="duoshuo_node" className={this.state.flag ? "" : "ds-thread" } data-thread-key="YoFoon" data-title={item.title} data-url={"http://localhost:3000/view/blog/#/depail/"+item._id}></div>
//         //         </Col>
//         //     </Row>
//         // );
//         return (
//             <div>Hello</div>
//         )
//     }

// })

// export default Article;

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
                    <div id="duoshuo_node" className={this.state.flag ? "" : "ds-thread" } data-thread-key="YoFoon" data-title={item.title} data-url={"http://localhost:3000/view/blog/#/depail/"+item._id}></div>
                </Col>
            </Row>
        );

    }

}