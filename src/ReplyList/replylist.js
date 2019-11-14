import React from 'react'
import { Avatar, Icon} from 'antd'
import {Link} from 'react-router-dom'

var replylistCss = require('../ReplyList/replylist.css')

export default class ReplyList extends React.Component {

    render() {
        console.log()
        return (
            <div className={replylistCss.all}>
                <div className={replylistCss.content}>
                    <p className={replylistCss.name}>
                        <Link to="/userpage">
                            <Avatar icon="user"/>{this.props.ReplyList.name}
                        </Link>
                            <p className={replylistCss.time}>{this.props.ReplyList.time}</p>
                    </p>
                    <p className={replylistCss.reply}>{this.props.ReplyList.reply}<br></br>
                    <Link><Icon type="form"/></Link>
                    </p>
                </div>
            </div>
        )
    }
}