import React from 'react'
import CallList from '../CallList/calllist';

var callCss = require('../Call/call.css')

export default class callPage extends React.Component{

    getCallList(){
        let callList=[{
            id:1,
            name:"Grey",
            call:"@我：。。。这几天暂时别去寒冰湖",
            time:"凹凸历2019.05.16  9:00"
        },{
            id:2,
            name:"Daniel",
            call:"@我：还有两天2小时12分海选赛便要结束了，请加油。",
            time:"凹凸历2019.05.25  12:00"
        },{
            id:3,
            name:"Rey",
            call:"@我：哼，小鬼，来大厅0410号房拿积分。",
            time:"凹凸历2019.06.17  19:23"
        },{
            id:4,
            name:"Karry",
            call:"@我：本小姐在嚎哭洞穴，要来吗？",
            time:"凹凸历2019.06.30  10:12"
        }]
        return callList;
    }
    render(){
        let callList = this.getCallList();
        return(
            callList.map((item,i)=>(
                <CallList CallList={item}></CallList>
            ))
        )
    }
}