import React from 'react';
import { Button, Input, Row, Col,message } from 'antd';
import { Link } from 'react-router-dom'
var registerPage = require("./registerPage.css")


export default class RegisterPage extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    upload = ()=>{
        //XHR
        var xhr = new XMLHttpRequest()
        var date = {
            "username":this.state.username,
            "password":this.state.password,
        }
        //open连接
        xhr.open("post","/user/register") 
        //配置响应函数
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    console.log(xhr.responseText)
                    var result = JSON.parse(xhr.responseText)
                    if(result.state==2){
                        message.info(xhr.responseText)
                    }else{
                        message.info(xhr.responseText)
                       // this.props.history.push("/homepage")
                    }
                }else{
                    message.info(xhr.status)
                }
            }
        }
        //发送数据
        xhr.setRequestHeader('content-type','application/json');

        xhr.send(JSON.stringify(date))
        //fetch
    }
    render() {
        return (
            <div className={registerPage.all}>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}><div className={registerPage.register}>
                        <div className={registerPage.text1}>
                            橘育婴
                    </div>
                        <div className={registerPage.text2}>
                            育婴，给孩子一个好的起点
                    </div>
                        <div className={registerPage.text3}>
                            用户名：
                        <Input size="small" className={registerPage.number} type="text"  name="username" value={this.state.username} onChange={e=>this.changeValue(e)}></Input>
                        </div>
                        <div className={registerPage.text4}>
                            设置密码：
                        <Input.Password placeholder="请输入密码" size="small" className={registerPage.Password}  type="password" name="password" value={this.state.password} onChange={e=>this.changeValue(e)}></Input.Password>
                        </div>
                        <div className={registerPage.registe}>
                            <Button type="primary" shape="round" onClick={this.upload}>注册</Button>
                        </div>
                        <div className={registerPage.text6}>
                            已有账号？
                       <Link to="/loginPage">登陆</Link>
                        </div>
                        <div className={registerPage.download}>
                            <Link to="/shopPage">下载橘育婴APP</Link>
                        </div>
                    </div></Col>
                    <Col span={8}></Col>
                </Row>

            </div>
        )
    }
}