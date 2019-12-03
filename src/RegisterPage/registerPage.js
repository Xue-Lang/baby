import React from 'react';
import { Button, Input, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
var registerPage = require("./registerPage.css")


export default class RegisterPage extends React.Component {
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
                        <Input size="small" className={registerPage.number}></Input>
                        </div>
                        <div className={registerPage.text4}>
                            设置密码：
                        <Input.Password placeholder="请输入密码" size="small" className={registerPage.Password} />
                        </div>
                        <div className={registerPage.registe}>
                            <Button type="primary" shape="round" ><Link to="initial">注册</Link></Button>
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