import React from 'react'
import FollowList from '../FollowList/followlist';

export default class followPage extends React.Component{

    getFollowList(){
        let followList=[{
            id:1,
            name:"Rey",
            autograph:"When you see a weak chicken, you must step on it. When you see the opportunity, you must step on it."
        },{
            id:2,
            name:"Kerry",
            autograph:"It's better to kneel down and worship me than to believe in nothingness."
        },{
            id:3,
            name:"Godros",
            autograph:"It's noisy,You are scum！！！"
        },{
            id:4,
            name:"Abby",
            autograph:"If I give up like this, what's the point of what I've done before?"
        }]
        return followList;
    }
    render(){
        let followList = this.getFollowList();
        return(
            followList.map((item,i)=>(
                <FollowList FollowList={item}></FollowList>
            ))
        )
    }
}