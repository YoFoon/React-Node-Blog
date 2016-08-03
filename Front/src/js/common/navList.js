import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router'

export default class NavList extends Component{

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

            <Row type="flex" justify="center" align="middle" className="navigation mt1">
                {arrLi}
            </Row>
            

        )

    }

}