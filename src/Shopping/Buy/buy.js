import React from 'react'
import{Card }from 'antd';
import img9 from '../Buy/123.jpg';
import img10 from '../Buy/124.jpg';
import img11 from '../Buy/125.jpg';
import img12 from '../Buy/126.jpg';



var BuyCss = require('../Buy/buy.css');

export default class BuyPage extends React.Component {
    render() {
        return (
            <div>
            <div className={BuyCss.title}><Card title="橘育婴专有商品" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>认证提交中，请稍等....</p>
              
            </Card></div>
            <Card size="small" title="认证表单" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p><h1>国产奶粉君乐宝乐纯金装3段婴幼儿
                牛奶粉1-3岁宝宝1600g盒装三段</h1></p>
              <div className={BuyCss.word}><p>认证测试中...</p></div>
              <p>若完成质检，请放心使用，给宝宝提供更好的营养</p>
            </Card>
          </div>
        )
    }
}