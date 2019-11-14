import React from 'react';
import { Icon, Radio, Row, Col, Divider, Modal, Button } from 'antd';
import img3 from '../imgs/250.gif';
import img4 from '../imgs/251.gif';
import img5 from '../imgs/f.gif';
import img6 from '../imgs/27.gif';
import img7 from '../imgs/25.gif';
import img8 from '../imgs/26.gif';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import BuyPage from './Buy/buy';


var ShoppingCss = require('../Shopping/shopping.css')

export default class Shopping extends React.Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    hideModal = () => {
        this.setState({
          visible: false,
        });
      };
    render() {
        return (
            <div className={ShoppingCss.backscreen}>
                <div className={ShoppingCss.mainpage}>
                    <div className={ShoppingCss.Buytop}>
                        <Icon type="shopping-cart" />
                        购物车
                    </div>
                    <Divider />
                    <div className={ShoppingCss.center}>
                        <Radio></Radio><img src={img3}></img><div className={ShoppingCss.goods}>国产奶粉君乐宝乐纯金装3段婴幼儿
                            牛奶粉1-3岁宝宝1600g盒装三段 ￥138
                            <BrowserRouter basename="shopping">
                                <Link to="/buy">查看详情</Link>  
                                <Route path="/buy" component={BuyPage}></Route>
                            </BrowserRouter>
                            </div>
                        <br></br>
                        <Radio></Radio><img src={img4}></img><div className={ShoppingCss.product}>日本Moony尤妮佳进口男女宝宝
                            通用纸尿裤尿不湿轻薄透气M64 ￥258
                            </div>
                        <br></br>
                        <div className={ShoppingCss.car}><Radio></Radio><img src={img5}></img></div><div className={ShoppingCss.carword}>英国hotmom婴儿推车高景观可坐可躺折叠轻便
                            进口宝宝儿童手推车 ￥999</div>
                        <br></br>
                        <div className={ShoppingCss.car01}><Radio></Radio><img src={img6}></img></div><div className={ShoppingCss.carword}>小壮熊新生婴儿硅胶奶瓶全软宝宝宽口径防胀气
                            奶瓶断奶仿母乳防摔 ￥79</div>

                    </div>
                    <Divider />
                    <div className={ShoppingCss.buybotton}>
                        总计：________<Icon type="pay-circle" />

                        <Button type="primary" onClick={this.showModal}>
                            确认支付</Button>
                        <Modal
                            title="请扫码完成支付"
                            visible={this.state.visible}
                            onOk={this.hideModal}
                            onCancel={this.hideModal}
                            okText="确认"
                            cancelText="取消"
                        >
                            <p><img src={img7}></img><div className={ShoppingCss.paycode01}>微信</div></p>
                            <p><img src={img8}></img><div className={ShoppingCss.paycode02}> 支付宝</div></p>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}