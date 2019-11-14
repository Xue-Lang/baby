import React from 'react'
import { Button, Row, Col, Input, Popover, Upload, Tabs, Radio, Icon, message, Checkbox, List, Avatar } from 'antd'
import { Link } from 'react-router-dom'
const content1 = (
    <div>
        <p>刷新</p>
    </div>
);

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

var HBodyCss = require("./hbody.css")

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const listData = [];
for (let i = 0; i < 2; i++) {
    listData.push({
        href: './userpage',
        title: `经验讲堂 ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

const listData2 = [];
for (let i = 0; i < 12; i++) {
    listData.push({
        href: './userpage',
        title: `百家传`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            '通过走访在多家得到的综合经验',
        content:
            '牛奶最好在2周岁后喝，2岁前可以吃酸奶。脱脂牛奶比全脂牛奶对孩子更为健康',
    });
}

const IconText2 = ({ type2, text }) => (
    <span>
        <Icon type={type2} style={{ marginRight: 8 }} />
        {text}
    </span>
);

var img1 = require("../imgs/1.jpg")
var img2 = require("../imgs/4.jpg")

export default class HBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'top',
        };
    }

    handleModeChange = e => {
        const mode = e.target.value;
        this.setState({ mode });
    };
    render() {
        const { mode } = this.state;
        return (
            <div>
                <div className={HBodyCss.all}>
                    <Row>
                        <Col span={4}></Col>
                        <Col span={4}>
                            <Button type="danger" size={18} block><Link>首页</Link></Button>
                        </Col>
                        <Col span={4}>
                            <Button type="danger" size={18} block><Link>最新</Link></Button>
                        </Col>
                        <Col span={4}>
                            <Button type="danger" size={18} block><Link>热议</Link></Button>
                        </Col>
                        <Col span={4}>
                            <Button type="danger" size={18} block><Link>专家</Link></Button>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                </div>
                <div className={HBodyCss.content}>
                    <Row>
                        <Col span={4} className={HBodyCss.fill}></Col>
                        <Col span={16}>
                            <div className={HBodyCss.content1}>
                                <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
                                    {[...Array(15).keys()].map(i => (
                                        <Tabs.TabPane tab={`Tab-${i}`} key={i}>
                                            <p className={HBodyCss.text}>经验讲坛{i}</p>
                                        </Tabs.TabPane>
                                    ))}
                                </Tabs>
                            </div>
                            <div className={HBodyCss.content2}>
                                <List itemLayout="vertical" size="large"
                                    pagination={{
                                        onChange: page => {
                                            console.log(page);
                                        },
                                        pageSize: 3,
                                    }}
                                    dataSource={listData}
                                    footer={
                                        <div>
                                            <b>ant design</b> footer part
                                        </div>
                                    }
                                    renderItem={item => (
                                        <List.Item
                                            key={item.title}
                                            actions={[
                                                <IconText type="star-o" text="156" />,
                                                <IconText type="like-o" text="156" />,
                                                <IconText type="message" text="2" />,
                                            ]}
                                            extra={
                                                <img
                                                    width={272}
                                                    alt="logo"
                                                    src={img1}
                                                />
                                            }
                                        >
                                            <List.Item.Meta
                                                avatar={<Avatar src={item.avatar} />}
                                                title={<a href={item.href}>{item.title}</a>}
                                                description={item.description}
                                            />
                                            {item.content}
                                        </List.Item>
                                    )}
                                />,
                                <List itemLayout="vertical" size="large"
                                    pagination={{
                                        onChange: page => {
                                            console.log(page);
                                        },
                                        pageSize: 3,
                                    }}
                                    dataSource={listData2}
                                    footer={
                                        <div>
                                            <b>ant design</b> footer part
                                        </div>
                                    }
                                    renderItem={item2 => (
                                        <List.Item
                                            key={item2.title}
                                            actions={[
                                                <IconText2 type="star-o" text="792" />,
                                                <IconText2 type="like-o" text="680" />,
                                                <IconText2 type="message" text="15" />,
                                            ]}
                                            extra={
                                                <img
                                                    width={272}
                                                    alt="logo"
                                                    src={img2}
                                                />
                                            }
                                        >
                                            <List.Item.Meta
                                                avatar={<Avatar src={item2.avatar} />}
                                                title={<a href={item2.href}>{item2.title}</a>}
                                                description={item2.description}
                                            />
                                            {item2.content}
                                        </List.Item>
                                    )}
                                />,
                            </div>
                        </Col>
                        <Col span={4} className={HBodyCss.fill}>
                            <Col span={2} >
                                <Popover placement="right" content={content1} trigger="hover">
                                    <Button type="primary" icon="retweet" size="large" className={HBodyCss.icon1} /><br></br><br></br>
                                </Popover>
                                <Button type="primary" icon="plus" size="large" className={HBodyCss.icon1} /><br></br><br></br>
                                <Link to="/service">
                                    <Button type="primary" icon="customer-service" size="large" className={HBodyCss.icon1} />
                                </Link>
                            </Col>
                            <Col span={2}></Col>
                        </Col>
                    </Row>
                    <div className={HBodyCss.transition}></div>
                    <div>
                        <Row className={HBodyCss.tail}>
                            <Col span={4}></Col>
                            <Col span={2}>
                                <div>发表新话题：</div><br></br>
                            </Col>
                            <Col span={14}><Input className={HBodyCss.Input} placeholder="##请输入您想发表的话题"></Input></Col>
                            <br></br>
                            <br></br>
                            <Col span={4}></Col>
                        </Row>
                    </div>
                    <div className={HBodyCss.tail2}>
                        <Row >
                            <Col span={4}></Col>
                            <Col span={14}><Input.TextArea placeholder="请输入您想发表的内容......" autosize={{ minRows: 2, maxRows: 6 }} className={HBodyCss.box} />
                                <Checkbox onChange={onChange}>同时发布到我的动态</Checkbox>
                            </Col>
                            <Col span={2}><Upload {...props}>
                                <Button size="small">
                                    +<Icon type="picture" />
                                </Button>
                            </Upload>
                                <Button type="primary" >发送</Button>
                            </Col>
                            <Col span={4}>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}