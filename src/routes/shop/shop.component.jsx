import React from "react";
import './shop.styles.scss'


import { useContext } from "react";
import { productsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
const SHOP = () => {
  const { products } = useContext(productsContext);
  return (
    <div className="products-container" >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SHOP;
