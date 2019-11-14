import React from 'react'
import { Avatar, Row, Col, List, message, Spin } from 'antd'
import ReplyList from '../ReplyList/replylist';

var replyCss = require('../Reply/reply.css')

export default class replyPage extends React.Component {

    getReplyList(){
        let replyList=[{
            id:1,
            name:"JIN",
            reply:"我们一起去刷积分吧！",
            time:"凹凸历2019.07.01 8:10",
        },{
            id:2,
            name:"Grey",
            reply:"。。。。。。一起",
            time:"凹凸历2019.07.01 8:12",
        },{
            id:3,
            name:"Anmicious",
            reply:"最后的骑士安迷修，为您而来~❤",
            time:"凹凸历2019.07.02 10:20",
        },{
            id:4,
            name:"Rey",
            reply:"要去撸串儿么，鶸鸡。",
            time:"凹凸历2019.07.02 21:50",
        },]
        return replyList;
    }
    render() {
        let replyList = this.getReplyList();
        return (
            replyList.map((item,i)=>(
                <ReplyList ReplyList={item}></ReplyList>
            ))
        )
    }
}