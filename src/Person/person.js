import React from 'react';
import img2 from '../imgs/03.gif';
import { Icon, message, Upload, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import Axios from 'axios';

var PersonCss = require('../Person/Person.css')


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class Avatar extends React.Component {
  state = {
    loading: false,
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
      </Upload>
    );
  }
}


export default class Person extends React.Component {
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
            }
    Axios.post({
        url:"/user/infousername",
        data:JSON.stringify(data)
    }).then(result=>{
        if(result.state==1){
            message.info("修改成功")
        }
    })
}
upload = ()=>{
  var data={
      "birth":this.state.birth,
          }
  Axios.post({
      url:"/user/infobirth",
      data:JSON.stringify(data)
  }).then(result=>{
      if(result.state==1){
          message.info("修改成功")
      }
  })
}
upload = ()=>{
  var data={
      "gender":this.state.gender,
          }
  Axios.post({
      url:"/user/infogender",
      data:JSON.stringify(data)
  }).then(result=>{
      if(result.state==1){
          message.info("修改成功")
      }
  })
}
upload = ()=>{
  var data={
      "yours":this.state.yours,
          }
  Axios.post({
      url:"/user/infoyours",
      data:JSON.stringify(data)
  }).then(result=>{
      if(result.state==1){
          message.info("修改成功")
      }
  })
}


  render() {
    return (
      <div className={PersonCss.backgroundphoto}>
        <Row>
          <Col span={8}></Col>
          <Col span={8}><div className={PersonCss.header}>
            <div className={PersonCss.top}>
              <Icon type="github" />账号信息设置
               </div>
            <div>
              <div className={PersonCss.center}>
                <img src={img2}></img><span>|</span>用户
                    <div className={PersonCss.centerbotton}><Link to="/registerPage">修改密码</Link></div>
              </div>
              <div></div>
            </div>
            <div className={PersonCss.right}>
              <div className={PersonCss.rightperson}>个人信息<br></br></div>
              头像<Avatar />
              用户名：<input type="text" name="username" value={this.state.username} onChange={e=>this.changeValue(e)}/><br></br>
              个性签名：<input type="text" name="yours" value={this.state.yours} onChange={e=>this.changeValue(e)}/><br></br>
              性别：<input type="text" name="gender" value={this.state.gender} onChange={e=>this.changeValue(e)}/><br></br>
              出生日期：<input type="text" name="birth" value={this.state.birth} onChange={e=>this.changeValue(e)}/><br></br>
              <div className={PersonCss.botton}><button>确认</button><span></span><button>取消</button></div>
            </div>

          </div></Col>
          <Col span={8}></Col>
        </Row>

      </div>
    )
  }
}