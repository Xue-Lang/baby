import React from 'react'
import { Row, Col, Menu, Dropdown, Icon, Button, Input, Avatar } from 'antd'
import { Link, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

var ServiceCss = require('../Service/service.css')
var img1 = require("../imgs/logo.gif")

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link to="/private">
                私信
        </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
            <Link to="/message/reply">
                回复
        </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
            <Link to="/message/call">
                @我
        </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
            <Link to="/message/notice">
                通知
        </Link>
        </Menu.Item>
    </Menu>
);
const menu2 = (
    <Menu>
        <Menu.Item key="3">
            <Link to="/">
                反馈
            </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4">
            <Link to="/initial">
                退出当前账户
            </Link>
        </Menu.Item>
    </Menu>
);

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

export default class Service extends React.Component {

    render() {
        return (
            <div className={ServiceCss.all}>
                <div className={ServiceCss.header}>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={2} className={ServiceCss.text}>
                            <span><Icon type="customer-service" />|客服中心</span>
                        </Col>
                        <Col span={14}></Col>
                        <Col span={1} className={ServiceCss.text2}>
                            <span>|</span>
                            <Link to="/shopPage" >商城</Link>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={1} className={ServiceCss.text2}>
                            <span>|</span>
                            <Link to="/homePage" >首页</Link>
                        </Col>
                        <Col span={1} className={ServiceCss.text2}>
                            <span>|</span>
                            <Link to="/userpage">用户</Link>
                        </Col>
                        <Col span={1} className={ServiceCss.text2}>
                            <Dropdown overlay={menu}>
                                <Link>
                                    消息 <Icon type="caret-down" />
                                </Link>
                            </Dropdown>
                        </Col>
                        <Col span={1} className={ServiceCss.text2}>
                            <Dropdown overlay={menu2}>
                                <Link>
                                    更多 <Icon type="caret-down" />
                                </Link>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
                <div className={ServiceCss.space1}></div>
                <div className={ServiceCss.space}>
                    <Row>
                        <Col span={7}></Col>
                        <Col span={9}>
                            <div>
                                <Row>
                                    <Col span={6}>
                                        <img src={img1} className={ServiceCss.picture2}></img>
                                    </Col>
                                    <Col span={16} className={ServiceCss.input}>
                                        <Input.Search
                                            placeholder="请输入您想搜索的内容....."
                                            enterButton="全网搜索"
                                            size="default"
                                            onSearch={value => console.log(value)}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col span={8}></Col>
                    </Row>
                </div>
                <div className={ServiceCss.area1}></div>
                <div className={ServiceCss.all}>
                    <Row>
                        <Col span={5} className={ServiceCss.space2}></Col>
                        <Col span={14}>
                            <div className={ServiceCss.space3}>
                                <div className={ServiceCss.title}>
                                    <Row>
                                        <Col span={1}>
                                            <Icon type="customer-service" className={ServiceCss.text2}/>
                                        </Col>
                                        <Col span={2}>智能助手</Col>
                                        <Col span={21}></Col>
                                    </Row>
                                </div>
                                <div className={ServiceCss.content}>
                                    <div className={ServiceCss.box1}>
                                    <Avatar size="large" icon="user" className={ServiceCss.people}/>
                                    </div>
                                    <div className={ServiceCss.reply}>
                                        <div className={ServiceCss.kong}></div>
                                        <div className={ServiceCss.intext}>
                                            <Row>
                                                <Col span={1}></Col>
                                                <Col span={20}>
                                                    <Input.TextArea
                                                        placeholder="请输入想要发送的内容...."
                                                        autosize={{ minRows: 2, maxRows: 6 }}
                                                    />
                                                </Col>
                                                <Col span={3}>
                                                    <Button type="primary" size="default">发送</Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                                <div className={ServiceCss.tail2}></div>
                            </div>
                        </Col>
                        <Col span={5} className={ServiceCss.space2}></Col>
                    </Row>
                </div>
                <div className={ServiceCss.all}>
                    <div className={ServiceCss.tail}></div>
                </div>
            </div>
        )
    }
}