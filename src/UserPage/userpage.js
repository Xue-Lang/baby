import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Menu, Dropdown, Button, Icon, message, Input, Avatar, Upload, Modal } from 'antd'

var img1 = require("../imgs/logo.gif")

function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
}

function handleMenuClick(e) {
    message.info('已跳转');
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            <Link to="/person">用户信息更改</Link>
      </Menu.Item>
        <Menu.Item key="2">
            我的帖子
      </Menu.Item>
        <Menu.Item key="3">
            我的收藏
      </Menu.Item>
        <Menu.Item key="4">
            我的关注
      </Menu.Item>
        <Menu.Item key="5">
            反馈
      </Menu.Item>
        <Menu.Item key="6">
            <Link to="/initial">退出</Link>
        </Menu.Item>
    </Menu>
);

const menu2 = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="7">
            <Link to="/private">私信</Link>
        </Menu.Item>
        <Menu.Item key="8">
            <Link to="/message/reply">回复</Link>
        </Menu.Item>
        <Menu.Item key="9">
            <Link to="/message/call">@我</Link>
        </Menu.Item>
        <Menu.Item key="10">
            <Link to="/message/notice">通知</Link>
        </Menu.Item>
    </Menu>
);

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}


var userPageCss = require("../UserPage/userpage.css")

export default class userPage extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [
            {
                uid: '-1',
                name: 'xxx.jpeg',
                status: 'done',
                url: 'https://b-ssl.duitang.com/uploads/item/201805/27/20180527210523_canih.jpeg',
            },
        ],
    };

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <div className={userPageCss.header}>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={4} ><Link to="/shopPage" >
                            <Icon type="bank" />
                            商城</Link></Col>
                        <Col span={6}></Col>
                        <Col span={7}></Col>
                        <Col span={1}>
                            <Link to="/homepage">首页</Link>
                        </Col>
                        <Col span={2}>
                            <Dropdown overlay={menu2}>
                                <Button>
                                    消息<Icon type="caret-down" />
                                </Button>
                            </Dropdown></Col>
                        <Col span={2}>
                            <Dropdown overlay={menu}>
                                <Button>
                                    用户 <Icon type="caret-down" />
                                </Button>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
                <div className={userPageCss.title}>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={3} className={userPageCss.research1}>
                            <img src={img1} className={userPageCss.imgs}></img>
                        </Col>
                        <Col span={7} className={userPageCss.research2}>
                            <Input.Search
                                placeholder="请输入想要搜索的内容。。。"
                                enterButton="搜索"
                                size="large"
                                onSearch={value => console.log(value)}
                            />
                        </Col>
                        <Col span={8}></Col>
                    </Row>
                </div>
                <div className={userPageCss.body}>
                    <Row>
                        <Col span={4} className={userPageCss.space}></Col>
                        <Col span={16}>
                            <div>
                                <div className={userPageCss.user}>
                                    <Row>
                                        <Col span={2}>
                                            <Avatar size={96} icon="user" className={userPageCss.icon1} />
                                        </Col>
                                        <Col span={2}><Link className={userPageCss.name}>用户</Link></Col>
                                        <Col span={16}><p className={userPageCss.p1}>签名：这个人很懒，什么都没有留下。。。</p></Col>
                                        <Col span={4}></Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row>
                                        <Col span={16}>
                                            <div className={userPageCss.first}>
                                                <Button type="primary" className={userPageCss.button}>主页</Button>
                                                <Button type="primary" className={userPageCss.button}>关注的话题</Button>
                                                <Button type="primary" className={userPageCss.button}>帖子</Button>
                                            </div>
                                            <div className={userPageCss.second}>
                                                <div class={userPageCss.outer2}>
                                                    <div class={userPageCss.inner}>
                                                        <div class={userPageCss.content3}>
                                                            <div className={userPageCss.content2}>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={userPageCss.third}>
                                                <p className={userPageCss.p2}>照片墙</p>
                                                <div className="clearfix">
                                                    <Upload
                                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                        listType="picture-card"
                                                        fileList={fileList}
                                                        onPreview={this.handlePreview}
                                                        onChange={this.handleChange}
                                                    >
                                                        {fileList.length >= 5 ? null : uploadButton}
                                                    </Upload>
                                                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                                    </Modal>
                                                </div>
                                            </div>
                                            <div className={userPageCss.fourth}>

                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div className={userPageCss.fifth}>
                                                <div className={userPageCss.title2}>
                                                    我的关注<Link to="/friend/follow" className={userPageCss.text}>( 4 )</Link>
                                                </div>
                                                <div>
                                                    <div class={userPageCss.outer4}>
                                                        <div class={userPageCss.inner}>
                                                            <div class={userPageCss.content3}>
                                                                <div className={userPageCss.content2}>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={userPageCss.sixth}>
                                                <div className={userPageCss.title2}>
                                                    我的粉丝<Link to="/friend/fans" className={userPageCss.text}>( 3 )</Link>
                                                </div>
                                                <div>
                                                    <div class={userPageCss.outer5}>
                                                        <div class={userPageCss.inner}>
                                                            <div class={userPageCss.content3}>
                                                                <div className={userPageCss.content2}>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col span={4} className={userPageCss.space}></Col>
                    </Row>
                </div>
                <div className={userPageCss.tail}></div>
            </div>
        )
    }
}