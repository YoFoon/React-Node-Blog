import React from 'react';
import { Link } from 'react-router';

import showdown from 'showdown'; 


export default class EveryBlog extends React.Component {

    constructor (props) {
        super(props);
    }
    
    render() {
        
        let item = this.props.item;

        let converter = new showdown.Converter();
        let html      = converter.makeHtml(item.post);

        return(
            <div className="eachBlog">
                <h2 className="title"><Link to={"/detail/"+item.key}>{item.title}</Link></h2>
                <article dangerouslySetInnerHTML={{__html: html}}></article>
                <div className="meta">
                    <span className="time">{item.time.day}</span>
                    <span className="tag">on<a>{item.tags}</a></span>
                    <span className="read">{item.read} Read</span>
                </div>
            </div>  
        );
    }

}