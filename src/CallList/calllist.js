import React from 'react'
import { Avatar, Icon} from 'antd'
import {Link} from 'react-router-dom'

var calllistCss = require('../CallList/calllist.css')

export default class CallList extends React.Component {

    render() {
        console.log()
        return (
            <div className={calllistCss.all}>
                <div className={calllistCss.content}>
                    <p className={calllistCss.name}>
                        <Link to="/userpage">
                            <Avatar icon="user"/>{this.props.CallList.name}
                        </Link>
                            <p className={calllistCss.time}>{this.props.CallList.time}</p>
                    </p>
                    <p className={calllistCss.call}>{this.props.CallList.call}<br></br>
                    <Link><Icon type="form"/></Link>
                    </p>
                </div>
            </div>
        )
    }
}