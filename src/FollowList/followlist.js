import React from 'react'
import {Avatar} from 'antd'
import {Link} from 'react-router-dom'

var FollowListCss = require('../FollowList/followlist.css')

export default class FollowList extends React.Component{

    render(){
        console.log(this.props.followListPage)
        return(
            <div>
                <div className={FollowListCss.content}>
                    <p className={FollowListCss.name}>
                        <Link to="/userpage">
                            <Avatar icon="user"/>{this.props.FollowList.name}
                        </Link>
                    </p>
                    <p className={FollowListCss.autograph}>{this.props.FollowList.autograph}</p>
                </div>
            </div>
        )
    }
}