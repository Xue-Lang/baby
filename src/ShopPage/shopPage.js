import React from 'react';
import {Icon,Input, Row,Col} from 'antd';
import {Link} from 'react-router-dom';
import Item from 'antd/lib/list/Item';
import ProductPage from '../ProductPage/productPage';
var ShopPage= require("./shopPage.css")
export default class shopPage extends React.Component{
    getProductList(){
        let dataList=[{
            id:1,
            img:"/imgs/1.jpg",
            name:"  纸尿裤",
            price:"￥：20.00",
            describe:"宝宝纸尿裤  ",
            link:"https://detail.tmall.com/item.htm?spm=a230r.1.14.22.7b655e188FB01q&id=567670659520&ns=1&abbucket=11"
        },
        {
            id:2,
            img:"/imgs/2.jpg",
            name:"沐浴露",
            price:"￥：99.00",
            describe:"婴儿护肤沐浴露",
            link:"https://detail.tmall.com/item.htm?spm=a230r.1.14.21.16f84bb47ddJkX&id=529681179193&ns=1&abbucket=11&skuId=3915620830187"
        },
        {
            id:3,
            img:"/imgs/3.jpg",
            name:"  奶瓶",
            price:"￥：59.99",
            describe:"不锈钢奶瓶  ",
            link:"https://detail.tmall.com/item.htm?id=526408837757&ali_refid=a3_430583_1006:1122168011:N:4mdusFQsyHskDa5C371QZQ==:94a189fb1ec378175411f05917dcf44e&ali_trackid=1_94a189fb1ec378175411f05917dcf44e&spm=a230r.1.14.1"
        },
        {
            id:4,
            img:"/imgs/4.jpg",
            name:"  学步车",
            price:"￥：199.99",
            describe:"婴儿学步车  ",
            link:"https://detail.tmall.com/item.htm?spm=a230r.1.14.30.29031066IVUYIE&id=591335157856&ns=1&abbucket=11"
        }]
        return dataList;
    }

    render(){
        let dataList = this.getProductList();
        return(
            <div className={ShopPage.all}>
                <div className={ShopPage.header}>
                    <div className={ShopPage.first}>
                        <div className={ShopPage.text}>商城
                        <Link to="/userpage" className={ShopPage.user}><Icon type="user">个人主页</Icon></Link></div>
                    </div>
                    <div className={ShopPage.second}>
                        <div className={ShopPage.other}>
                            <Link to="/homePage" className={ShopPage.homepage}><Icon type="home"></Icon>主页</Link>
                            <Link to="/shopping" className={ShopPage.car}><Icon type="shopping-cart"></Icon>购物车</Link>
                            <Link to="/service" className={ShopPage.service}><Icon type="customer-service"></Icon>联系客服</Link>
                        </div>
                    </div>
                    <div className={ShopPage.third}>
                        <Row>
                            <Col span={8}></Col>
                            <Col span={8}>
                                <Input.Search placeholder="请输入想搜索的内容" onSearch={value => console.log(value)} enterButton className={ShopPage.input}/>
                            </Col>
                            <Col span={8}></Col>
                        </Row>
                    </div>
                </div>
                <div className={ShopPage.center}>
                    <div className={ShopPage.box }>
                        {dataList.map((Item,i)=>(    
                        <a href={Item.link}>                
                            <ProductPage product={Item}></ProductPage>
                        </a>  
                        ))  
                        }
                    </div>
                </div>
            </div>
            
        )
    }
}