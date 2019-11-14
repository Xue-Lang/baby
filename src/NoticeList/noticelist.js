import React from 'react'
import { Avatar, Icon} from 'antd'
import {Link} from 'react-router-dom'

var noticelistCss = require('../NoticeList/noticelist.css')

export default class NoticeList extends React.Component {

    render() {
        console.log()
        return (
            <div className={noticelistCss.all}>
                <div className={noticelistCss.content}>
                    <p className={noticelistCss.name}>
                        <Avatar icon="bell"/>{this.props.NoticeList.name}
                            <p className={noticelistCss.time}>{this.props.NoticeList.time}</p>
                        {/* img src={} */}
                    </p>
                    <p className={noticelistCss.notice}>{this.props.NoticeList.call}<br></br>
                    <Link><Icon type="delete"/></Link>
                    </p>
                </div>
            </div>
        )
    }
}