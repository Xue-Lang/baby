import React from 'react'
import Header from '../Header/header'
import HBody from '../HBody/hbody'
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'
import { Icon, Row, Col, Menu, Dropdown, message, Button, Avatar, Input } from 'antd'
import {img2} from '../imgs/logo.gif'
// var img1 = require('../imgs/title2.jpg')
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            <Link to="/initial">退出当前用户</Link>
        </Menu.Item>
    </Menu>
);
var HomePageCss = require("./homePage.css")

function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
}

function handleMenuClick(e) {
    message.info('已退出当前用户！');
    console.log('click', e);
}

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header /><br></br>
                <div className={HomePageCss.Icon1}>
                    <div className={HomePageCss.store}>
                        <Row>
                            <Col span={6}>
                                <div className={HomePageCss.store1}>
                                <Icon type="home" />
                                <Link to="/shopPage">母婴商城</Link>
                                </div>
                            </Col>
                            <Col span={6} className={HomePageCss.img01}>
                                <img src={img2}></img>
                            </Col>
                            <Col span={7}>
                                <Input.Search placeholder="请输入想搜索的内容" onSearch={value => console.log(value)} enterButton />
                            </Col>
                            <Col span={3} className={HomePageCss.user}>
                                欢迎您：<Link to="/userPage"><Avatar icon="user" />用户</Link>
                            </Col>
                            <Col span={2} className={HomePageCss.select}>
                                <Dropdown overlay={menu}>
                                    <Button >设置
                                    <Icon type="down" />
                                    </Button>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <HBody />
                </div>
            </div>
        )
    }
}