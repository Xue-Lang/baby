import React from 'react'
import NoticeList from '../NoticeList/noticelist';
import img1 from '../imgs/1.jpg'

var noticeCss = require('../Notice/notice.css')

export default class noticePage extends React.Component{

    getNoticeList(){
        let noticeList=[{
            id:1,
            name:"系统通知",
            call:"参赛者Rey通过系统转给你'1000'积分。",
            time:"凹凸历2019.07.02",
            // img:''
        },{
            id:2,
            name:"系统通知",
            call:"您于凹凸历2019年6月21日在甜品店购买蛋糕花费'50'积分",
            time:"凹凸历2019.06.28"
        },{
            id:3,
            name:"系统通知",
            call:"恭喜您打败野猪怪，获得300积分。",
            time:"凹凸历2019.06.25"
        }]
        return noticeList;
    }
    render(){
        let noticeList = this.getNoticeList();
        return(
            noticeList.map((item,i)=>(
                <NoticeList NoticeList={item}></NoticeList>
            ))
        )
    }
}