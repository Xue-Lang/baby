import React from 'react'
import { Row, Col, Icon, Dropdown, Menu } from 'antd'
import { Link, BrowserRouter, Route ,Redirect ,Switch} from 'react-router-dom'
import fansPage from '../Fans/fans';
import followPage from '../Follow/follow';
import empty from '../empty/empty';

var friendCss = require("../Friend/friend.css")

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link to="/private">
                私信
        </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
            <Link to="/message">
                回复
        </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
            <Link to="/message">
                @我
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

export default class friendPage extends React.Component {
    
    render() {
        return (
            
            <div className={friendCss.all}>
                <div className={friendCss.header}>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={1}>
                            <div>
                                <Icon type="team" className={friendCss.text} />
                            </div>
                        </Col>
                        <Col span={2} className={friendCss.text}>
                            <span>|好友</span>
                        </Col>
                        <Col span={16}></Col>
                        <Col span={1} className={friendCss.text2}>
                            <span>|</span>
                            <Link to="/homePage" >首页</Link>
                        </Col>
                        <Col span={1} className={friendCss.text2}>
                            <span>|</span>
                            <Link to="/userpage">用户</Link>
                        </Col>
                        <Col span={1} className={friendCss.text2}>
                            <Dropdown overlay={menu}>
                                <Link>
                                    消息 <Icon type="caret-down" />
                                </Link>
                            </Dropdown>
                        </Col>
                        <Col span={1} className={friendCss.text2}>
                            <Dropdown overlay={menu2}>
                                <Link>
                                    更多 <Icon type="caret-down" />
                                </Link>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
                <div className={friendCss.space}></div>
                <div className={friendCss.all}>
                    <Row>
                        <Col span={4} className={friendCss.space2}></Col>
                        <Col span={16}>
                            <div className={friendCss.space3}>
                                <div className={friendCss.title}>
                                    
                                    <Row>
                                        <Col span={1}></Col>
                                                <Link to="/friend/fans" className={friendCss.text3}>粉丝<span>|</span></Link>
                                                <Link to="/friend/follow" className={friendCss.text3}>关注<span>|</span></Link>
                                                
                                                <Switch>
                                                <Route path="/friend/fans" component={fansPage}></Route>
                                                <Route path="/friend/follow" component={followPage}></Route>
                                                </Switch>
                                        <Col span={19}></Col>
                                    </Row>
                                </div>
                                <div className={friendCss.content}>
                                    
                                </div>
                            </div>
                        </Col>
                        <Col span={4} className={friendCss.space2}></Col>
                    </Row>
                </div>
                <div className={friendCss.all}>
                    <div className={friendCss.tail}></div>
                </div>
            </div>
        )
    }
}