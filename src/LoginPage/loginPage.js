import React from 'react';
import { Input, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
var loginPage = require("./loginPage.css")


export default class LoginPage extends React.Component {
    render() {
        return (
            <div className={loginPage.all}>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                    <div className={loginPage.login}>
                        <div className={loginPage.text1}>
                            橘育婴
                    </div>
                        <div className={loginPage.text2}>
                            育婴，给孩子一个好的起点
                    </div>
                        <div className={loginPage.text3}>
                            账号：
                        <Input size="small" placeholder="电话号码/用户名" className={loginPage.name} ></Input>
                        </div>
                        <div className={loginPage.text4}>
                            输入密码：
                        <Input.Password placeholder="请输入密码" size="small" className={loginPage.Password} />
                            <Link to="/retrievePage" className={loginPage.forget}>忘记密码？</Link>
                        </div>
                        <div className={loginPage.registe}>
                            <Link to="/homePage">
                                <Button type="primary" shape="round" >登陆</Button>
                            </Link>
                        </div>
                    </div></Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        )
    }
}