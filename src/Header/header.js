import React from 'react'
import { Carousel } from 'antd'
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'
import { Row, Col } from 'antd'
var HeaderCss = require('./header.css');
var img1 = require('../imgs/1.jpg')
var img2 = require('../imgs/4.jpg')
var img3 = require('../imgs/6.jpg')
var img4 = require('../imgs/7.jpg')

export default class Header extends React.Component {
    render() {
        return (
            <div className={HeaderCss.header}>
                育婴，给孩子更好的起点。
                <Row>
                    <Col span={8}>
                        <div className={HeaderCss.picture}>
                            <Carousel autoplay="false">
                                <div>
                                    <img src={img1}></img>
                                </div>
                                <div>
                                    <img src={img2}></img>
                                </div>
                                <div>
                                    <img src={img3}></img>
                                </div>
                                <div>
                                    <img src={img4}></img>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                    <Col span={8}></Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        )
    }
} 