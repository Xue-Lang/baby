import React from 'react';
var productPage = require("./productPage.css")

export default class ProductPage extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.product.img} className={productPage.img}/>
                <p className={productPage.text}>{this.props.product.name}</p>
                <p className={productPage.text}>{this.props.product.price}</p>
                <p className={productPage.text}>{this.props.product.describe}</p>
            </div>
        )
    }
}