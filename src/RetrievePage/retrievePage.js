import React from 'react';
import { Input, Button, Row, Col } from 'antd';
import {Link} from 'react-router-dom'
var retrievePage = require("./retrievePage.css")

export default class RetrievePage extends React.Component {
    render() {
        return (
            <div className={retrievePage.all}>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <div className={retrievePage.retrieve}>
                            <div className={retrievePage.text1}>
                                橘育婴
                    </div>
                            <div className={retrievePage.text2}>
                                育婴，给孩子一个好的起点
                    </div>
                    <div className={retrievePage.text3}>
                            电话号码：
                        <Input size="small" className={retrievePage.number}></Input>
                        </div>
                        <div className={retrievePage.text5}>
                            新密码：
                        <Input.Password placeholder="请输入密码" size="small" className={retrievePage.Password} />
                        </div>
                        <div className={retrievePage.text6}>
                            确认密码：
                        <Input.Password placeholder="请输入密码" size="small" className={retrievePage.Password} />
                        </div>
                        <div className={retrievePage.text4}>
                            验证码：
                        <Input size="small" className={retrievePage.vcode}></Input>
                            <Button type="primary" shape="round" className={retrievePage.get}>获取</Button>
                        </div>
                        <div className={retrievePage.button}>
                        <Button type="primary" shape="round" className={retrievePage.cancel }><Link to="/initial">取消</Link></Button>
                        <Button type="primary" shape="round" className={retrievePage.confirm}><Link to="/initial">确认</Link></Button>
                        </div>
                        </div>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        )
    }
}