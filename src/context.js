import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
        products:[],
        detailProduct:detailProduct
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts = () =>{
        let tempProducts= [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        this.setState(() => {
            return {products:tempProducts}
        });
    }
    handleDetail = () => {
        console.log("Hello from detail");
    }

    addToCart = () => {
        console.log("Hello from add to cart");
    }

    render() {
        return (
          <ProductContext.Provider value={{...this.state,
          handleDetail: this.handleDetail,
          addTocart: this.addToCart}}>
        
            {this.props.children}
          </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export{ ProductProvider, ProductConsumer };