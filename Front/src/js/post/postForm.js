import React from 'react';
import request from 'superagent';

import { Form, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.SeltctValue = 'blog';
    }

    handleSubmit(){
        let title = this.refs.title.refs.input.value;
        let type = this.SeltctValue;
        let content = this.refs.content.refs.input.value;
        console.log(title,type,content);
    }

    selectChange(value) {
        this.SeltctValue = value;
    }

    render() {
        let title ={
            "fontSize": "24px",
            "color": "#666",
            "textAlign": "center",
            "paddingBottom": "2rem"
        }
        let button= {
            "marginLeft":"25%",
            "marginBottom": "2rem"
        }
        return (
            <div>
                <h2 style={title}>文章发表</h2>
                <Form horizontal>
                    <FormItem
                    id="control-input"
                    label="博文标题："
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                    >
                    <Input id="control-input" placeholder="Please enter..." ref="title" />
                    </FormItem>

                    <FormItem
                    id="select"
                    label="博文类型"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                    >
                    <Select id="select" size="large" defaultValue="blog" style={{ width: 200 }} onChange={this.selectChange.bind(this)}>
                        <Option value="blog">技术</Option>
                        <Option value="work">工作</Option>
                        <Option value="life">生活</Option>
                        <Option value="book">书籍</Option>
                    </Select>
                    </FormItem>

                    <FormItem
                    id="control-textarea"
                    label="博文内容"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                    >
                    <Input type="textarea" id="control-textarea" rows="20" ref="content" />
                    </FormItem>
                    
                    <Button type="primary" style={button} onClick={this.handleSubmit.bind(this)} >提交</Button>
                </Form>
            </div>
        );
    }
}