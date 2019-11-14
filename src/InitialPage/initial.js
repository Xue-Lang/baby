import React from 'react'
import img1 from '../imgs/first.png'
import {Button,Input} from 'antd'
import {BrowserRouter,Route,Switch,Redirect,Link} from 'react-router-dom'
var initial=require("./initial.css");

export default class InitialPage extends React.Component{
    render(){
        return(
            <div className={initial.layout}>
                
                <div className="img1" className={initial.img2}>
                    <img src={img1}></img>
                    <Button type="link" size={15} target href="/homePage" className={initial.homgPage}>
                        <Link to="/homgPage">主页</Link>
                    </Button>
                    <div className={initial.Slogan1}>育婴，给孩子更好的起点</div>
                    <div className={initial.information}>用户：<Input  className={initial.user} maxlength={11} placeholder="username or telephone number"  mountNode/>
                    <br></br>
                    密码：<Input.Password  className={initial.password} placeholder="input password" mountNode/>
                    <br></br>
                    <Link to="/homePage">
                        <Button className={initial.fButton} size={18}>登陆</Button>
                    </Link></div>
                </div>
                <div className={initial.Jump}>
                    <Button type="link" size={18} target href="/"><Link to="/registerPage">没有账号？注册</Link></Button>
                </div>
            </div>
        )
    }
}