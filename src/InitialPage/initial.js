import React from 'react'
import img1 from '../imgs/first.png'
import {Button,Input, message} from 'antd'
import {BrowserRouter,Route,Switch,Redirect,Link} from 'react-router-dom'
import Axios from 'axios';
var initial=require("./initial.css");

export default class InitialPage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    upload = ()=>{
        var data={
            "username":this.state.username,
            "password":this.state.password,
                }
        Axios.post({
            url:"/user/login",
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.state==1){
                message.info("登录成功")
                this.props.history.push("/homePage")
            }else if(result.state==0){
                message.info("用户名或密码错误")
            }
        })
    }
    render(){
        return(
            <div className={initial.layout}>
                
                <div className="img1" className={initial.img2}>
                    <img src={img1}></img>
                    <Button type="link" size={15} target href="/homePage" className={initial.homgPage}>
                        <Link to="/homgPage">主页</Link>
                    </Button>
                    <div className={initial.Slogan1}>育婴，给孩子更好的起点</div>
                    <div className={initial.information}>用户：<Input type="text" name="username" value={this.state.username} onChange={e=>this.changeValue(e)}/>
                    <br></br>
                    密码：<Input type="password" name="password" value={this.state.password} onChange={e=>this.changeValue(e)}/>
                    <br></br>
                    
                        <Button className={initial.fButton} size={18}>登陆</Button>
                    </div>
                </div>
                <div className={initial.Jump}>
                    <Button type="link" size={18} target href="/"><Link to="/registerPage">没有账号？注册</Link></Button>
                </div>
            </div>
        )
    }
}