import React from 'react'
import FansList from '../FansList/fanslist';

export default class fansPage extends React.Component{

    getFansList(){
        let fansList=[{
            id:1,
            name:"JIN",
            autograph:"Grey is my best friend and my favorite."
        },{
            id:2,
            name:"Grey",
            autograph:"... That fool,I will protect him."
        },{
            id:3,
            name:"Anmicious",
            autograph:"I swear to die for my love"
        }]
        return fansList;
    }
    render(){
        let fansList = this.getFansList();
        return(
            fansList.map((item,i)=>(
                <FansList FansList={item}></FansList>
            ))
        )
    }
}