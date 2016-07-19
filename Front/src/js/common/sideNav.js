import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router'

export default class SideNav extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {

        let arrLi = [];
        let arrName = ["Home","Blog","Work","Life","Book"];
        var arrHref = ['/view','/','/','/','/'];
        for( let i = 0, arrLen = arrName.length; i < arrLen; i++ ){
            if( i == 0 ) {
                arrLi.push(<Col xs={{span: 12}} sm={{span: 12}} md={{span: 12}} className="nav-li" key={arrName[i]}><a href={arrHref[i]}>{arrName[i]}</a></Col>);
                continue;
            }
            arrLi.push(<Col xs={{span: 12}} sm={{span: 12}} md={{span: 12}} className="nav-li" key={arrName[i]}><Link to={arrHref[i]}>{arrName[i]}</Link></Col>)
        }

        return (
            <Row className="side-nav">
                <Col xs={{span: 22, offset:1}} sm={{span: 22, offset:1}} md={{span: 22, offset:1}} className="proFile">
                    <a href="#" className="photo">
                        <img src="/dist/images/blog-head.jpg" />
                    </a>
                    <h3>YoFoon</h3>
                    <hr className="divide-line short-line" />
                    <p>努力向上吧，少年。</p>
                    <hr className="divide-line short-line" />
                    <Row type="flex" justify="center" align="middle" className="navigation mt1">
                       {arrLi}
                    </Row>
                    <Row type="flex" justify="center" align="middle" className="my-links mt1">
                        <Col md={{span: 4}} key="github" className="link-li"><a className="github-icon"></a></Col>
                        <Col md={{span: 4}} key="weibo" className="link-li"><a className="weibo-icon"></a></Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}