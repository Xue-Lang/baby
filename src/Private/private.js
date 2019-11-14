import React from 'react'
import { Row, Col, Menu, Dropdown, Icon, Button, Input } from 'antd'
import { Link ,BrowserRouter,Route} from 'react-router-dom'

var img1 = require("../imgs/title2.jpg")
var privateCss = require("./private.css")

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
        <Menu.Item key="3">
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
const menu3 = (
    <Menu>
        <Menu.Item key="0">
            <Link to="/">所有人</Link>
        </Menu.Item>
        <Menu.Item key="1">
            <Link to="/">仅好友/粉丝</Link>
        </Menu.Item>
        <Menu.Item key="3">
            <Link to="/">都不接受</Link>
        </Menu.Item>
    </Menu>
);


export default class privatePage extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        return (
            <div className={privateCss.all}>
                <div className={privateCss.header}>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={1}>
                            <div>
                                <img src={img1} className={privateCss.picture1}></img>
                            </div>
                        </Col>
                        <Col span={2} className={privateCss.text}>
                            <span>|私信</span>
                        </Col>
                        <Col span={16}></Col>
                        <Col span={1} className={privateCss.text2}>
                            <span>|</span>
                            <Link to="/homePage" >首页</Link>
                        </Col>
                        <Col span={1} className={privateCss.text2}>
                            <span>|</span>
                            <Link to="/userpage">用户</Link>
                        </Col>
                        <Col span={1} className={privateCss.text2}>
                            <Dropdown overlay={menu}>
                                <Link>
                                    消息 <Icon type="caret-down" />
                                </Link>
                            </Dropdown>
                        </Col>
                        <Col span={1} className={privateCss.text2}>
                            <Dropdown overlay={menu2}>
                                <Link>
                                    更多 <Icon type="caret-down" />
                                </Link>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
                <div className={privateCss.space}></div>
                <div className={privateCss.all}>
                    <Row>
                        <Col span={4} className={privateCss.space2}></Col>
                        <Col span={16}>
                            <div className={privateCss.space3}>
                                <Row>
                                    <Col span={6}>
                                        <div className={privateCss.title1}>
                                            <Row>
                                                <Col span={7}></Col>
                                                <Col span={9}>
                                                    <Icon type="mail" className={privateCss.text} />
                                                    私信消息
                                                </Col>
                                                <Col span={8}></Col>
                                            </Row>
                                        </div>
                                        <div></div>
                                        <div>
                                            <div class={privateCss.outer}>
                                                <div class={privateCss.inner}>
                                                    <div class={privateCss.content}>
                                                        <div className={privateCss.content2}>
                                                            <Menu
                                                                onClick={this.handleClick}
                                                                style={{ width: 256 }}
                                                                defaultSelectedKeys={['1']}
                                                                defaultOpenKeys={['sub1']}
                                                                mode="inline"
                                                            >
                                                                <Menu.SubMenu
                                                                    className={privateCss.back}
                                                                    key="sub1"
                                                                    title={
                                                                        <span>
                                                                            <Icon type="heart" />
                                                                            <span>我的关注</span>
                                                                        </span>
                                                                    }
                                                                >
                                                                    <Menu.ItemGroup key="g1" title="分组一">
                                                                        <Menu.Item key="1">小葵花</Menu.Item>
                                                                        <Menu.Item key="2">小齐大讲堂</Menu.Item>
                                                                    </Menu.ItemGroup>
                                                                    <Menu.ItemGroup key="g2" title="分组二">
                                                                        <Menu.Item key="3">行为分析</Menu.Item>
                                                                        <Menu.Item key="4">育婴讲座</Menu.Item>
                                                                    </Menu.ItemGroup>
                                                                </Menu.SubMenu>
                                                                <Menu.SubMenu
                                                                    className={privateCss.back}
                                                                    key="sub2"
                                                                    title={
                                                                        <span>
                                                                            <Icon type="user" />
                                                                            <span>我的好友</span>
                                                                        </span>
                                                                    }
                                                                >
                                                                    <Menu.SubMenu key="sub3" title="特别关心">
                                                                        <Menu.Item key="7">Sakura</Menu.Item>
                                                                        <Menu.Item key="8">绘梨衣</Menu.Item>
                                                                    </Menu.SubMenu>
                                                                    <Menu.Item key="5">Miku</Menu.Item>
                                                                    <Menu.Item key="6">Gumi</Menu.Item>
                                                                </Menu.SubMenu>
                                                                <Menu.SubMenu
                                                                    className={privateCss.back}
                                                                    key="sub4"
                                                                    title={
                                                                        <span>
                                                                            <Icon type="team" />
                                                                            <span>我的粉丝</span>
                                                                        </span>
                                                                    }
                                                                >
                                                                    <Menu.Item key="9">粉丝</Menu.Item>
                                                                    <Menu.Item key="10">饭团</Menu.Item>
                                                                    <Menu.Item key="11">汤面</Menu.Item>
                                                                    <Menu.Item key="12">麻辣烫</Menu.Item>
                                                                </Menu.SubMenu>
                                                            </Menu>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Row>
                                                <Col span={7}></Col>
                                                <Col span={9}>
                                                    <Button type="primary" size="small">全部标为已读</Button>
                                                </Col>
                                                <Col span={8}></Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col span={18}>
                                        <div className={privateCss.title1}>
                                            <Row>
                                                <Col span={20}></Col>
                                                <Col span={4}>
                                                    <Dropdown overlay={menu3} trigger={['click']}>
                                                        <div className={privateCss.text3}>
                                                            <Link className={privateCss.text3}>
                                                                设置接受信息对象<Icon type="setting" />
                                                            </Link>
                                                        </div>
                                                    </Dropdown>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className={privateCss.chat}>
                                            <div class={privateCss.outer2}>
                                                <div class={privateCss.inner}>
                                                    <div class={privateCss.content3}>
                                                        <div className={privateCss.content2}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={privateCss.input}>
                                            <div className={privateCss.space4}></div>
                                            <div className={privateCss.intext}>
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
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col span={4} className={privateCss.space2}></Col>
                    </Row>
                </div>
                <div className={privateCss.all}>
                    <div className={privateCss.tail}></div>
                </div>
            </div>
        )
    }
}