import React from 'react'
import { Row, Col, Menu, Dropdown, Icon, Button, Input, Checkbox } from 'antd'
import { Link, BrowserRouter, Route ,Redirect,Switch} from 'react-router-dom'
import replyPage from '../Reply/reply';
import callPage from '../Call/call';
import noticePage from '../Notice/notice';

var messageCss = require("../Message/message.css")
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


export default class messagePage extends React.Component {
    render() {
        return (
            <div className={messageCss.all}>
                <div className={messageCss.header}>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={2} className={messageCss.text}>
                            <span><Icon type="mail" />|消息</span>
                        </Col>
                        <Col span={16}></Col>
                        <Col span={1} className={messageCss.text2}>
                            <span>|</span>
                            <Link to="/homePage" >首页</Link>
                        </Col>
                        <Col span={1} className={messageCss.text2}>
                            <span>|</span>
                            <Link to="/userpage">用户</Link>
                        </Col>
                        <Col span={1} className={messageCss.text2}>
                            <Dropdown overlay={menu}>
                                <Link>
                                    消息 <Icon type="caret-down" />
                                </Link>
                            </Dropdown>
                        </Col>
                        <Col span={1} className={messageCss.text2}>
                            <Dropdown overlay={menu2}>
                                <Link>
                                    更多 <Icon type="caret-down" />
                                </Link>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
                <div className={messageCss.space1}></div>
                <div className={messageCss.space}>
                    <Row>
                        <Col span={7}></Col>
                        <Col span={9}>
                            <div>
                                <Row>
                                    <Col span={6}>
                                        <img src={img1} className={messageCss.picture2}></img>
                                    </Col>
                                    <Col span={16} className={messageCss.input}>
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
                <div className={messageCss.area1}></div>
                <div className={messageCss.all}>
                    <Row>
                        <Col span={4} className={messageCss.space2}></Col>
                        <Col span={16}>
                            <div className={messageCss.space3}>
                                <div className={messageCss.title}>
                                    <Row>
                                        <Col span={1}>
                                            <Icon type="container" className={messageCss.text2}/>
                                        </Col>
                                        <Col span={6}>
                                                <Link to="/message/reply" className={messageCss.text3}>回复
                                                    <span>|</span>
                                                </Link>
                                                <Link to="/message/call" className={messageCss.text3}>@我
                                                    <span>|</span>
                                                </Link>
                                                <Link to="/message/notice" className={messageCss.text3}>通知
                                                    <span>|</span>
                                                </Link>


                                                <Switch>
                                                    <Route path="/message/reply" component={replyPage}></Route>
                                                    <Route path="/message/call" component={callPage}></Route>
                                                    <Route path="/message/notice" component={noticePage}></Route>
                                                </Switch>
                                        </Col>
                                        <Col span={14}></Col>
                                        <Col span={3}><Checkbox onChange={onChange}>只看未读</Checkbox></Col>
                                    </Row>
                                </div>
                                <div className={messageCss.content}>
                                    {/* <div class={messageCss.outer4}>
                                        <div class={messageCss.inner}>
                                            <div class={messageCss.content3}>
                                                <div className={messageCss.content2}>

                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className={messageCss.tail2}>
                                    <Row>
                                        <Col span={22}></Col>
                                        <Col span={2}>
                                            <Button type="primary" size="small">删除已读</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col span={4} className={messageCss.space2}></Col>
                    </Row>
                </div>
                <div className={messageCss.all}>
                    <div className={messageCss.tail}></div>
                </div>
            </div >
        )
    }
}