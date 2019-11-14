import React from 'react'
import {Avatar} from 'antd'
import {Link} from 'react-router-dom'

var FansListCss=require('../FansList/fanslist.css')

export default class FansList extends React.Component{
    
    render(){
        console.log(this.props.fansListPage)
        return(
            <div>
                <div className={FansListCss.content}>
                    <p className={FansListCss.name}>
                        <Link to="/userpage">
                            <Avatar icon="user" />{this.props.FansList.name}
                        </Link>
                    </p>
                    <p className={FansListCss.autograph}>{this.props.FansList.autograph}</p>
                </div>
            </div>
        )
    }
}